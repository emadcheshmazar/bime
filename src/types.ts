interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

interface Address {
  desciption: string;
  id: string;
  name: string;
  details: string;
}
interface FormState {
  nationalID: string;
  phoneNumber: string;
  nationalIDError: string | null;
  phoneNumberError: string | null;
}

type FormAction =
  | { type: "CHANGE_NATIONAL_ID"; value: string }
  | { type: "CHANGE_PHONE_NUMBER"; value: string }
  | { type: "SET_NATIONAL_ID_ERROR"; error: string }
  | { type: "SET_PHONE_NUMBER_ERROR"; error: string }
  | { type: "CHANGE_PLACEHOLDER"; value: string; inputType: string };

type CombinedEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLInputElement>;

interface InputProps {
  error: string | null;
  placeholder: string;
  value: string;
  onChange: (e: CombinedEvent | null) => void;
}

type alertTitle = 'موفقیت آمیز' | 'خطا'
type alertType = 'success' | 'error';
