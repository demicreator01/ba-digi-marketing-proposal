import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function ScrollReveal({ children, className = '', style }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(el);

        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    return (
        <div ref={ref} className={`reveal ${className}`} style={style}>
            {children}
        </div>
    );
}
