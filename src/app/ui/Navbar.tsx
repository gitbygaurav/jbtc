const Navbar: React.FC = () => {
    return (
        <nav className="w-full px-2 lg:px-8 py-4 border-b-2 border-gray-200">
            <div className="flex justify-between items-center">
                <img loading="lazy" src="/logo.png" alt="jbtc-logo" />
                <ul className="hidden md:flex space-x-6 text-base">
                    <li className="text-graytext">Home</li>
                    <li>Dashboard</li>
                    <li className="text-graytext">Buy</li>
                </ul>
                <button className="bg-black text-white py-2 px-4 rounded-lg">{"fx34x...t6Vxv"}</button>
            </div>
        </nav>
    )
}

export default Navbar;