// Bundles src/ → assets/ (committed, so GitHub Pages just serves the repo root).
//   npm run build   one-shot, minified, hashed file names, index.html re-pointed at them
//   npm run dev     watch + local server on http://localhost:5173 (unminified, sourcemaps)
import { build, context } from 'esbuild';
import { rmSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const serve = process.argv.includes('--serve');

const opts = {
  absWorkingDir: root,
  entryPoints: { app: 'src/main.js' },
  outdir: 'assets',
  entryNames: serve ? '[name]' : '[name]-[hash]',
  chunkNames: 'chunks/[name]-[hash]',
  bundle: true,
  splitting: true,
  format: 'esm',
  target: ['es2021', 'chrome100', 'safari15.4', 'firefox100'],
  minify: !serve,
  sourcemap: serve ? 'inline' : false,
  legalComments: 'none',
  metafile: true,
  logLevel: 'info',
};

// stale bundles would otherwise pile up in git
rmSync(join(root, 'assets/chunks'), { recursive: true, force: true });
for (const f of readdirSync(join(root, 'assets'))) if (/^app(-[A-Z0-9]+)?\.js$/.test(f)) rmSync(join(root, 'assets', f));

if (serve) {
  const ctx = await context({ ...opts, entryNames: '[name]' });
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: root, port: 5173 });
  console.log(`dev server → http://localhost:${port}`);
} else {
  const { metafile } = await build(opts);
  const entry = Object.keys(metafile.outputs).find((o) => metafile.outputs[o].entryPoint);
  const entryFile = entry.replace(/^assets\//, '');

  // point index.html at the new bundle and version the stylesheet by content
  const cssHash = createHash('md5').update(readFileSync(join(root, 'assets/site.css'))).digest('hex').slice(0, 8);
  let html = readFileSync(join(root, 'index.html'), 'utf8');
  html = html.replace(/(src="\.\/assets\/)app[^"]*\.js"/, `$1${entryFile}"`);
  html = html.replace(/(href="\.\/assets\/site\.css)(\?v=[a-z0-9]+)?"/, `$1?v=${cssHash}"`);
  const bootChunk = Object.keys(metafile.outputs).find((o) => metafile.outputs[o].entryPoint?.endsWith('src/gl/boot.js'));
  if (bootChunk) html = html.replace(/chunks\/boot-[A-Za-z0-9]+\.js/, bootChunk.replace(/^assets\//, ''));
  writeFileSync(join(root, 'index.html'), html);

  const report = [];
  const add = (p) => {
    const buf = readFileSync(join(root, p));
    report.push(`${p.padEnd(44)} ${(buf.length / 1024).toFixed(1).padStart(7)} KB   gzip ${(gzipSync(buf).length / 1024).toFixed(1).padStart(6)} KB`);
  };
  add(entry);
  for (const f of readdirSync(join(root, 'assets/chunks'))) add('assets/chunks/' + f);
  console.log('\n' + report.join('\n') + `\n\nindex.html → ${entryFile}, site.css?v=${cssHash}`);
}
