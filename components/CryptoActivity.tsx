import Image from "next/image";

// const token = {
//   "chainId": 137,
//       "address": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
//       "name": "Wrapped Ether",
//       "decimals": 18,
//       "symbol": "WETH",
//       "logoURI": "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
//       "tags": [
//         "tokens"
//       ]
// };

type tokenInfo = {
  name: string;
  address: string; // or ID up to you
  roi: number; // this is how much you lost/gained idk if this will be in dollars or percentage depends on you
  price_in_usd: number;
  amount_owned: number; // how much tokens you have
  value_usd: number; // how much the tokens are worth in USD (from the ones you owe)
  token_logo: string; // image of the token
  token_symbol: string; // symbol of the token e.g. Ethereum = ETH
}

const token = {
  name: "Wrapped Ether",
  address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  roi: 3.7,
  price_in_usd: 2312,
  amount_owned: 500,
  value_usd: 1156000,
  token_logo: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
  token_symbol: "WETH",
}

export default function CryptoActivity({
  name, 
  address, 
  roi, 
  price_in_usd, 
  amount_owned,
  value_usd, 
  token_logo, 
  token_symbol}: tokenInfo) {
  return (
    <div className="w-full text-xs sm:text-md md:text-base card-gradient rounded-xl px-4 py-3 flex justify-between items-center drop-shadow-xl font-semibold hover:cursor-pointer
    bg-[#333333] border-[#444444] hover:bg-[#3a3a3a] transition-colors">

      {/* token name and amt owned in USD */}
      <div className="w-[40%] h-full flex items-center gap-4 py-2">
        <div className="w-2/3 bg-transparent rounded-full aspect-square relative">
          <Image
            src={token.token_logo}
            fill
            style={{ objectFit: "contain" }}
            alt="token"
            className="md:p-1"
          />
        </div>
        <div className="flex-col h-full w-full justify-center py-8 text-base md:text-lg flex gap-2">
          <p>{token.name || ""}</p>
          <div className="w-fit h-full flex gap-2 text-gray-400 items-center justify-center">
              <p> ${token.value_usd} </p>

              <p
              className={`py-1 px-2 rounded-xl text-sm md:text-base ${
                token.roi > 0
                  ? "text-green-400 bg-green-300/20"
                  : token.roi < 0
                  ? "text-red-500 bg-red-400 bg-opacity-20"
                  : "text-gray-500 bg-gray-500 bg-opacity-20"
              }`}
            >{token.roi > 0 ? "+" : "-"}{token.roi}%
            </p>

          </div>
        </div>
      </div>

      {/* token price and token owned */}
      <div className="flex-col h-full w-fit justify-center flex gap-2 text-base md:text-lg items-end p-1">
        <p>${2312}</p>
        <p className="text-gray-400 text-sm md:text-base">
          {token.amount_owned}
          {token.token_symbol}
        </p>
      </div>

    </div>
  );
}