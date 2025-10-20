import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";
import Dashboard from "./pages/Dashboard";
import Vaults from "./pages/Vaults";
import Compute from "./pages/Compute";
import Stake from "./pages/Stake";
import Models from "./pages/Models";
import NotFound from "./pages/NotFound";
import Docs from "./pages/Docs"; // Add this
import Security from "./pages/Security"; // Add this

// Wagmi imports
import { WagmiProvider, createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

const queryClient = new QueryClient();

// Wagmi config
const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
});


const App = () => (
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SidebarProvider>
              <div className="min-h-screen flex w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                  <Header />
                  <main className="flex-1 overflow-auto bg-gradient-mesh">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/vaults" element={<Vaults />} />
                      <Route path="/compute" element={<Compute />} />
                      <Route path="/stake" element={<Stake />} />
                      <Route path="/models" element={<Models />} />
                      <Route path="/docs" element={<Docs />} /> {/* Add this */}
                      <Route path="/security" element={<Security />} /> {/* Add this */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
