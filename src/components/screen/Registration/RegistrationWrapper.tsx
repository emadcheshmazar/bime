"use client";
import React, { useEffect, useState } from "react";
import Registration from "./Registration";
import { getMethod } from "@/src/api/axiosMethods";
import { apiRoots } from "@/src/api/apiURLs";
import useApiCall from "@/src/hooks/useApiCall";

const RegistrationWrapper: React.FC = () => {
  const { userAddress, loading } = useApiCall();

  return <Registration userAddress={userAddress} loading={loading} />;
};

export default RegistrationWrapper;
