import React from "react";
import Service from "./Service";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {
  const {
    data: services = [], // Default to an empty array
    isLoading,
  } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch("https://ajker-bazar-zeta.vercel.app/all-services");
      const data = await res.json();
      console.log("API Response:", data); // Debugging log
      return Array.isArray(data) ? data : []; // Ensure it's an array
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
         <h2 className="text-primary ">Seller's Add a Product Section</h2>
        <h3 className="text-2xl md:text-3xl">Deals Of The Week</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {services.length > 0 ? (
          services.map((serviceData) => (
            <Service key={serviceData._id} serviceData={serviceData} />
          ))
        ) : (
          <p className="text-center">No services available.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
