import ScrollReveal from '../shared/ScrollReveal';

export default function StrategicIdea() {
    return (
        <section className="s" id="overview">
            <ScrollReveal className="s-label">The Strategic Idea</ScrollReveal>
            <ScrollReveal className="s-title" style={{ maxWidth: '640px' }}>
                If their own site looks this good, <em>imagine what they'd build for you.</em>
            </ScrollReveal>
            <ScrollReveal className="s-sub">
                Most marketing agency websites claim creativity but look identical. BA Digi's site silently demonstrates capability through its own execution. Every pixel is proof of craft. Seven services grouped into three pillars that tell one story: <strong style={{ color: 'var(--cream-bright)' }}>Build it. Grow it. Launch it.</strong>
            </ScrollReveal>
        </section>
    );
}
