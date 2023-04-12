import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar({ setMobileNavOpen, mobileNavOpen }) {
	return (
		<header className="navbar" id="navbar">
			<div className="navbar-wrapper container">
				<nav className="navbar__nav-links">
					<ul>
						<li className="navbar__nav-link">
							<Link to="/">
								Home
							</Link>
						</li>
						<li className="navbar__nav-link">
							<a href="#about-section">About</a>
						</li>
						<li className="navbar__nav-link">
							<a href="#portfolio-section">Work</a>
						</li>
						<li className="navbar__nav-link">
							<a href="">Mixes</a>
						</li>
					</ul>
				</nav>
				<a className="navbar__logo" href="#">
					Oli Crossland
				</a>
				<nav className={mobileNavOpen ? "navbar__nav-links navbar__nav-links--active" : "navbar__nav-links"}>
					<ul>
						<li className="navbar__nav-link">
							<a href="">Instagram</a>
						</li>
						<li className="navbar__nav-link">
							<a href="">Mixcloud</a>
						</li>
						<a className="btn btn-primary nav-btn" href="mailto:olicrossland@gmail.com">
							<span className="text text--one">Get in touch</span>
							<span className="text text--two">Get in touch</span>
						</a>
					</ul>
				</nav>
				<button className="navbar__mobile-nav-toggler" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</button>
			</div>
		</header>
	);
}

export default Navbar;
