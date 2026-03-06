import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-tag">Prepared for Daniel — BA Digi Marketing</div>
            <h1>Your Site Will Be Your Best <em>Portfolio Piece.</em></h1>
            <p className="hero-sub">
                This document maps the complete vision, architecture, and strategy for the BA Digi Marketing website. Four pages. Three service pillars. One experience that proves capability before a single word is spoken.
            </p>
            <div className="hero-meta">
                <div className="hero-meta-item">
                    <span className="label">Pages</span>
                    <span className="value">4</span>
                </div>
                <div className="hero-meta-item">
                    <span className="label">Aesthetic</span>
                    <span className="value">Dark Cinematic</span>
                </div>
                <div className="hero-meta-item">
                    <span className="label">Core Idea</span>
                    <span className="value">The site IS the portfolio</span>
                </div>
                <div className="hero-meta-item">
                    <span className="label">Stack</span>
                    <span className="value">React + TypeScript</span>
                </div>
            </div>
            <div className="hero-divider"></div>
        </div>
    );
}
