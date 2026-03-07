import { useEffect, useRef } from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!barRef.current) return;
            const scrollY = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const percentage = (scrollY / docHeight) * 100;
            barRef.current.style.width = `${percentage}%`;
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call to set width on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="progress" ref={barRef} />;
}
