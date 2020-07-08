import { createContext, useContext } from 'react';

export const HamburgerContext = createContext();

export function useHamburger() {
    return useContext(HamburgerContext);
}
