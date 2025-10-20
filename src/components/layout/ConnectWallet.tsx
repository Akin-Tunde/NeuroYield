import { Button } from "@/components/ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";

export function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <Button variant="outline" size="sm" onClick={() => disconnect()}>
        {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
      </Button>
    );
  }

  return (
    <Button variant="default" size="sm" onClick={() => connect({ connector: injected() })}>
      Connect Wallet
    </Button>
  );
}
