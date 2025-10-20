import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Cpu, Coins, ArrowRight, Zap, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEcosystemHealth } from "@/api/queries";
import { Skeleton } from "@/components/ui/skeleton";
import EntryPointCard from "@/components/dashboard/EntryPointCard"; // Will be created next

// Reusable component for the loading state of MetricCard
const MetricCardSkeleton = () => (
  <div className="p-6">
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-4 w-40" />
      </div>
      <Skeleton className="size-12 rounded-lg" />
    </div>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['ecosystemHealth'],
    queryFn: getEcosystemHealth,
  });

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
        {isError && (
          <Card className="bg-destructive/10 border-destructive">
            <CardContent className="p-4 flex items-center gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <div>
                <p className="font-bold">Error Loading Data</p>
                <p className="text-sm text-destructive/80">{error.message}</p>
              </div>
            </CardContent>
          </Card>
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            <>
              <Card><MetricCardSkeleton /></Card>
              <Card><MetricCardSkeleton /></Card>
              <Card><MetricCardSkeleton /></Card>
              <Card><MetricCardSkeleton /></Card>
            </>
          ) : data && (
            <>
              <MetricCard
                title="Total Value Locked"
                value={`$${data.tvl.value}M`}
                change={`+${data.tvl.change}% this month`}
                icon={DollarSign}
                trend="up"
              />
              <MetricCard
                title="Network Compute Power"
                value={`${data.computePower.value} ${data.computePower.unit}`}
                change={`+${data.computePower.change} TFLOPS today`}
                icon={Cpu}
                trend="up"
              />
              <MetricCard
                title="Active AI Models"
                value={`${data.activeModels.production + data.activeModels.training}`}
                subtitle={<span>{data.activeModels.production} in production, {data.activeModels.training} training</span>}
                icon={Zap}
                trend="neutral"
              />
              <MetricCard
                title="$AIBOT Staked"
                value={`${data.staked.value}M`}
                change={`${data.staked.percentage}% of supply`}
                icon={Coins}
                trend="up"
              />
            </>
          )}
        </div>
      </section>

      {/* Other sections remain the same for now, but would also be updated */}
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
          <EntryPointCard
            icon={DollarSign}
            title="AI Yield Vaults"
            description="Put your assets to work."
            statLabel="Average Vault APY"
            statValue="15.5%"
            buttonText="Explore Vaults"
            onClick={() => navigate("/vaults")}
          />
          <EntryPointCard
            icon={Cpu}
            theme="accent"
            title="Contribute Compute"
            description="Power the network's AI. Earn rewards."
            statLabel="Current Contributor APY"
            statValue="25.0%"
            buttonText="Start Contributing"
            buttonVariant="outline"
            onClick={() => navigate("/compute")}
          />
          <EntryPointCard
            icon={Coins}
            title="Stake & Govern"
            description="Stake $AIBOT. Shape the future."
            statLabel="Staking APY"
            statValue="8.0%"
            buttonText="Go to Staking"
            buttonVariant="outline"
            onClick={() => navigate("/stake")}
          />
        </div>
      </section>
    </div>
  );
}
