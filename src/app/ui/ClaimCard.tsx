interface ClaimCardProps {
    status: string;
    address: string;
    justClaimed: number;
    balanceEarned: number;
    referrerEarned: number;
}

const ClaimCard: React.FC<ClaimCardProps> = ({status, address, justClaimed, balanceEarned, referrerEarned}) => {
    return (
        <div className="flex justify-between items-center border-t-[3px] border-gray-200 px-3 lg:px-5 py-4">
            <div className={`${status === "confirmed" ? "bg-[#DCFCE7]" : "bg-[#FEF9C3]"} w-[120px] flex items-center justify-between px-2 py-1.5 rounded-full`}>
                {status === "confirmed" ? (<img loading="lazy" src="green-circle.png" alt="green-circle" />) : (<img loading="lazy" src="yellow-circle.png" alt="yellow-circle" />)}
                <span className="text-xs">{status === "confirmed" ? "Confirmed" : "Pending"}</span>
                <img loading="lazy" src="share-icon.png" alt="share-icon" />
            </div>
            <div className="flex flex-col">
                <p className="text-sm font-bold">{address}</p>
                <p className="text-graytext text-sm font-medium">{`Just claimed ${justClaimed} JBTC`}</p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm font-bold">{balanceEarned} JBTC</p>
                <p className="text-graytext text-sm font-medium">{`Jan 17,2025`}</p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm font-bold">{referrerEarned} JBTC</p>
                <p className="text-graytext text-sm font-medium">{`Referrer earned`}</p>
            </div>
            <img loading="lazy" src="three-dots.png" alt="three-dots-icon" />
        </div>
    )
}

export default ClaimCard;