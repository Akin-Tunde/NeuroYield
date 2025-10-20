import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Cpu, TrendingUp, Coins } from "lucide-react";

export default function Compute() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Compute Network</h1>
        <p className="text-muted-foreground">
          Contribute your GPU power to train AI models and earn $AIBOT rewards.
        </p>
      </div>

      <Card className="bg-gradient-accent/5 border-accent/20">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>Start earning in three simple steps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Download className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold">1. Download Client</h3>
              <p className="text-sm text-muted-foreground">Install the compute node software</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold">2. Run on Your GPU</h3>
              <p className="text-sm text-muted-foreground">Let your hardware power AI training</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Coins className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold">3. Earn $AIBOT</h3>
              <p className="text-sm text-muted-foreground">Get rewarded for every compute cycle</p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button size="lg">
              <Download className="mr-2 w-4 h-4" />
              View Full Setup Guide
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Contributor Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge className="bg-success text-success-foreground">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse mr-2" />
              Active
            </Badge>
            <span className="text-sm text-muted-foreground">Training Model #B7E1F9</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">My Compute Power</p>
              <p className="text-2xl font-bold">25 TFLOPS</p>
              <p className="text-xs text-muted-foreground mt-1">1x RTX 4090</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">My Share of Network</p>
              <p className="text-2xl font-bold">0.02%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Unclaimed Rewards</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-success">250.50</p>
                <span className="text-sm text-muted-foreground">$AIBOT</span>
              </div>
              <Button className="mt-2 w-full" variant="outline">Claim Rewards</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Network Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Network Compute</p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold">1.2 PetaFLOPS</p>
                <TrendingUp className="w-4 h-4 text-success" />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Active Contributors</p>
              <p className="text-xl font-semibold">487</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Rewards Distributed (24h)</p>
              <p className="text-xl font-semibold">125,000 $AIBOT</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
