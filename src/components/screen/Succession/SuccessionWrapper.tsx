"use client";
import React from "react";
import Succession from "./Succession";

function SuccessionWrapper({ goBackHandler, message }: { goBackHandler: () => void, message: string }) {
  return <Succession goBackHandler={goBackHandler} message={message} />;
}

export default SuccessionWrapper;
