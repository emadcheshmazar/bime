import { useEffect, useState } from "react";
import { getMethod, postMethod } from "../api/axiosMethods";
import { apiRoots } from "../api/apiURLs";

const useApiCall = () => {
  const [userAddress, setUserAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserAddress = async () => {
    try {
      setLoading(true);
      const addressResponse = await getMethod(apiRoots.getAddress());
      setUserAddress(addressResponse);
    } catch (error) {
      console.error("Error fetching user address:", error);
    } finally {
      setLoading(false);
    }
  };
  const postUserAddress = async (body: SaveOrderRequest) => {
    try {
      setLoading(true);
      const addressResponse = await postMethod(
        apiRoots.orderCompletion(),
        body
      );
      setUserAddress(addressResponse);
    } catch (error) {
      console.error("Error fetching user address:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAddressHandler = () => {
    fetchUserAddress();
  };

  useEffect(() => {
    fetchUserAddress()
  }, [])

  return { userAddress, loading, postUserAddress, fetchAddressHandler };
};

export default useApiCall;
