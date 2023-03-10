import Link from 'next/link'

interface NavbarProps {

};

function HamburgerMenu() {
    return (
        <div className="hamburger-menu">
            <img src="/images/hamburger-menu.svg" alt="Menu" />
        </div>
    )
}

function NavbarMenu() {
    return (
        <div className="navbar-menu">
            <HamburgerMenu />
            <NavbarLinks />
        </div>
    )
}

function NavbarLinks() {
    return (
        <div className="navbar-links">
            <ul>
                <li>
                    <Link href="/">
                        <button>Home</button>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <button>Services</button>
                    </Link>
                </li>
                <li>
                    <Link href="/demos">
                        <button>Demos</button>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <button>About</button>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <button>Contact</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

function NavbarTitle() {
    return (
        <div className="navbar-title">
            Brian Fouts
        </div>
    )
}

function NavbarLogo() {
    return (
        <div className="navbar-image">
            <img src="/images/logo.png" alt="Brian Fouts" />
        </div>
    )
}

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="navbar">
        <NavbarTitle />
        <NavbarLogo />
        <NavbarMenu />
    </nav>
  )
}