import React, { ReactNode, useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { strings } from "@/src/string";

const Modal = ({
  openSelectAddress,
  modalOpen,
  children,
  onClose,
  handleSubmitAddress,
}: {
  openSelectAddress: () => void;
  modalOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  handleSubmitAddress: () => void;
}) => {
  return (
    <Drawer
      title={''}
      placement={'bottom'}
      width={500}
      onClose={onClose}
      open={modalOpen}
      className="drawer"
    >
      <div className="flex flex-wrap h-full w-full">
        <div>{children}</div>

        <div className="w-full z-50 bg-white shadow-[0px_3px_15px_3px_rgba(34,34,34,0.10)] h-[80px] sticky bottom-0 flex justify-center items-center">
          <button
            onClick={handleSubmitAddress}
            className="min-w-[320px] w-[90%] h-[40px] bg-black"
          >
            <span className="text-center w-full font-[16px] font-500 text-white">
              {strings.select}
            </span>
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default Modal;
