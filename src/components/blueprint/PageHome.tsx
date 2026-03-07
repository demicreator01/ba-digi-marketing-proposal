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
                            <div className="sc-belief">"They have a structured methodology: Build, Grow, Launch."</div>
                        </div>
                        <div className="sc-content">
                            <strong>Intro:</strong> "One Agency. Three Disciplines." — "From the first pixel to the last campaign report."<br /><br />
                            Three tall cards side by side, each with a colored accent line:
                            <div className="pillars-row">
                                <div className="pill-mini">
                                    <div className="pm-name">Build</div><div className="pm-tag">Create the assets</div>
                                </div>
                                <div className="pill-mini">
                                    <div className="pm-name">Grow</div><div className="pm-tag">Drive the results</div>
                                </div>
                                <div className="pill-mini">
                                    <div className="pm-name">Launch</div><div className="pm-tag">Orchestrate the play</div>
                                </div>
                            </div>
                            Each card lists its 2–3 services beneath the tagline. Each links to its section on the Services page.
                            <div className="sc-note">Most agencies list services in a flat grid — "SEO, Web Design, PPC..." Grouping into pillars creates a journey, not a menu. The client thinks "they build it, grow it, then launch campaigns."</div>
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
                            A staggered grid of 4–6 work preview cards. Each card shows a type label ("Website", "Campaign", "Social", "Presentation") inside a dark styled frame with CSS texture. Not fake screenshots — the visual design of the cards themselves demonstrates capability.<br /><br />
                            <strong>Closing line below:</strong> "Every project is a proof of concept. <em>For what we'd build for you.</em>"<br /><br />
                            <strong>Small note:</strong> "Portfolio pieces added with your approval." — tells Daniel we need his work samples, without breaking the visitor's experience.
                            <div className="sc-note">The site itself IS the proof. Placeholder frames look intentional — like a gallery waiting for work. Real pieces get added as Daniel completes projects. The section is architecturally ready.</div>
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
