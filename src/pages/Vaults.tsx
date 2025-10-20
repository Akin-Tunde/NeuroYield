import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ExternalLink, Coins } from "lucide-react";

const vaults = [
  {
    id: 1,
    name: "Stablecoin Yield",
    asset: "USDC",
    strategy: "Multi-Protocol Yield Switching",
    tvl: "$30.0M",
    apy: "12.5%",
    model: "Model #A4F82C",
    risk: "Low",
  },
  {
    id: 2,
    name: "ETH Momentum",
    asset: "ETH",
    strategy: "AI-Driven Momentum Trading",
    tvl: "$12.5M",
    apy: "18.3%",
    model: "Model #B7E1F9",
    risk: "Medium",
  },
  {
    id: 3,
    name: "Multi-Asset Alpha",
    asset: "Mixed",
    strategy: "Cross-Chain Arbitrage",
    tvl: "$7.6M",
    apy: "22.7%",
    model: "Model #C9A3B1",
    risk: "High",
  },
];

const riskColors = {
  Low: "bg-success/10 text-success border-success/20",
  Medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  High: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function Vaults() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI-Managed Yield Vaults</h1>
        <p className="text-muted-foreground">
          Put your assets to work with AI-optimized strategies. All models are verifiable on-chain.
        </p>
      </div>

      <div className="grid gap-6">
        {vaults.map((vault) => (
          <Card key={vault.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-primary" />
                    <CardTitle>{vault.name}</CardTitle>
                  </div>
                  <CardDescription>{vault.strategy}</CardDescription>
                </div>
                <Badge variant="outline" className={riskColors[vault.risk as keyof typeof riskColors]}>
                  {vault.risk} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-5 items-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Asset</p>
                  <p className="text-lg font-semibold">{vault.asset}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">TVL</p>
                  <p className="text-lg font-semibold">{vault.tvl}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Net APY (30d)</p>
                  <div className="flex items-center gap-1">
                    <p className="text-lg font-bold text-success">{vault.apy}</p>
                    <TrendingUp className="w-4 h-4 text-success" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active AI Model</p>
                  <a 
                    href={`/models#${vault.model}`} 
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    {vault.model}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex justify-end">
                  <Button>Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
