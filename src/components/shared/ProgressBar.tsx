import { useEffect, useRef } from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = barRef.current;
            if (!el) return;
            const scrollY = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            const pct = (scrollY / height) * 100;
            el.style.width = `${pct}%`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="progress" ref={barRef} />;
}
