import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://ajker-bazar-zeta.vercel.app/users/seller/${email}`)
      // fetch(`http://localhost:3000/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching seller status:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [email]);

  return { isSeller, loading }; // ✅ Object return করা হয়েছে
};

export default useSeller;
