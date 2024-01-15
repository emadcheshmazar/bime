"use client";
import React, { ChangeEvent, useEffect, useReducer, useState } from "react";
import Registration from "./Registration";
import useApiCall from "@/src/hooks/useApiCall";
import { strings } from "@/src/string";
import { RadioChangeEvent } from "antd";
import Succession from "../Succession";

const RegistrationWrapper: React.FC = () => {
  const { userAddress, loading, postUserAddress, fetchAddressHandler } =
    useApiCall();
  const [addressModalOpen, setAdderssModalOpen] = useState(false);
  const [selectedAddressID, setSelectedAddressID] = useState<string>("");
  const [selectedAddressError, setSelectedAddressError] = useState("");
  const [successRegister, setSuccessRegister] = useState(false);

  const initialUserInfo: FormState = {
    nationalID: "",
    phoneNumber: "",
    nationalIDError: null,
    phoneNumberError: null,
  };

  const addressSelectChange = (e: RadioChangeEvent) => {
    setSelectedAddressID(e.target.value);
    setSelectedAddressError("");
  };

  const onCloseModal = () => {
    setSelectedAddressID("");
    setAdderssModalOpen(false);
  };

  const handleSubmitAddress = () => {
    setAdderssModalOpen(false);
  };

  const reducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
      case "CHANGE_NATIONAL_ID":
        return {
          ...state,
          nationalID: action.value,
          nationalIDError: null,
        };
      case "CHANGE_PHONE_NUMBER":
        return {
          ...state,
          phoneNumber: action.value,
          phoneNumberError: null,
        };
      case "SET_NATIONAL_ID_ERROR":
        return { ...state, nationalIDError: action.error };
      case "SET_PHONE_NUMBER_ERROR":
        return {
          ...state,
          phoneNumberError: action.error,
        };
      default:
        return state;
    }
  };

  const [userInfo, dispatch] = useReducer(reducer, initialUserInfo);

  const handleKeyPress = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "SET_PHONE_NUMBER_ERROR" | "SET_NATIONAL_ID_ERROR"
  ) => {
    const isNumericWithSpaces = /^[\d\s]*$/;

    if (!isNumericWithSpaces.test(e.target.value)) {
      e.preventDefault();
      dispatch({
        type: type,
        error: strings.errors.onlyNumbers,
      });
    } else {
      dispatch({
        type:
          type === "SET_NATIONAL_ID_ERROR"
            ? "SET_NATIONAL_ID_ERROR"
            : "SET_PHONE_NUMBER_ERROR",
        error: "",
      });
    }
  };

  const handleNationalIDChange = (e: CombinedEvent | null) => {
    const value = (e as ChangeEvent<HTMLInputElement>).target.value;
    dispatch({ type: "CHANGE_NATIONAL_ID", value: value || "" });

    handleKeyPress(
      e as React.ChangeEvent<HTMLInputElement>,
      "SET_NATIONAL_ID_ERROR"
    );
  };

  const handlePhoneNumberChange = (e: CombinedEvent | null) => {
    const value = (e as ChangeEvent<HTMLInputElement>).target.value;
    dispatch({ type: "CHANGE_PHONE_NUMBER", value: value || "" });

    handleKeyPress(
      e as React.ChangeEvent<HTMLInputElement>,
      "SET_PHONE_NUMBER_ERROR"
    );
  };

  const openSelectAddress = () => {
    fetchAddressHandler();
    setAdderssModalOpen(true);
  };

  const selectAddressHandler = (id: string) => {
    console.log(id);
  };

  const goBackHandler = () => {
    setSuccessRegister(false);
  };
  const handleSubmit = () => {
    const nationalIDPattern = /^\d{10}$/;
    const phoneNumberPattern = /^(09\d{9}|9\d{9})$/;

    const isNationalIDValid = nationalIDPattern.test(userInfo.nationalID);
    const isPhoneNumberValid = phoneNumberPattern.test(userInfo.phoneNumber);

    if (!isNationalIDValid) {
      dispatch({
        type: "SET_NATIONAL_ID_ERROR",
        error: strings.errors.InvalidNationalID,
      });
    }

    if (!isPhoneNumberValid) {
      dispatch({
        type: "SET_PHONE_NUMBER_ERROR",
        error: strings.errors.InvalidPhoneNumber,
      });
    }

    if (!userInfo.nationalID.trim()) {
      dispatch({
        type: "SET_NATIONAL_ID_ERROR",
        error: strings.errors.Required,
      });
    }
    if (!userInfo.phoneNumber.trim()) {
      dispatch({
        type: "SET_PHONE_NUMBER_ERROR",
        error: strings.errors.Required,
      });
    }
    if (!selectedAddressID) {
      setSelectedAddressError(strings.AddressSelectError);
    }
    if (
      isNationalIDValid &&
      isPhoneNumberValid &&
      userInfo.nationalID.trim() &&
      userInfo.phoneNumber.trim() &&
      selectedAddressID
    ) {
      postUserAddress({
        nationalId: userInfo.nationalID,
        phoneNumber: userInfo.phoneNumber,
        addressId: selectedAddressID,
      });
    }
  };

  return (
    <>
      {successRegister ? (
        <Succession goBackHandler={goBackHandler} />
      ) : (
        <Registration
          userAddress={userAddress}
          loading={loading}
          userInfoState={userInfo}
          handleNationalIDChange={handleNationalIDChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleSubmit={handleSubmit}
          openSelectAddress={openSelectAddress}
          addressModalOpen={addressModalOpen}
          selectAddressHandler={selectAddressHandler}
          selectedAddressID={selectedAddressID}
          addressSelectChange={addressSelectChange}
          onCloseModal={onCloseModal}
          handleSubmitAddress={handleSubmitAddress}
          selectedAddressError={selectedAddressError}
        />
      )}
    </>
  );
};

export default RegistrationWrapper;
