// Pre-publish sanity checks. No browser needed.
//   npm run check          local files only
//   npm run check -- --net also HEAD/GET every external link (reports dead ones, never removes them)
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'assets/site.css'), 'utf8');
let bad = 0;
const fail = (m) => { bad++; console.log('  ✗', m); };
const ok = (m) => console.log('  ✓', m);

console.log('paths');
const abs = [...html.matchAll(/(?:src|href)="(\/(?!\/)[^"]*)"/g)].map((m) => m[1]).concat([...css.matchAll(/url\(["']?(\/(?!\/)[^)"']*)/g)].map((m) => m[1]));
abs.length ? abs.forEach((a) => fail('absolute path (breaks under /app/): ' + a)) : ok('no root-absolute paths (site lives under /app/)');

console.log('files');
const refs = new Set();
for (const m of html.matchAll(/(?:src|href)="(\.\/[^"?#]+)/g)) refs.add(m[1].replace(/^\.\//, ''));
for (const m of css.matchAll(/url\(["']?\.\/([^)"'?#]+)/g)) refs.add('assets/' + m[1]);
for (const m of html.matchAll(/content="https:\/\/brxerq\.github\.io\/app\/([^"]+)"/g)) refs.add(m[1]);
for (const r of refs) if (!existsSync(join(root, r))) fail('referenced but missing: ' + r);
ok(`${refs.size} local references resolve`);
for (const dir of ['projects', 'logos']) {
  for (const f of readdirSync(join(root, dir))) if (!html.includes(`./${dir}/${f}`)) fail(`unused file: ${dir}/${f}`);
}
ok('every file in projects/ and logos/ is used');
// images the scripts load at runtime
for (const f of ['assets/img/hassaan.webp', 'assets/img/earth.png']) existsSync(join(root, f)) ? null : fail('runtime asset missing: ' + f);

console.log('size');
const jsFiles = readdirSync(join(root, 'assets')).filter((f) => /^app.*\.js$/.test(f));
jsFiles.forEach((f) => { const b = readFileSync(join(root, 'assets', f)); ok(`${f}  ${(b.length / 1024).toFixed(0)} KB  gzip ${(gzipSync(b).length / 1024).toFixed(0)} KB`); });
if (existsSync(join(root, 'assets/chunks'))) for (const f of readdirSync(join(root, 'assets/chunks'))) { const b = readFileSync(join(root, 'assets/chunks', f)); ok(`chunks/${f}  gzip ${(gzipSync(b).length / 1024).toFixed(0)} KB`); }
const entry = html.match(/src="\.\/assets\/(app[^"]*\.js)"/)?.[1];
entry && jsFiles.includes(entry) ? ok('index.html points at the built bundle ' + entry) : fail('index.html does not point at a built bundle — run npm run build');

if (process.argv.includes('--net')) {
  console.log('external links');
  const urls = [...new Set([...html.matchAll(/href="(https?:\/\/[^"]+)"/g)].map((m) => m[1]).filter((u) => !u.includes('brxerq.github.io/app')))];
  await Promise.all(urls.map(async (u) => {
    try {
      let r = await fetch(u, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(12000), headers: { 'user-agent': 'Mozilla/5.0 link-check' } });
      if (r.status === 405 || r.status === 403 || r.status >= 500) r = await fetch(u, { redirect: 'follow', signal: AbortSignal.timeout(12000), headers: { 'user-agent': 'Mozilla/5.0 link-check' } });
      r.status < 400 ? ok(`${r.status} ${u}`) : console.log(`  ! ${r.status} ${u}  (check by hand; bots are sometimes blocked)`);
    } catch (e) {
      console.log(`  ! ${u}  ${e.cause?.code || e.message}`);
    }
  }));
}

console.log(bad ? `\n${bad} problem(s)` : '\nall good');
process.exit(bad ? 1 : 0);
