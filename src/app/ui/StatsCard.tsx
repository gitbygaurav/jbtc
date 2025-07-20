interface StatsCardProps {
    title: string;
    subtitle: string;
    number: number;
    percentage: number;
    status: string;
    colour: string;
    sign?: string; // Optional prop for sign, if needed
}

const StatsCard: React.FC<StatsCardProps> = ({title, subtitle, number, percentage, status, colour, sign}) => {
    return (
        <div className="w-full border border-gray-200 rounded-lg p-3">
            <h3 className="text-graytext text-xs uppercase font-medium leading-none">{title}</h3>
            <p className="text-lg font-bold mt-2 leading-tight">{number.toLocaleString()} <span>JBTC</span></p>
            <div className="flex justify-between items-center mt-2">
                <span className="w-[55%] text-xs text-graytext uppercase">{subtitle}</span>
                <span className={`text-sm font-medium`} style={{ color: colour }}>
                    {sign} {percentage}% {status === 'up' ? '↑' : '↓'}
                </span>
            </div>
        </div>
    )
}

export default StatsCard;