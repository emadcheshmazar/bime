import { useEffect, useState } from "react";
import { getMethod, postMethod } from "../api/axiosMethods";
import { apiRoots } from "../api/apiURLs";
import { AxiosError } from "axios";

const useApiCall = () => {
  const [userAddress, setUserAddress] = useState<Address | null>(null);
  const [successfullMessage, setSuccessfullMessage] = useState<string>('')
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
      const addressResponse = await postMethod(apiRoots.orderCompletion(), body);
      setSuccessfullMessage(addressResponse.message)
      console.log(addressResponse, 'addressResponse')
    } catch (error) {
      //@ts-ignore
      setSuccessfullMessage((error as AxiosError)?.response?.data?.errors[0])
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchUserAddress()
  }, [])

  return { userAddress, loading, postUserAddress, successfullMessage };
};

export default useApiCall;
