import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react';

interface NavbarProps {

};

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const onOpen = () => {
        setMenuOpen(true);
    }
    const onClose = () => {
        setMenuOpen(false);
    }
    const onNavigate = () => {
        onClose();
    }

    return (
        <div className="hamburger-menu">
            <Menu
                isOpen={menuOpen}
                onOpen={onOpen}
                onClose={onClose}
                width="200px"
                customBurgerIcon={ <img src="/images/hamburger-menu.svg" /> }
            >
                <ul>
                    <li>
                        <Link href="/" legacyBehavior>
                            <a onClick={() => onNavigate()}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" legacyBehavior>
                            <a onClick={() => onNavigate()}>Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/demos" legacyBehavior>
                            <a onClick={() => onNavigate()}>Demos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" legacyBehavior>
                            <a onClick={() => onNavigate()}>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" legacyBehavior>
                            <a onClick={() => onNavigate()}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </Menu>
            
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