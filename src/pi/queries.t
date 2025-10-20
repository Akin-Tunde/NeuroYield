// src/api/queries.ts

// MOCK API: In a real application, this would fetch data from your backend or blockchain.
export const getEcosystemHealth = async () => {
  console.log("Fetching ecosystem health data...");
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  if (Math.random() > 0.9) {
    throw new Error("Failed to fetch ecosystem data.");
  }

  return {
    tvl: { value: 50.1, change: 12.5 },
    computePower: { value: 1.2, unit: "PetaFLOPS", change: 350 },
    activeModels: { production: 3, training: 2 },
    staked: { value: 35.0, percentage: 70 },
  };
};
