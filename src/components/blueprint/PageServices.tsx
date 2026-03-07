import ScrollReveal from '../shared/ScrollReveal';
import './PageServices.css';

export default function PageServices() {
    return (
        <section className="s">
            <div className="page-detail">
                <ScrollReveal className="page-header">
                    <div className="page-num-large">02</div>
                    <div className="page-name">Services</div>
                </ScrollReveal>
                <ScrollReveal className="page-intent" as="p">
                    The depth page. Answers "can you do what I specifically need?" Arc: <strong style={{ color: 'var(--cream-bright)' }}>Orient → Deep Dive × 3 → Process → Convert.</strong>
                </ScrollReveal>

                <div className="section-cards">
                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 1</div>
                            <div className="sc-name">Hero</div>
                        </div>
                        <div className="sc-content">
                            Shorter hero — 60–70vh, centered. Heading: <strong>"Build. Grow. Launch."</strong> — each word on its own line, in its pillar color (copper, emerald, cream). Large, bold, immediate orientation.<br /><br />
                            Subtext: "Three disciplines. One infrastructure. Every project follows this logic."
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 2</div>
                            <div className="sc-name">BUILD Pillar</div>
                            <div className="sc-belief">"They create digital assets with craft and intentionality."</div>
                        </div>
                        <div className="sc-content">
                            Copper accent label. Heading: "We Create the Assets." Three service cards side by side:
                            <ul className="sc-list">
                                <li><strong>Website Development</strong> — custom design, responsive, SEO foundations, performance optimized, CMS integration, analytics setup</li>
                                <li><strong>Graphic Design</strong> — brand identity, social media assets, advertising creatives, print materials, style guides</li>
                                <li><strong>Presentation Design</strong> — pitch decks, investor presentations, sales decks, corporate templates</li>
                            </ul>
                            Each card has an icon, description, and capabilities list showing specific deliverables.
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 3</div>
                            <div className="sc-name">GROW Pillar</div>
                            <div className="sc-belief">"Growth isn't guesswork — they use structured strategies."</div>
                        </div>
                        <div className="sc-content">
                            Emerald accent label. Heading: "We Drive the Results." Three service cards:
                            <ul className="sc-list">
                                <li><strong>Digital Marketing</strong> — strategy, content marketing, email campaigns, SEO, social media management, funnel design</li>
                                <li><strong>Online Advertising</strong> — Google Ads, Meta Ads, LinkedIn, retargeting, A/B testing, conversion tracking</li>
                                <li><strong>Traffic Generation</strong> — organic growth, referral systems, partnership-driven traffic, landing page optimisation</li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 4</div>
                            <div className="sc-name">LAUNCH Pillar</div>
                            <div className="sc-belief">"Campaigns are coordinated strategic plays, not random ads."</div>
                        </div>
                        <div className="sc-content">
                            Cream accent label. Heading: "We Orchestrate the Full Play." <strong>Single deep card</strong> — not three. Campaigns are the culmination of Build + Grow working together.<br /><br />
                            <strong>Marketing Campaigns:</strong> end-to-end strategy, creative development, multi-channel execution, budget management, performance tracking, post-campaign analysis.<br /><br />
                            Visual: a campaign flow diagram — Strategy → Creative → Launch → Optimise → Report
                            <div className="sc-note">Presenting campaigns as one comprehensive offering — not three sub-services — positions it as the premium tier of what BA Digi does.</div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 5</div>
                            <div className="sc-name">How We Work</div>
                            <div className="sc-belief">"The process is clear, repeatable, and designed for client clarity."</div>
                        </div>
                        <div className="sc-content">
                            4-step horizontal timeline (desktop), vertical on mobile:
                            <div className="process-steps">
                                <div className="p-step">
                                    <div className="ps-num">01</div>
                                    <div className="ps-name">Discovery</div>
                                    <div className="ps-desc">We listen. Map the landscape before touching a pixel.</div>
                                </div>
                                <div className="p-step">
                                    <div className="ps-num">02</div>
                                    <div className="ps-name">Strategy</div>
                                    <div className="ps-desc">Define approach, channels, timeline, budget. You approve first.</div>
                                </div>
                                <div className="p-step">
                                    <div className="ps-num">03</div>
                                    <div className="ps-name">Execution</div>
                                    <div className="ps-desc">Build, launch, manage. Regular check-ins. Full visibility.</div>
                                </div>
                                <div className="p-step">
                                    <div className="ps-num">04</div>
                                    <div className="ps-name">Results</div>
                                    <div className="ps-desc">Measure, report, refine. Clear picture of what was achieved.</div>
                                </div>
                            </div>
                            <div className="sc-note">Business owners burned by agencies love seeing a process. It says "we won't disappear after taking your money" without saying it.</div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal className="sec-card">
                        <div>
                            <div className="sc-intent">Section 6</div>
                            <div className="sc-name">CTA</div>
                        </div>
                        <div className="sc-content">"Know what you need? Let's scope it." — Get a Proposal (copper) · View Packages (outlined).</div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
