"use client"
import { Card } from "@/components/ui/card"
import { DashboardMetrics } from "./DashboardMetrics"
import { RecentActivity } from "./RecentActivity"
import { ChatContainer } from "./ChatContainer"
import { ActiveGrids } from "./ActiveGrids"

// Sample data
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

export default function DashboardCard() {
  return (
    <div className="w-full h-[850px] p-6 flex gap-6 bg-[#1a1a1a] dark">
      {/* Left side - Chat (30%) */}
      <Card className="w-[30%] h-full p-4 flex flex-col bg-[#2a2a2a] border-[#3a3a3a]">
        <ChatContainer />
      </Card>

      {/* Right side - Dashboard and Scrollable Cards (70%) */}
      <div className="w-[70%] h-full flex flex-col gap-6">
        {/* Dashboard Card */}
        <Card className="w-full h-1/2 p-4 bg-[#2a2a2a] border-[#3a3a3a] flex flex-col">
          <h2 className="text-xl font-semibold text-gray-200">Dashboard</h2>

          {/* Metrics Grid */}
          <DashboardMetrics
            profitLoss={sampleData.profitLoss}
            totalSells={sampleData.totalSells}
            totalBuys={sampleData.totalBuys}
          />

          {/* Recent Activity - Fixed height to prevent overflow */}
          <div className="flex-1 min-h-0 overflow-y-auto">
            <RecentActivity transactions={sampleData.transactions} />
          </div>
        </Card>

        {/* Transaction History */}
        <ActiveGrids />
      </div>
    </div>
  )
}

