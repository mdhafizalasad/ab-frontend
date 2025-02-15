import { useState, useEffect } from 'react';

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://ajker-bazar-zeta.vercel.app/users/buyer/${email}`) // আপনার API এন্ডপয়েন্ট অনুযায়ী URL পরিবর্তন করুন
       //fetch(`http://localhost:3000/users/buyer/${email}`) // আপনার API এন্ডপয়েন্ট অনুযায়ী URL পরিবর্তন করুন
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false); 
        });
    }
  }, [email]);

  return [isBuyer, isBuyerLoading];
};

export default useBuyer;