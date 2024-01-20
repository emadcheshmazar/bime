import { strings } from "@/src/string";
import React from "react";

function Succession({ goBackHandler, message }: { goBackHandler: () => void, message: string }) {
  console.log(message)
  return (
    <div className="flex flex-wrap bg-white justify-center tablet:justify-start items-start w-full h-screen">
      <div className="w-full h-[56px] shadow-lg mb-[32px]">
        <span className="w-full h-full flex justify-start items-center pr-4 text-[18px] font-bold text-[black]">
          {strings.DataEntryTitle}
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-start mx-5 items-start mt-[24px]">
        <span className={`text-right text-[20px] ${message === 'order saved successfully' ? 'text-[#34A862]': 'text-red-700'} font-bold mb-[317px]`}>
          {message === 'order saved successfully' ? strings.SuccessRegister : message}
        </span>
        <div className="w-full flex justify-end items-center mt-[178px]">
          <button
            onClick={goBackHandler}
            className="min-w-[140px] h-[48px] bg-black"
          >
            <span className="text-center w-full text-[16px] font-bold text-white">
              {strings.Back}
            </span>
          </button>
        </div>
      </div>
      <div className="w-full mx-5 flex justify-end">
        <span className="w-full text-[10px] text-right ">
          Created by Emad Cheshmazar
        </span>
      </div>
    </div>
  );
}

export default Succession;
