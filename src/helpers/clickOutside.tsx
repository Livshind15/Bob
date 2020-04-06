import { useEffect, RefObject } from 'react';

export const useOnClickOutside = (refs: React.RefObject<HTMLDivElement | undefined>[], handler: () => void): void => {
    useEffect(() => {
        const listener = (event): void => {
            if (refs.some((ref) => !ref.current || ref.current.contains(event.target))) {
                return;
            }
            handler();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return (): void => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [refs, handler]);
};
