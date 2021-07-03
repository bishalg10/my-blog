import Link from "next/link";
import Image from "next/image";

const MainNavigation = () => {

    return <header>
        <Link href="/">
            <a className="logo h3">
                Kumar&apos;s Blog
            </a>
        </Link>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/posts">Blogs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>

}

export default MainNavigation;
