import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface TokenFormProps {
  tokenSymbol: string
}

export function TokenForm({ tokenSymbol }: TokenFormProps) {
  return (
    <Card className="w-full h-full p-4 bg-[#2a2a2a] border-[#3a3a3a]">
      <h3 className="text-lg font-medium text-gray-200 mb-4">Manage {tokenSymbol}</h3>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">Amount to Trade</Label>
          <Input
            id="amount"
            type="number"
            placeholder={`Enter ${tokenSymbol} amount`}
            className="bg-[#333333] border-[#444444]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Target Price (USD)</Label>
          <Input id="price" type="number" placeholder="Enter target price" className="bg-[#333333] border-[#444444]" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Trading Notes</Label>
          <Input id="notes" placeholder="Add notes about this trade" className="bg-[#333333] border-[#444444]" />
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Buy</Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Sell</Button>
        </div>
      </form>
    </Card>
  )
}

