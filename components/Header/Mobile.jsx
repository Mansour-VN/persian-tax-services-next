import Link from "next/link";

const MobileHeader = () => {
    return (

        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <Link href="/">رینگ مستری</Link>
                    </li>

                    <li className="hidden">
                        <a>رینگ مستریی‌شو</a>
                    </li>
                    <li>
                        <Link href="/ProductPage">محصولات</Link>
                    </li>
                    <li tabIndex={0}>
                        <a className="justify-between hidden">
                            خدمات‌ما
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </a>
                        <ul className="p-2 z-50 bg-base-300">
                            <li>
                                <a>خدمات 1</a>
                            </li>
                            <li>
                                <a>خدمات 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>تماس‌با‌ما</a>
                    </li>
                    <li className="hidden">
                        <a>ارتباط با‌ما</a>
                    </li>
                    <li>
                        <Link href="/aboutPage">درباره‌ما</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default MobileHeader