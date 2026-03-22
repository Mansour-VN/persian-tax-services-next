import Link from "next/link";
const DesktopMenu = () => {
    return (
        <div  className = "navbar-center justify-center hidden lg:flex " >
            <ul className="menu menu-horizontal px-1 md:text-xl justify-center">
                <li>
                    <Link href="/aboutPage">درباره‌ما</Link>
                </li>
                <li>
                    <a>تماس باما</a>
                </li>
                <li tabIndex={0} className="hidden">
                    <a>
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                        خدمات ما
                    </a>
                    <ul className="p-2 z-50 bg-base-300">
                        <li>
                            <a>خدمات یک</a>
                        </li>
                        <li>
                            <a>خدمات دو</a>
                        </li>
                    </ul>
                </li>
                <li className="hidden">
                    <a>رینگ مستریی‌شو</a>
                </li>
                <li>
                    <Link href="/ProductPage">محصولات</Link>
                </li>
                <li>
                    <Link href="/">
                        رینگ مستری
                    </Link>
                </li>
            </ul>
        </div >
    )
}

export default DesktopMenu