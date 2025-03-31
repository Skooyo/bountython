import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ActivityCard } from "./ActivityCard"
import CryptoActivity from "./CryptoActivity"

const sampleData = {
  profitLoss: 12.45, // percentage
  totalSells: 1245,
  totalBuys: 876,
  transactions: [
    { id: 1, type: "buy" as const, amount: 250, item: "Product A", date: "2023-03-15", time: "14:30" },
    { id: 2, type: "sell" as const, amount: 350, item: "Product B", date: "2023-03-15", time: "15:45" },
    { id: 3, type: "buy" as const, amount: 120, item: "Product C", date: "2023-03-14", time: "09:15" },
    { id: 4, type: "sell" as const, amount: 500, item: "Product D", date: "2023-03-14", time: "11:30" },
    { id: 5, type: "sell" as const, amount: 200, item: "Product E", date: "2023-03-13", time: "16:20" },
    { id: 6, type: "buy" as const, amount: 180, item: "Product F", date: "2023-03-13", time: "10:45" },
    { id: 7, type: "sell" as const, amount: 320, item: "Product G", date: "2023-03-12", time: "13:10" },
  ],
}

export function ActiveGrids() {
  return (
    <Card className="w-full h-1/2 p-6 bg-[#2a2a2a] border-[#3a3a3a] overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-200">Active Grids</h2>
        </div>
        <ScrollArea className="flex-1 w-full pr-4">
          <div className="grid-cols-2 grid gap-6">
            <CryptoActivity />
            <CryptoActivity />
            <CryptoActivity />
            <CryptoActivity />
            <CryptoActivity />
            <CryptoActivity />
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}

