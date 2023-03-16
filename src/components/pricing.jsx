import { useState, useEffect } from 'react';

export default function Pricing() {
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    fetchPricing().then(data => setPricing(data));
  }, []);

  async function fetchPricing() {
    try {
      const response = await fetch('/pricing');
      const data = await response.json();
      return data.pricing;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {pricing ? <p>Pricing: {pricing}</p> : <p>Loading pricing...</p>}
    </div>
  );
}
