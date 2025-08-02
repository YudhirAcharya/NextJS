"use client";
import React from "react";
import { add, subtract } from "@/utils/index";

const ClinetC = () => {
  const addition = add(2, 3);
  console.log(addition);
  return <div>ClientComp</div>;
};

export default ClinetC;
