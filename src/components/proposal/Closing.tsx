import ScrollReveal from '../shared/ScrollReveal';
import './Closing.css';

export default function Closing() {
    return (
        <div className="closing">
            <ScrollReveal className="section-label">Next Step</ScrollReveal>
            <ScrollReveal>
                <h2>Let's Build <em>BA Digi.</em></h2>
            </ScrollReveal>
            {/* <ScrollReveal className="closing-sub">
                Answer the 10 items above. We take it from there — page by page, section by section, until the site is live and converting visitors into clients.
            </ScrollReveal> */}
            <ScrollReveal>
                <a href="#" className="closing-cta">
                    Let's Start
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </a>
            </ScrollReveal>
        </div>
    );
}
