// components/Header.tsx

import Link from "next/link";

const Header: React.FC = () => (
    // 자간 간격 조정
    <header className="title-bar">
        <nav className="ml-2 h-7 w-full flex flex-row justify-start items-center title-bar-menu space-x-4">
            <Link href={`/`} className="title-bar-title text-white underline decoration-solid underline-offset-3">
                Home
            </Link>
            <Link href={`/about`} className="title-bar-title text-white underline decoration-solid underline-offset-3">
                About
            </Link>
            <Link href={`/posts`} className="title-bar-title text-white underline decoration-solid underline-offset-3">
                Posts
            </Link>
        </nav>
    </header>
);

export default Header;
