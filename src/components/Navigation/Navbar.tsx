import Link from 'next/link'
import styles from './Navbar.module.css'
import HamburgerMenu from './HamburgerMenu'


function NavbarMenu() {
    return (
        <div className={styles.navbar_menu}>
            <HamburgerMenu />
            <NavbarLinks />
        </div>
    )
}

function NavbarLinks() {
    return (
        <div className={styles.navbar_links}>
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
        <div className={styles.navbar_title}>
            Brian Fouts
        </div>
    )
}

function NavbarLogo() {
    return (
        <div className={styles.navbar_image}>
            <img src="/images/logo.png" alt="Brian Fouts" />
        </div>
    )
}

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <NavbarTitle />
        <NavbarLogo />
        <NavbarMenu />
    </nav>
  )
}