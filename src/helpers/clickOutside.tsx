import { useEffect, RefObject } from 'react';

export const useOnClickOutside = (ref: React.RefObject<HTMLDivElement | undefined>, handler: () => void): void => {
    useEffect(() => {
        const listener = (event: { target: any }): void => {
            if (!ref.current || ref.current.contains(event.target)) {
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
    }, [ref, handler]);
};
