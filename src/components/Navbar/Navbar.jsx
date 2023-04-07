import "./Navbar.scss";

function Navbar() {
	return (
		<header className="navbar">
			<nav className="navbar__nav-links">
				<ul>
					<li className="navbar__nav-link">
						<a href="">Home</a>
					</li>
					<li className="navbar__nav-link">
						<a href="">About</a>
					</li>
					<li className="navbar__nav-link">
						<a href="">Work</a>
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
