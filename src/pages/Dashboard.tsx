import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Cpu, Coins, TrendingUp, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ecosystem Hub</h1>
        <p className="text-muted-foreground">
          Welcome to the AI Yield Network. Monitor and manage your entire portfolio.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Ecosystem Health</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Value Locked"
            value="$50.1M"
            change="+12.5% this month"
            icon={DollarSign}
            trend="up"
          />
          <MetricCard
            title="Network Compute Power"
            value="1.2 PetaFLOPS"
            change="+350 TFLOPS today"
            icon={Cpu}
            trend="up"
          />
          <MetricCard
            title="Active AI Models"
            value="5"
            subtitle={<span>3 in production, 2 training</span>}
            icon={Zap}
            trend="neutral"
          />
          <MetricCard
            title="$AIBOT Staked"
            value="35.0M"
            change="70% of supply"
            icon={Coins}
            trend="up"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">My Network Summary</h2>
        <Card className="bg-gradient-mesh border-primary/20">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Net Worth</p>
                <p className="text-3xl font-bold">$15,230</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Yield Earnings</p>
                <p className="text-2xl font-semibold text-success">+$250.75</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Compute Rewards</p>
                <p className="text-2xl font-semibold text-success">+$550.00</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Staking Rewards</p>
                <p className="text-2xl font-semibold text-success">+$120.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Platform Entrypoints</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-glow-primary transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>AI Yield Vaults</CardTitle>
              <CardDescription>Put your assets to work.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Average Vault APY</p>
                  <p className="text-2xl font-bold text-success">15.5%</p>
                </div>
                <Button 
                  className="w-full group-hover:translate-x-1 transition-transform" 
                  onClick={() => navigate("/vaults")}
                >
                  Explore Vaults
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-glow-accent transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Contribute Compute</CardTitle>
              <CardDescription>Power the network's AI. Earn rewards.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current Contributor APY</p>
                  <p className="text-2xl font-bold text-success">25.0%</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:translate-x-1 transition-transform"
                  onClick={() => navigate("/compute")}
                >
                  Start Contributing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-glow-primary transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Stake & Govern</CardTitle>
              <CardDescription>Stake $AIBOT. Shape the future.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Staking APY</p>
                  <p className="text-2xl font-bold text-success">8.0%</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:translate-x-1 transition-transform"
                  onClick={() => navigate("/stake")}
                >
                  Go to Staking
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
