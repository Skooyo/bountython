"use client"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DashboardCard() {
  // Sample data for scrollable cards
  const scrollableCards = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    title: `Card ${i + 1}`,
  }))

  return (
    <div className="w-full h-[800px] p-6 flex gap-6 bg-[#1a1a1a] dark">
      {/* Left side - Chat (30%) */}
      <Card className="w-[30%] h-full p-4 flex flex-col bg-[#2a2a2a] border-[#3a3a3a]">
        <div className="flex-1 flex items-center justify-center text-lg font-medium text-gray-300">Chat</div>
      </Card>

      {/* Right side - Dashboard and Scrollable Cards (70%) */}
      <div className="w-[70%] h-full flex flex-col gap-6">
        {/* Dashboard Card */}
        <Card className="w-full h-1/2 p-4 flex items-center justify-center bg-[#2a2a2a] border-[#3a3a3a]">
          <div className="text-lg font-medium text-gray-300">Dashboard</div>
        </Card>

        {/* Scrollable Cards Container */}
        <Card className="w-full h-1/2 p-4 bg-[#2a2a2a] border-[#3a3a3a]">
          <ScrollArea className="h-full w-full pr-4">
            <div className="flex flex-col gap-4">
              {scrollableCards.map((card) => (
                <Card
                  key={card.id}
                  className="p-4 min-h-[100px] flex items-center justify-center bg-[#333333] border-[#444444] hover:bg-[#3a3a3a] transition-colors"
                >
                  <div className="text-gray-300">{card.title} Content</div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  )
}
