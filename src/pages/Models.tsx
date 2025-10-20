import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle2, Clock, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const models = [
  {
    hash: "0x...a4f82c",
    submittedBy: "0x742d...35Ab",
    status: "In Production",
    performance: "Sharpe: 2.5",
    liveOn: "USDC Yield Vault",
    age: "3 weeks ago",
    verified: true,
  },
  {
    hash: "0x...b7e1f9",
    submittedBy: "0x9f3c...8d2E",
    status: "In Production",
    performance: "Sharpe: 2.1",
    liveOn: "ETH Momentum Vault",
    age: "1 month ago",
    verified: true,
  },
  {
    hash: "0x...c9a3b1",
    submittedBy: "0x1a5d...c7F9",
    status: "Backtesting",
    performance: "Sharpe: 3.2",
    liveOn: "—",
    age: "5 days ago",
    verified: true,
  },
  {
    hash: "0x...d4b8e2",
    submittedBy: "0x6e8f...2a1B",
    status: "Training",
    performance: "Pending",
    liveOn: "—",
    age: "2 days ago",
    verified: false,
  },
];

const statusConfig = {
  "In Production": { color: "bg-success/10 text-success border-success/20", icon: Zap },
  "Backtesting": { color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", icon: Clock },
  "Training": { color: "bg-accent/10 text-accent border-accent/20", icon: Brain },
};

export default function Models() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Verifiable AI Model Registry</h1>
        <p className="text-muted-foreground">
          All models are submitted on-chain. Performance is continuously verified by Chainlink Oracles.
        </p>
      </div>

      <Card className="bg-gradient-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Full Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Every AI model's performance is verifiable on-chain through Chainlink oracle feeds.
                Model hashes, backtesting results, and live performance metrics are permanently recorded.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {models.map((model) => {
          const statusInfo = statusConfig[model.status as keyof typeof statusConfig];
          const StatusIcon = statusInfo.icon;

          return (
            <Card key={model.hash} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Model Hash</p>
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono font-semibold">{model.hash}</code>
                      {model.verified && (
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Submitted By</p>
                    <code className="text-sm font-mono">{model.submittedBy}</code>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <Badge variant="outline" className={statusInfo.color}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {model.status}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Performance</p>
                    <p className="text-sm font-semibold">{model.performance}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Live On</p>
                    <p className="text-sm font-medium">{model.liveOn}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-muted-foreground">{model.age}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Details
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
