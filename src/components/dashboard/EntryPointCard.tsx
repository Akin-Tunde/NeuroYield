import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EntryPointCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  statLabel: string;
  statValue: string;
  buttonText: string;
  buttonVariant?: ButtonProps['variant'];
  theme?: 'primary' | 'accent';
  onClick: () => void;
}

export default function EntryPointCard({
  icon: Icon,
  title,
  description,
  statLabel,
  statValue,
  buttonText,
  buttonVariant = 'default',
  theme = 'primary',
  onClick,
}: EntryPointCardProps) {
  const themeClasses = {
    primary: {
      shadow: "hover:shadow-glow-primary",
      iconBg: "bg-primary/10",
      iconText: "text-primary",
    },
    accent: {
      shadow: "hover:shadow-glow-accent",
      iconBg: "bg-accent/10",
      iconText: "text-accent",
    },
  };

  return (
    <Card className={cn("transition-shadow cursor-pointer group", themeClasses[theme].shadow)}>
      <CardHeader>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-2", themeClasses[theme].iconBg)}>
          <Icon className={cn("w-6 h-6", themeClasses[theme].iconText)} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">{statLabel}</p>
            <p className="text-2xl font-bold text-success">{statValue}</p>
          </div>
          <Button
            variant={buttonVariant}
            className="w-full group-hover:translate-x-1 transition-transform"
            onClick={onClick}
          >
            {buttonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
