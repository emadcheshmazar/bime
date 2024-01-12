interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

interface Address {
  id: string;
  name: string;
  details: string;
}
