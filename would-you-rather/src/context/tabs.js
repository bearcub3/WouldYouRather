import { createContext, useContext } from 'react';

export const TabContext = createContext();

export function useTabs() {
    return useContext(TabContext);
}
