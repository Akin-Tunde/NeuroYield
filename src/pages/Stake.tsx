import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Coins, Vote, TrendingUp } from "lucide-react";

const proposals = [
  {
    id: 1,
    title: "Promote Model #C9A3B1 to Production",
    status: "Active",
    votes: { for: 15234500, against: 2341200 },
    endsIn: "2 days",
  },
  {
    id: 2,
    title: "Adjust Performance Fees to 15%",
    status: "Active",
    votes: { for: 8234100, against: 9876543 },
    endsIn: "5 days",
  },
  {
    id: 3,
    title: "Fund New Strategy Research: DeFi 3.0",
    status: "Passed",
    votes: { for: 22345678, against: 3456789 },
    endsIn: "Ended",
  },
];

export default function Stake() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Stake & Govern</h1>
        <p className="text-muted-foreground">
          Stake $AIBOT to earn protocol fees and participate in governance decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-primary" />
              Staking
            </CardTitle>
            <CardDescription>Stake your tokens to earn rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="stake" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stake">Stake</TabsTrigger>
                <TabsTrigger value="unstake">Unstake</TabsTrigger>
              </TabsList>
              <TabsContent value="stake" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Staked</p>
                    <p className="text-xl font-bold">35.0M $AIBOT</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Staking APY</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xl font-bold text-success">8.0%</p>
                      <TrendingUp className="w-4 h-4 text-success" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount to Stake</label>
                  <Input placeholder="0.00" type="number" />
                  <p className="text-xs text-muted-foreground">Balance: 0 $AIBOT</p>
                </div>
                <Button className="w-full" size="lg">Stake $AIBOT</Button>
              </TabsContent>
              <TabsContent value="unstake" className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount to Unstake</label>
                  <Input placeholder="0.00" type="number" />
                  <p className="text-xs text-muted-foreground">Staked: 0 $AIBOT</p>
                </div>
                <Button className="w-full" size="lg" variant="outline">Unstake $AIBOT</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Staking Position</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Your Staked Amount</p>
              <p className="text-3xl font-bold">0 $AIBOT</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Your Share</p>
                <p className="text-xl font-semibold">0%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Unclaimed Rewards</p>
                <p className="text-xl font-semibold text-success">0 $AIBOT</p>
              </div>
            </div>
            <Button variant="outline" className="w-full" disabled>
              Claim Rewards
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Vote className="w-5 h-5 text-primary" />
            Governance Proposals
          </CardTitle>
          <CardDescription>Vote on proposals to shape the network's future</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{proposal.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant={proposal.status === "Active" ? "default" : "secondary"}>
                          {proposal.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {proposal.status === "Active" ? `Ends in ${proposal.endsIn}` : proposal.endsIn}
                        </span>
                      </div>
                    </div>
                    {proposal.status === "Active" && (
                      <Button size="sm">View & Vote</Button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-success">For: {(proposal.votes.for / 1000000).toFixed(1)}M</span>
                      <span className="text-destructive">Against: {(proposal.votes.against / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-success"
                        style={{
                          width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
