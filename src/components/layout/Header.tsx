import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger />
        
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Badge variant="outline" className="gap-1">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Base Network
            </Badge>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border">
            <span className="text-sm font-medium">$AIBOT</span>
            <span className="text-sm text-success font-semibold">$1.23</span>
            <TrendingUp className="w-3 h-3 text-success" />
          </div>

          <ThemeToggle />

          <Button variant="default" size="sm">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}
