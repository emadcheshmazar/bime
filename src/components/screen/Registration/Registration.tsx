import React, { useState } from "react";
import { strings } from "@/src/string";
import Input from "../../atomic/Input/Input";
import Modal from "../../composite/Modal";
import Address from "../../composite/Address/Address";
import { Radio, RadioChangeEvent } from "antd";

function Registration({
  userAddress,
  loading,
  userInfoState,
  handleNationalIDChange,
  handlePhoneNumberChange,
  handleSubmit,
  openSelectAddress,
  addressModalOpen,
  selectAddressHandler,
  selectedAddressID,
  addressSelectChange,
  onCloseModal,
  handleSubmitAddress,
}: {
  userAddress: any;
  loading: boolean;
  userInfoState: FormState;
  handleNationalIDChange: (e: CombinedEvent | null) => void;
  handlePhoneNumberChange: (e: CombinedEvent | null) => void;
  handleSubmit: () => void;
  openSelectAddress: () => void;
  addressModalOpen: boolean;
  selectAddressHandler: (id: string) => void;
  selectedAddressID: string;
  addressSelectChange: (e: RadioChangeEvent) => void;
  onCloseModal: () => void;
  handleSubmitAddress: () => void;
}) {
  console.log(selectedAddressID, "selectedAddressID");
  console.log(userAddress, "userAddress");

  return (
    <div className="flex flex-wrap bg-white justify-center tablet:justify-start items-start w-full ">
      <Modal
        openSelectAddress={openSelectAddress}
        modalOpen={addressModalOpen}
        onClose={onCloseModal}
        handleSubmitAddress={handleSubmitAddress}
      >
        {
          <Radio.Group
            onChange={addressSelectChange}
            value={selectedAddressID}
            className="flex flex-col"
          >
            {userAddress?.map((address: any) => (
              <div key={address.id} className="flex flex-col my-2 mx-3">
                <Radio value={address.id} className="m-2 h-[21px]">
                  <span className="text-right text-black text-[14px] font-bold ">
                    {address.name}
                  </span>
                </Radio>
                <span className="text-right text-[#757575} text-[12px] px-8 -mt-2">
                  {address.details}
                </span>
              </div>
            ))}
            {/* <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio> */}
          </Radio.Group>
        }
      </Modal>
      <div className="w-full h-[56px] shadow-lg mb-[32px]">
        <span className="w-full h-full flex justify-start items-center pr-4 font-[18px] font-bold text-[black]">
          {strings.DataEntryTitle}
        </span>
      </div>
      <div className="flex w-full h-[28px] items-center justify-start">
        <span className="mr-4 flex items-center text-black text-right font-[16px] font-400">
          {strings.DataEntry}
        </span>
      </div>
      <hr className="min-w-[320px] w-[90%] h-[1px] mt-[0px] mb-[16px] tablet:mr-4" />
      <div className="flex flex-col w-full justify-start gap-[22px] mb-[39px]">
        <Input
          error={userInfoState.nationalIDError}
          placeholder={strings.placeholder.nationalID}
          value={userInfoState.nationalID}
          onChange={handleNationalIDChange}
        />
        <Input
          error={userInfoState.phoneNumberError}
          placeholder={strings.placeholder.phoneNumber}
          value={userInfoState.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="w-full h-[28px] flex items-center justify-start">
        <span className="h-[28px] flex items-center text-right mr-5 font-[16px] font-bold">
          {strings.AddressTitle}
        </span>
      </div>
      <hr className="min-w-[320px] w-[90%] h-[1px] mt-[8px] mb-[16px] tablet:mr-4" />

      <div className="flex w-full h-[56px] items-center justify-start">
        {!selectedAddressID && (
          <span className="mr-5 text-black text-right font-[16px] font-400">
            {strings.AddressSelect}
          </span>
        )}
      </div>
      <div className="w-full flex flex-wrap justify-start mx-5 items-start mt-[24px]">
        {selectedAddressID ? (
          <h4 className="text-[14px] h-[48px] font-bold mt-[-80px]">
            {
              userAddress?.find(
                (address: any) => address.id === selectedAddressID
              ).name
            }
          </h4>
        ) : (
          <button
            onClick={openSelectAddress}
            className="min-w-[320px] w-full h-[48px] bg-[#FFC453]"
          >
            <span className="text-center w-full font-[16px] font-bold">
              {strings.AddressSelectBtn}
            </span>
          </button>
        )}
        <div className="w-full flex justify-end items-center mt-[40px] pb-[121px]">
          <button
            onClick={handleSubmit}
            className={`min-w-[140px] h-[48px] bg-black ${
              selectedAddressID && "mt-[136px]"
            }`}
          >
            <span className="text-center w-full font-[16px] font-bold text-white">
              {strings.Continue}
            </span>
          </button>
        </div>
      </div>
      <span
        className={`w-full text-[10px] text-left mx-3 ${
          selectedAddressID ? "pt-[3px]" : 'pt-[90px]'
        }`}
      >
        Created by Emad Cheshmazar
      </span>
    </div>
  );
}

export default Registration;
