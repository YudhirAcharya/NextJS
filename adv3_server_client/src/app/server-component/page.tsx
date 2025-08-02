import React from "react";
import { add, subtract } from "@/utils/index";
const ServerComp = () => {
  const addition = add(2, 3);
  console.log(addition);
  return <div>ServerComp</div>;
};

export default ServerComp;
