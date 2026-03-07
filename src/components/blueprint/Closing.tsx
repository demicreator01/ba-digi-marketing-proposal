import ScrollReveal from '../shared/ScrollReveal';
import './Closing.css';

export default function Closing() {
    return (
        <div className="closing">
            <ScrollReveal className="s-label">Next Step</ScrollReveal>
            <ScrollReveal as="h2">Let's Build <em>BA Digi.</em></ScrollReveal>
            <ScrollReveal className="closing-sub" as="p">
                This blueprint is the foundation. Every page, every section, every interaction mapped. What follows is building it — page by page, pixel by pixel.
            </ScrollReveal>
            <ScrollReveal as="a" href="#" className="closing-cta">
                Let's Start
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </ScrollReveal>
        </div>
    );
}
