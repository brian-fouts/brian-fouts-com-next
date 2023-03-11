import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react';
import styles from './HamburgerMenu.module.css'


export default function HamburgerMenu() {
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
        <div className={styles.hamburger_menu}>
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
