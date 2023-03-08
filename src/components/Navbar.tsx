import Link from 'next/link'

interface NavbarProps {

};

export default function Navbar(props: NavbarProps) {
  return (
    <nav className="navbar">
        <div className="navbar-title"> 
            Brian Fouts
        </div>
        <div className="navbar-image">
            <img src="/images/logo.png" alt="Brian Fouts" />
        </div>
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
    </nav>
  )
}