const Footer: React.FC = () => {
    return (
        <div className="w-full bg-[#F2FAFF] border-b-2 border-gray-200 px-8 py-4">
            <div className="flex justify-between items-center">
                <img loading="lazy" src="logo.png" alt="logo" />
                <div className="flex space-x-4 text-xs text-graytext font-medium">
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                </div>
                <div className="flex space-x-4">
                    <img loading="lazy" src="globe-icon.png" alt="globe-logo" />
                    <img loading="lazy" src="telegram-logo.png" alt="telegram-logo" />
                    <img loading="lazy" src="x-logo.png" alt="x-logo" />
                </div>
            </div>
        </div>
    )
}

export default Footer;