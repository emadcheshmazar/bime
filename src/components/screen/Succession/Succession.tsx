import { strings } from "@/src/string";
import Router from "next/router";
import React from "react";

function Succession({ goBackHandler }: { goBackHandler: () => void }) {
  return (
    <div className="flex flex-wrap bg-white justify-center tablet:justify-start items-start w-full ">
      <div className="w-full h-[56px] shadow-lg mb-[32px]">
        <span className="w-full h-full flex justify-start items-center pr-4 font-[18px] font-bold text-[black]">
          {strings.DataEntryTitle}
        </span>
      </div>
      <div className="w-full flex flex-wrap justify-start mx-5 items-start mt-[24px]">
        <span className="text-right text-[20px] text-[#34A862] font-bold mb-[317px]">
          {strings.SuccessRegister}
        </span>
        <div className="w-full flex justify-end items-center mt-[140px] pb-[125px]">
          <button
            onClick={goBackHandler}
            className="min-w-[140px] h-[48px] bg-black"
          >
            <span className="text-center w-full font-[16px] font-bold text-white">
              {strings.Back}
            </span>
          </button>
        </div>
      </div>
      <span className="w-full text-[10px] text-left mx-3">
        Created by Emad Cheshmazar
      </span>
    </div>
  );
}

export default Succession;
