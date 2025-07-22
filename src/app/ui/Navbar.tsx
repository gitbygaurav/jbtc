import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full px-2 lg:px-8 py-4 border-b-2 border-gray-200">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <img loading="lazy" src="/logo.png" alt="jbtc-logo" className="cursor-pointer" />
                </Link>
                <ul className="hidden md:flex space-x-6 text-base">
                    <li>
                        <Link href="/" className="text-graytext hover:text-black transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className="hover:text-graytext transition-colors">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/buy" className="text-graytext hover:text-black transition-colors">
                            Buy
                        </Link>
                    </li>
                </ul>
                <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                    {"fx34x...t6Vxv"}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;