import ScrollReveal from '../shared/ScrollReveal';
import './StrategicIdea.css';

export default function StrategicIdea() {
    return (
        <section>
            <ScrollReveal className="section-label">The Strategic Idea</ScrollReveal>
            <ScrollReveal className="section-title" style={{ maxWidth: '640px' } as React.CSSProperties}>
                If their own site looks this good, <em>imagine what they'd build for you.</em>
            </ScrollReveal>
            <ScrollReveal className="section-sub">
                Most marketing agency websites claim creativity but look identical. BA Digi's site silently demonstrates capability through its own execution. Every pixel is proof of craft. Seven services grouped into three pillars that tell one story: <strong style={{ color: 'var(--cream-bright)' }}>Build it. Grow it. Launch it.</strong>
            </ScrollReveal>
        </section>
    );
}
