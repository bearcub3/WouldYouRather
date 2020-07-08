import { createContext, useContext } from 'react';

export const ResizeContext = createContext();

export function useResize() {
    return useContext(ResizeContext);
}
