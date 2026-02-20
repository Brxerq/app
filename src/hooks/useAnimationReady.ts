import { createContext, useContext } from 'react';

/**
 * Set to `true` by App once the loading-screen fade-out is fully complete
 * and the main content is fully visible. Sections use this to know when
 * to fire entrance animations.
 */
export const AnimationReadyContext = createContext<boolean>(false);

export function useAnimationReady() {
    return useContext(AnimationReadyContext);
}
