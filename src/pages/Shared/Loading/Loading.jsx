import React from "react";
import loader from "../../../assets/image/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-20 h-20" src={loader} alt="" />
    </div>
  );
};

export default Loading;
