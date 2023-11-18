import React, { useState, useEffect } from 'react';

const PriceConverter = ({ priceInUSD }) => {
  const [dollarPrice, setDollarPrice] = useState(0);
  const [priceInARS, setPriceInARS] = useState(0);

  useEffect(() => {
    const fetchDollarPrice = async () => {
      try {
        const response = await fetch("https://dolarapi.com/v1/dolares/blue");
        const data = await response.json();
        const dollarPrice = data.compra;
        setDollarPrice(dollarPrice);
      } catch (error) {
        console.error('Error fetching dollar price:', error);
      }
    };

    fetchDollarPrice();
  }, []);

  useEffect(() => {
    const calculatePriceInARS = () => {
      const priceInARS = Math.ceil(priceInUSD * dollarPrice / 500) * 500;
      setPriceInARS(priceInARS);
    };

    calculatePriceInARS();
  }, [priceInUSD, dollarPrice]);

  return (
    <div className="text-green-600 font-bold self-center">
      AR$ {priceInARS}
    </div>
  );
};

export default PriceConverter;
