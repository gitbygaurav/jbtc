import PercentageButtons from "../components/buy/PercentageButtons";

const Page: React.FC = () => {
    return (
        <div className="px-2 lg:px-8 py-5">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-5xl font-bold">
          <span className="text-[#2D87F1]">Presale</span> is Live
        </p>
        <p className="text-lg md:text-xl text-center text-[#47566B] mt-2">
          Only 1,000,000 JBTC Available at Launch Price
        </p>
        <p className="text-[18px] md:text-[22px] text-[#D99000] font-bold mt-2">
          🔥 Starting at $1 per JBTC
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="border border-gray-200 rounded-lg shadow-md px-5 py-4">
          <p className="text-2xl font-bold">Presale</p>
          <p className="text-base text-[#002540] font-bold mt-4">
            Buy JBTC Now
          </p>
          <p className="text-xs text-[#596E7F] font-bold">JBTC: $0.00195069</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2 ">
              <img loading="lazy" src="buy-page/green-usdt-logo.png" alt="usdt-logo" />
              <p className="text-sm text-[#596E7F] font-semibold">USDT</p>
              <img loading="lazy" src="buy-page/down-arrow.png" alt="down-arrow" />
            </div>
            <p className="text-xs text-[#596E7F] font-medium italic">
              2561.700786
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end border border-gray-200 rounded-lg px-3 sm:px-5 py-4 mt-2">
            <p className="text-sm text-[#596E7F] font-semibold">0.000</p>
            <PercentageButtons />
          </div>
          <div className="flex items-center justify-center mt-4">
            <img src="buy-page/swap-icon.png" alt="swap-icon" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2 ">
              <img loading="lazy" src="buy-page/jbtc-logo.png" alt="jbtc-logo" />
              <p className="text-sm text-[#596E7F] font-semibold">JBTC</p>
            </div>
            <p className="text-xs text-[#596E7F] font-medium italic">
              147348.769258
            </p>
          </div>
          <div className="flex flex-col items-end border border-gray-200 rounded-lg px-5 py-4 mt-2">
            <p className="text-sm text-[#596E7F] font-semibold">0.000</p>
          </div>
          <button className="w-full bg-[#2D87F1] text-white font-bold py-2 px-4 rounded-lg mt-4">
            Buy
          </button>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="border border-gray-200 rounded-lg shadow-md px-5 py-4">
            <p className="text-2xl font-bold">Presale Benefits</p>
            <div className="mt-4">
              <div className="flex items-center gap-4">
                <img className="w-10 h-10" loading="lazy" src="buy-page/no-kyc.png" alt="no-kyc" />
                <div className="flex flex-col">
                  <p className="text-[15px] font-bold">No KYC Required</p>
                  <p className="text-[13px] text-[#47566B]">
                    Anonymous purchase with USDT
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img className="w-10 h-10" loading="lazy" src="buy-page/instant-delivery.png" alt="no-kyc" />
                <div className="flex flex-col">
                  <p className="text-[15px] font-bold">Instant Delivery</p>
                  <p className="text-[13px] text-[#47566B]">
                    Tokens delivered to your wallet immediately
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img className="w-10 h-10" loading="lazy" src="buy-page/no-lock.png" alt="no-kyc" />
                <div className="flex flex-col">
                  <p className="text-[15px] font-bold">No Lock Period</p>
                  <p className="text-[13px] text-[#47566B]">
                    Start claiming rewards 24 hours after purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md px-5 py-4 mt-4 md:mt-0">
            <p className="text-2xl font-bold">Wallet Requirements</p>
            <p className="text-sm">Compatible Wallets:</p>
            {/* wallet points */}
            <div className="flex gap-12 mt-4">
              <div className="flex flex-col gap-">
                <div className="flex items-center gap-2">
                  <img
                    className="w-2 h-2"
                    loading="lazy"
                    src="buy-page/green-dot.png"
                    alt="green-dot"
                  />
                  <p className="text-[13px]">MetaMask</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-2 h-2"
                    loading="lazy"
                    src="buy-page//green-dot.png"
                    alt="green-dot"
                  />
                  <p className="text-[13px]">TrustWallet</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex items-center gap-2">
                  <img
                    className="w-2 h-2"
                    loading="lazy"
                    src="buy-page/green-dot.png"
                    alt="green-dot"
                  />
                  <p className="text-[13px]">SafePal</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-2 h-2"
                    loading="lazy"
                    src="buy-page/green-dot.png"
                    alt="green-dot"
                  />
                  <p className="text-[13px]">Binance Wallet</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FACC14]/10 flex items-center justify-center border border-[#FACC14]/20 rounded-lg py-2.5 mt-4">
              <p className="text-[13px] text-[#D99000] text-center">
                ⚠️ Ensure your wallet is connected to Binance Smart Chain (BSC)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center border border-gray-200 rounded-lg shadow-md px-5 py-5 mt-6">
        <div>
          <p className="text-2xl font-bold">Payment Methods</p>
          <p className="text-sm text-[#596E7F]">
            More payment options coming soon
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <img loading="lazy" src="buy-page/green-usdt-logo.png" alt="usdt-logo" />
          <p className="text-xl text-[#596E7F]">USDT</p>
          <img loading="lazy" src="buy-page/down-arrow.png" alt="down-arrow" />
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg shadow-md px-5 py-5 mt-6">
        <p className="text-2xl text-center md:text-start font-bold">🔒 Secure & Transparent</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-16 mt-4">
          <ul className="list-disc list-inside">
            <li className="text-sm text-[#596E7F]">Smart contract audited by leading security firms</li>
            <li className="text-sm text-[#596E7F] mt-2">No admin keys or backdoors</li>
            <li className="text-sm text-[#596E7F] mt-2">Tokens locked in verifiable smart contract</li>
          </ul>
          <ul className="list-disc list-inside">
            <li className="text-sm text-[#596E7F]">Instant token delivery to your wallet</li>
            <li className="text-sm text-[#596E7F] mt-2">Start earning rewards in 24 hours</li>
            <li className="text-sm text-[#596E7F] mt-2">Full control of your tokens at all times</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Page;