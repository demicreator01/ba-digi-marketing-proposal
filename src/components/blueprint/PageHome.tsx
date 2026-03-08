import ScrollReveal from '../shared/ScrollReveal';
import './PageHome.css';

export default function PageHome() {
    return (
        <section className="s" id="pages">
            <div className="page-detail">
                <ScrollReveal className="page-header">
                    <div className="page-num-large">01</div>
                    <div className="page-name">Home</div>
                </ScrollReveal>
                <ScrollReveal className="page-intent" as="p">
                    The showpiece. One job: make the visitor stay. It doesn't sell — it demonstrates. The emotional arc: <strong style={{ color: 'var(--cream-bright)' }}>Impress → Educate → Prove → Differentiate → Tease → Convert.</strong>
                </ScrollReveal>

                <div className="section-cards">
                    {/* Hero */}
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 1</div>
                            <div className="sc-name">Hero</div>
                            <div className="sc-belief">"This agency is different — polished, confident, clearly good at design."</div>
                        </div>
                        <div className="sc-content">
                            <strong>Headline:</strong> "Digital Marketing & Creative Services <em>Built to Perform.</em>" — not generic "We're a creative agency."<br /><br />
                            <strong>Subtext:</strong> "Website development, marketing campaigns, and creative design — engineered for businesses that take growth seriously."<br /><br />
                            <strong>Two CTAs:</strong> "Get a Proposal" (copper, primary — ready buyer) and "View Packages" (outlined — researcher).<br /><br />
                            <strong>Trust bar:</strong> Three micro-promises: ◆ Strategy-first approach · ◆ Transparent pricing · ◆ End-to-end delivery.<br /><br />
                            <strong>Visual element (right side):</strong> 2–3 overlapping dark browser frames at slight angles showing premium websites — built with CSS, not images. Silently says "we build websites."
                            <div className="connects">→ Connects to: Pillars section below — hero makes them curious, pillars explain the methodology.</div>
                        </div>
                    </ScrollReveal>

                    {/* Pillars */}
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 2</div>
                            <div className="sc-name">The Three Pillars</div>
                            <div className="sc-belief">"They have a structured methodology: Design, Build, Scale."</div>
                        </div>
                        <div className="sc-content">
                            <strong>Intro:</strong> "One Agency. Three Disciplines." — "From the first pixel to the last campaign report."<br /><br />
                            Three tall cards side by side, each with a colored accent line:
                            <div className="pillars-row">
                                <div className="pill-mini">
                                    <div className="pm-name">Design</div><div className="pm-tag">Shape the perception</div>
                                </div>
                                <div className="pill-mini">
                                    <div className="pm-name">Build</div><div className="pm-tag">Engineer the foundation</div>
                                </div>
                                <div className="pill-mini">
                                    <div className="pm-name">Scale</div><div className="pm-tag">Amplify what we build</div>
                                </div>
                            </div>
                            Each card lists its 3 services beneath the tagline. Each links to its section on the Services page.
                            <div className="sc-note">Most agencies list services in a flat grid — "SEO, Web Design, PPC..." Grouping into pillars creates a journey, not a menu. The client thinks "they design it, build it, then scale it."</div>
                            <div className="connects">→ Connects to: Services page (deep dive) and Proof section below.</div>
                        </div>
                    </ScrollReveal>

                    {/* Proof */}
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 3</div>
                            <div className="sc-name">Proof of Craft</div>
                            <div className="sc-belief">"Their work quality is visually evident — I can see it."</div>
                        </div>
                        <div className="sc-content">
                            A staggered grid of 4 work preview cards. Each card shows <strong>[REDACTED]</strong> as the label inside a dark styled frame with radial glow and CSS texture. Not fake screenshots — the atmospheric design of the cards themselves demonstrates capability.<br /><br />
                            <strong>Note below the cards:</strong> "We don't publish client work without permission. <strong>The same discretion we'd extend to you.</strong>"
                            <div className="sc-note">The emptiness is intentional — reframed as professionalism, not absence. The [REDACTED] label signals: "we respect client confidentiality." That's a trust signal for every new client who sees it. Real pieces get added as projects complete with approval.</div>
                            <div className="connects">→ Connects to: Why BA Digi section — from "look at what we do" to "here's why we're different."</div>
                        </div>
                    </ScrollReveal>

                    {/* Why */}
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 4</div>
                            <div className="sc-name">Why BA Digi</div>
                            <div className="sc-belief">"Working with them means clarity, structure, and focus."</div>
                        </div>
                        <div className="sc-content">
                            <strong>Two-column layout.</strong> Left: 4 differentiator rows —
                            <ul className="sc-list">
                                <li><strong>Strategy before execution.</strong> — We don't start building until the thinking is done.</li>
                                <li><strong>Transparent, structured pricing.</strong> — No hourly billing surprises. Packages are fixed.</li>
                                <li><strong>Full-stack delivery.</strong> — Design, development, marketing — one team, one relationship.</li>
                                <li><strong>Built for growth, not busywork.</strong> — We focus on work that moves the needle.</li>
                            </ul>
                            <br />
                            <strong>Right panel</strong> (dark elevated surface, copper left border): "We're not a freelancer marketplace. We're not a volume agency. We're a <em>focused creative studio</em> that builds things properly."
                            <div className="sc-note">The differentiators address the three fears every business owner has: "Will they waste my money?" (strategy first), "Will costs spiral?" (transparent pricing), "Will I manage multiple vendors?" (full-stack).</div>
                            <div className="connects">→ Connects to: Packages Preview — from "here's why we're different" to "here's what it costs."</div>
                        </div>
                    </ScrollReveal>

                    {/* Packages Preview */}
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 5</div>
                            <div className="sc-name">Packages Preview</div>
                            <div className="sc-belief">"Their pricing is real and there's a tier for me."</div>
                        </div>
                        <div className="sc-content">
                            A teaser — four tier cards showing name, starting price, and one-liner. Not the full breakdown.
                            <div className="tiers-row">
                                <div className="tier-mini"><div className="tm-price">£3k</div><div className="tm-name">Starter</div></div>
                                <div className="tier-mini"><div className="tm-price">£5k</div><div className="tm-name">Growth</div></div>
                                <div className="tier-mini featured"><div className="tm-price">£10k</div><div className="tm-name">Premium</div></div>
                                <div className="tier-mini"><div className="tm-price">£20k</div><div className="tm-name">Enterprise</div></div>
                            </div>
                            Two links below: "See all packages →" and "Not sure? Get a recommendation →"
                            <div className="sc-note">The Home page's job is to get clicks to deeper pages. If you show the full pricing table here, there's no reason to visit the Packages page. The preview answers "is this in my range?" and creates curiosity for "what's included?"</div>
                            <div className="connects">→ Connects to: Packages page and Final CTA below.</div>
                        </div>
                    </ScrollReveal>

                    {/* CTA */}
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 6</div>
                            <div className="sc-name">Final CTA</div>
                            <div className="sc-belief">"I can reach out without committing — this feels approachable."</div>
                        </div>
                        <div className="sc-content">
                            <strong>Heading:</strong> "Ready to build something <em>that actually works?</em>"<br /><br />
                            <strong>Subtext:</strong> "Tell us what you need. We'll tell you exactly what it costs and how we'd do it."<br /><br />
                            Two buttons: "Get a Proposal" (copper) · "Book a Call" (outlined + phone icon)<br /><br />
                            Below: "No commitment. No sales pressure. Just a clear conversation."<br /><br />
                            Trust bar repeated from hero — reinforces positioning at the moment of decision.
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
