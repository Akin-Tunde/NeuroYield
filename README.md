**NeuroYield**, a decentralized, AI-powered DeFi protocol.

### Project Overview

NeuroYield is a multi-sided ecosystem designed to optimize yield generation through the use of artificial intelligence. Built on the Base Network, it creates a symbiotic relationship between liquidity providers, compute contributors, and governance token holders. Users can deposit assets into AI-managed vaults, contribute GPU power to train models, and participate in the governance of the protocol.

### Key Features

*   **📈 AI-Managed Yield Vaults:** Users can deposit their assets (like USDC and ETH) into vaults that employ sophisticated, AI-driven strategies to generate yield. Each vault's performance is tied to a specific, verifiable AI model.
*   **💻 Decentralized Compute Network:** Users can contribute their unused GPU power to the network. This distributed computing power is used to train and backtest the AI models that manage the yield vaults. Contributors are rewarded for their participation with the protocol's native token, `$AIBOT`.
*   **🗳️ Staking & Governance:** Holders of the `$AIBOT` token can stake their tokens to earn a share of the protocol's revenue. Staking also grants voting power, allowing users to participate in governance proposals, such as approving new AI models for production or adjusting protocol fees.
*   **🤖 Verifiable AI Model Registry:** The platform features a transparent, on-chain registry of all AI models. The performance of these models is continuously tracked and verified, ensuring transparency and trust in the strategies being employed.
*   **📊 Comprehensive Dashboard:** A central "Ecosystem Hub" provides users with a complete overview of the network's health, including Total Value Locked (TVL), total compute power, and staking statistics. It also summarizes a user's personal net worth and earnings across all platform activities.

### Technology Stack

The project is built with a modern and robust technology stack:

*   **Frontend Framework:** React with TypeScript, powered by Vite for a fast and efficient development experience.
*   **Styling:** Tailwind CSS is used for its utility-first approach, combined with `shadcn/ui` for a library of pre-built, accessible, and themeable components.
*   **Routing:** React Router is used for client-side navigation between pages.
*   **State Management:** TanStack Query is utilized for data fetching, caching, and server state management.
*   **Theming:** The application supports both light and dark modes through `next-themes` and a CSS variable-based theme system.

### Project Structure

The codebase is organized in a modular fashion to ensure scalability and maintainability. The core application logic resides in the `src` directory:

*   `components/`: Contains reusable React components, organized by feature (e.g., `dashboard`, `layout`, `theme`) and a generic `ui` library.
*   `hooks/`: For custom React hooks that encapsulate reusable logic.
*   `lib/`: Includes utility functions used throughout the application.
*   `pages/`: Contains the top-level components for each of the application's main routes.

### Application Pages

The platform is structured into several key pages:

*   **Dashboard (`/`):** The main entry point, providing an overview of the ecosystem and personal stats.
*   **Yield Vaults (`/vaults`):** A list of available AI-managed vaults where users can deposit assets.
*   **Contribute Compute (`/compute`):** The page where users can find information and tools to contribute their GPU power.
*   **Stake & Govern (`/stake`):** The interface for staking `$AIBOT` tokens and participating in governance.
*   **AI Model Registry (`/models`):** A transparent view of all submitted AI models and their performance metrics.