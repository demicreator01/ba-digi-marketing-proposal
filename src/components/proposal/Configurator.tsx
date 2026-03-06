import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import './Configurator.css';

export default function Configurator() {
    return (
        <section>
            <ScrollReveal className="section-label" style={{ textAlign: 'center' } as React.CSSProperties}>
                Interactive Feature
            </ScrollReveal>
            <ScrollReveal className="section-title" style={{ textAlign: 'center' } as React.CSSProperties}>
                The Package Configurator
            </ScrollReveal>
            <ScrollReveal className="section-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' } as React.CSSProperties}>
                An interactive quiz on the Packages page. Five questions. One recommendation. It captures lead data and demonstrates UX capability — simultaneously.
            </ScrollReveal>
            <ScrollReveal className="config-preview">
                <div className="config-bar">
                    <span className="step-label">Step 2 / 5</span>
                    <div className="bar-track">
                        <div className="bar-fill"></div>
                    </div>
                    <span className="step-label">40%</span>
                </div>
                <div className="config-question">What stage is your business at?</div>
                <div className="config-options">
                    <div className="config-option">
                        <div className="opt-title">Just starting out</div>
                        <div className="opt-sub">I need to establish my digital presence</div>
                    </div>
                    <div className="config-option selected">
                        <div className="opt-title">Established but need to grow</div>
                        <div className="opt-sub">I have the basics — now I need strategy and execution</div>
                    </div>
                    <div className="config-option">
                        <div className="opt-title">Scaling / multi-channel</div>
                        <div className="opt-sub">I need coordinated campaigns across platforms</div>
                    </div>
                    <div className="config-option">
                        <div className="opt-title">Enterprise / complex requirements</div>
                        <div className="opt-sub">Dedicated team and bespoke scope</div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
