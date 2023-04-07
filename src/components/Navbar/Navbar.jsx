import "./Navbar.scss";

function Navbar() {
	return (
		<header className="navbar container" id="navbar">
			<nav className="navbar__nav-links">
				<ul>
					<li className="navbar__nav-link">
						<a href="">Home</a>
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
			<a className="navbar__logo" href="">
				Oli Crossland
			</a>
			<nav className="navbar__nav-links">
				<ul>
					<li className="navbar__nav-link">
						<a href="">Instagram</a>
					</li>
					<li className="navbar__nav-link">
						<a href="">Mixcloud</a>
					</li>
					<a className="btn btn-primary nav-btn">
                        <span className="text text--one">Get in touch</span>
                        <span className="text text--two">Get in touch</span>
                    </a>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
