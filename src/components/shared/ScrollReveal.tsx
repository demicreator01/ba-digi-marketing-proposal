import { useEffect, useRef, ElementType, HTMLAttributes, ReactNode } from 'react';

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    as?: ElementType;
    href?: string;
}

export default function ScrollReveal({ children, className = '', as: Component = 'div', ...props }: ScrollRevealProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08 }
        );

        const el = ref.current;
        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, []);

    return (
        <Component ref={ref} className={`reveal ${className}`} {...props}>
            {children}
        </Component>
    );
}
