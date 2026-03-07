import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo">BA</div>
            <div className="nav-links">
                <a href="#overview">Overview</a>
                <a href="#pages">Pages</a>
                <a href="#connections">Flow</a>
            </div>
        </nav>
    );
}
