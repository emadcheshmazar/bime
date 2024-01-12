import React from "react";

function Registration({
  userAddress,
  loading,
}: {
  userAddress: Address | null;
  loading: boolean;
}) {
  console.log(userAddress, "user address in registration");
  return <div>Registration</div>;
}

export default Registration;
