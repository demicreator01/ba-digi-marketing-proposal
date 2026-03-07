import ScrollReveal from '../shared/ScrollReveal';

export default function PageContact() {
    return (
        <section className="s">
            <div className="page-detail">
                <ScrollReveal className="page-header">
                    <div className="page-num-large">04</div>
                    <div className="page-name">Contact</div>
                </ScrollReveal>
                <ScrollReveal className="page-intent" as="p">
                    The simplest page. The selling is done. This page just needs to <strong style={{ color: 'var(--cream-bright)' }}>not get in the way.</strong>
                </ScrollReveal>

                <div className="section-cards">
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 1</div>
                            <div className="sc-name">Hero</div>
                        </div>
                        <div className="sc-content">
                            "Let's Talk About Your Project." — "Whether you're ready to start or just exploring — we're here."
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 2</div>
                            <div className="sc-name">Contact Layout</div>
                        </div>
                        <div className="sc-content">
                            <strong>Two-column layout (desktop), stacked (mobile):</strong><br /><br />
                            <strong>Left — Contact info:</strong> Email (clickable), Phone (tap-to-call), WhatsApp (prominent green button), Location/timezone.<br /><br />
                            <strong>Right — Quick form:</strong> Name, Email, What do you need? (dropdown), Budget range (dropdown), Brief message, Submit button (copper).<br /><br />
                            If the visitor came through the configurator, the "What do you need?" and "Budget range" are pre-filled from their quiz answers.
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 3</div>
                            <div className="sc-name">Closing Note</div>
                        </div>
                        <div className="sc-content">
                            "Prefer to talk? Call us directly or message on WhatsApp. No contact forms required." — Multiple paths, zero friction.
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
