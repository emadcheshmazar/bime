"use client";
import React from "react";
import Succession from "./Succession";

function SuccessionWrapper({ goBackHandler }: { goBackHandler: () => void }) {
  return <Succession goBackHandler={goBackHandler} />;
}

export default SuccessionWrapper;
