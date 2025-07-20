import Link from "next/link";
import ClaimBscButton from "./components/ClaimBscButton";
import ClaimJbtcButton from "./components/ClaimJbtcButton";
import StatsCard from "./ui/StatsCard";
import ClaimCard from "./ui/ClaimCard";

export default function Home() {
  return (
    <main className="px-8 py-10">
      <div className="flex justify-between items-center">
        <p className="text-xl">
          <span className="font-bold">Hey John</span> -{" "}
          <span className="text-graytext">
            here's whats's happening with your store today
          </span>
        </p>
        <div className="flex gap-4">
          <ClaimJbtcButton />
          <ClaimBscButton />
        </div>
      </div>
      {/* stats area */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
        <StatsCard
          title="total tokens in market"
          subtitle="fixed total supply"
          number={21000000}
          percentage={100}
          status={"up"}
          colour="#2D87F1"
        />
        <StatsCard
          title="available tokens"
          subtitle="yet to be distributed"
          number={14233240}
          sign="+"
          percentage={100}
          status={"up"}
          colour="#00D948"
        />
        <StatsCard
          title="today's claim pool"
          subtitle="Pool for today's claims"
          number={5000}
          sign="+"
          percentage={5}
          status={"up"}
          colour="#D99000"
        />
        <StatsCard
          title="Max You Can Claim"
          subtitle="0.5% of wallet balance"
          number={6}
          percentage={0.5}
          status={"up"}
          colour="#419AD9"
        />
        <StatsCard
          title="Your Wallet Balance"
          subtitle="from connected wallet"
          number={1200}
          sign="-"
          percentage={12}
          status={"down"}
          colour="#D90000"
        />
      </div>
      {/* recent community claim */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        <div className="col-span-3 border border-gray-200 rounded-lg">
          <div className="px-5 py-4">
            <p className="text-lg font-bold">Recent Community Claim</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-base text-graytext">
                Lorem ipsum dolor, sit amet consectetur adipis.
              </p>
              <Link
                className="text-xs text-[#2D87F1] font-medium flex items-center justify-center gap-3"
                href="#"
              >
                <span>See All Claims</span> <span>{">"}</span>
              </Link>
            </div>
          </div>
          <ClaimCard
            status="confirmed"
            address="0x9a2...47F"
            justClaimed={4.2}
            balanceEarned={4.2}
            referrerEarned={0.42}
          />
          <ClaimCard
            status="confirmed"
            address="0x9a2...47F"
            justClaimed={4.2}
            balanceEarned={4.2}
            referrerEarned={0.42}
          />
          <ClaimCard
            status="confirmed"
            address="0x9a2...47F"
            justClaimed={4.2}
            balanceEarned={4.2}
            referrerEarned={0.42}
          />
          <ClaimCard
            status="pending"
            address="0x9a2...47F"
            justClaimed={4.2}
            balanceEarned={4.2}
            referrerEarned={0.42}
          />
          <ClaimCard
            status="pending"
            address="0x9a2...47F"
            justClaimed={4.2}
            balanceEarned={4.2}
            referrerEarned={0.42}
          />
        </div>
        {/* your holding rank card */}
        <div className="col-span-2 flex flex-col justify-between">
          <div className="w-full px-5 pt-6 pb-4 border border-gray-200 rounded-lg">
            <p className="text-lg font-semibold">Your Holding Rank</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-graytext text-xs font-medium">
                You are in the top
              </p>
              <p className="text-graytext text-xs font-medium">09%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div
                className="bg-[#0024D9] h-3 rounded-full"
                style={{ width: "10%" }}
              ></div>
            </div>
            <p className="text-[#00D948] text-xs font-medium italic mt-3">
              Only <b>740</b> users hold more than you.
            </p>
            <p className="text-[#D99000] text-xs font-medium italic mt-2">
              HODL more to reach <b>Top 5%</b> and unlock leaderboard benefits!
            </p>
            <div className="w-full light-purple-gradient flex justify-between items-center px-4 py-3 mt-5 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  loading="lazy"
                  src="metamask-icon.png"
                  alt="metamask-icon"
                />
                <p className="text-[#2D87F1] text-sm font-bold">
                  2,40,146 JBTC
                </p>
              </div>
              <p className="text-[#002540] text-xs font-semibold">Swap</p>
            </div>
          </div>
          {/* affiliate rewards card */}
          <div className="w-full px-5 pt-6 pb-4 border border-gray-200 rounded-lg">
            <p className="text-lg font-semibold">Affiliate Rewards</p>
            <div className="grid grid-cols-3 gap-2 mt-5">
              <div className="bg-[#FFF6E5] border border-gray-200 rounded-lg p-4">
                <p className="text-[10px] uppercase">CLAIMED </p>
                <p className="text-[#D99000] text-[32px] italic font-bold mt-1">
                  500
                </p>
              </div>
              <div className="bg-[#E5FFEE] border border-gray-200 rounded-lg p-4">
                <p className="text-[10px] uppercase">Total Heads</p>
                <p className="text-[#00D948] text-[32px] italic font-bold mt-1">
                  500
                </p>
              </div>
              <div className="bg-[#E5EAFF] border border-gray-200 rounded-lg p-4">
                <p className="text-[10px] uppercase">Total Holdings </p>
                <p className="text-[#0024D9] text-[20px] italic font-bold mt-1">
                  14,233,240 JBTC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* refferal card */}
      <div className="border border-gray-200 rounded-lg px-5 py-4 mt-4">
        <p className="text-lg font-bold">Referral</p>
        <p className="text-sm text-graytext">
          Refer and earn daily rewards.{" "}
        </p>
        <div className="bg-[#F2FAFF] border border-gray-200 rounded-lg flex justify-between items-center px-4 py-3 mt-3">
          <p className="text-[#0024D9] text-sm italic">https://www.jbtc.com?ref=u6bbtk&utm_source=referral-program&utm_medium=referral&utm_campaign=referral-program-Jul-2025</p>
          <img loading="lazy" src="copy-icon.png" alt="copy-icon" />
        </div>
      </div>
    </main>
  );
}
