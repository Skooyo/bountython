import Image from "next/image";

const token = {
  "chainId": 137,
      "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
      "name": "Wrapped Ether",
      "decimals": 18,
      "symbol": "WETH",
      "logoURI": "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
      "tags": [
        "tokens"
      ]
};

export default function CryptoActivity() {
  return (
    <div className="w-full text-xs sm:text-md md:text-base card-gradient rounded-xl px-4 py-3 flex justify-between items-center drop-shadow-xl font-semibold hover:cursor-pointer
    bg-[#333333] border-[#444444] hover:bg-[#3a3a3a] transition-colors">

      {/* token name and amt owned in USD */}
      <div className="w-[40%] h-full flex items-center gap-4 py-2">
        <div className="w-2/3 bg-transparent rounded-full aspect-square relative">
          <Image
            src={token.logoURI}
            fill
            style={{ objectFit: "contain" }}
            alt="token"
            className="md:p-1"
          />
        </div>
        <div className="flex-col h-full w-full justify-center text-base md:text-lg flex gap-2">
          <p>{token.name || ""}</p>
          <div className="w-fit h-full flex gap-2 text-gray-400 items-center justify-center">
              <p> {`<$0.001`} </p>
          </div>
        </div>
      </div>

      {/* <div className="w-[20%] h-full flex items-center gap-4 py-2">
        <div className="flex-col h-full w-full justify-center text-base md:text-lg flex gap-2">
          <p>Total Buys</p>
          <div className="w-fit h-full flex gap-2 text-gray-400 items-center">
              <p> 131 </p>
          </div>
        </div>
      </div>

      <div className="w-[20%] h-full flex items-center gap-4 py-2">
        <div className="flex-col h-full w-full justify-center text-base md:text-lg flex gap-2">
          <p>Total Sells</p>
          <div className="w-fit h-full flex gap-2 text-gray-400 items-center">
              <p> 100 </p>
          </div>
        </div>
      </div> */}

      {/* token price and token owned */}
      <div className="flex-col h-full w-fit justify-center flex gap-2 text-base md:text-lg items-end p-1">
        <p>${2312}</p>
        <p className="text-gray-400 text-sm md:text-base">
          500
          {token.symbol}
        </p>
      </div>

    </div>
  );
}