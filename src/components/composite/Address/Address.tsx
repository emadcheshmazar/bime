import { Checkbox, Radio } from "antd";
import React from "react";
import "./AddressStyles.css";

function Address({
  selectAddressHandler,
  addressTitle,
  addressDescription,
}: {
  selectAddressHandler: () => void;
  addressTitle: string;
  addressDescription: string;
}) {
  return (
    <div className="flex justify-start items-start mb-3">
      <Radio
        onChange={selectAddressHandler}
        style={{ borderRadius: "100px !important" }}
        className="rounded-xl mx-3 mb-5"
      />
      <div className="flex flex-col justify-start">
        <span className="text-right text-black text-[14px] font-bold h-[21px] mb-1">
          {addressTitle}
        </span>
        <span className="text-right text-[#757575} text-[12px] pl-4">
          {addressDescription}
        </span>
      </div>
    </div>
  );
}

export default Address;
