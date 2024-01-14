import React from "react";
import { strings } from "@/src/string";
import Input from "../../atomic/Input/Input";
import Modal from "../../composite/Modal";

function Registration({
  userAddress,
  loading,
  userInfoState,
  handleNationalIDChange,
  handlePhoneNumberChange,
  handleSubmit,
  openSelectAddress,
  addressModalOpen,
}: {
  userAddress: Address | null;
  loading: boolean;
  userInfoState: FormState;
  handleNationalIDChange: (e: CombinedEvent | null) => void;
  handlePhoneNumberChange: (e: CombinedEvent | null) => void;
  handleSubmit: () => void;
  openSelectAddress: () => void;
  addressModalOpen: boolean;
}) {
  console.log(userInfoState, "userInfoState");
  return (
    <div className="flex flex-wrap bg-white justify-center items-center w-full h-full ">
      <Modal
        openSelectAddress={openSelectAddress}
        modalOpen={addressModalOpen}
      />
      <div className="w-full h-[56px] shadow-lg mb-2">
        <span className="w-full h-full flex justify-start items-center pr-4 font-[18px] font-bold text-[black]">
          {strings.DataEntryTitle}
        </span>
      </div>
      <div className="flex w-full items-center justify-start">
        <span className="mr-4 h-[28px] mt-[32px] text-black text-right font-[16px] font-400">
          {strings.DataEntry}
        </span>
      </div>
      <hr className="w-[320px] h-[1px] mt-[8px] mb-[16px]" />
      <div className="flex flex-col w-full justify-start mt-[-5px] gap-[22px] mb-[39px]">
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
      <div className="w-full flex items-center justify-start">
        <span className="h-[28px] text-right mr-5 font-[16px] font-bold">
          {strings.AddressTitle}
        </span>
      </div>
      <hr className="w-[320px] h-[1px] mt-[8px] mb-[16px]" />
      <div className="flex w-full items-center justify-start">
        <span className="mr-5 h-[56px] text-black text-right font-[16px] font-400">
          {strings.AddressSelect}
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-start mx-5 items-center mt-[24px]">
        <button
          onClick={openSelectAddress}
          className="min-w-[320px] w-[80%] h-[48px] bg-[#FFC453]"
        >
          <span className="text-center w-full font-[16px] font-bold">
            {strings.AddressSelectBtn}
          </span>
        </button>
        <div className="w-full flex justify-end mobile:ml-[20%] items-center mt-[40px]">
          <button
            onClick={handleSubmit}
            className="min-w-[140px] h-[48px] bg-black"
          >
            <span className="text-center w-full font-[16px] font-bold text-white">
              {strings.Continue}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
