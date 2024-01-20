import React, { ReactNode } from "react";
import { Drawer} from "antd";
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
      className="drawer bg-screen"
    >
      <div className="flex flex-wrap h-full w-full">
        <div className="m-0 w-full">{children}</div>

        <div className="w-full z-50 bg-white m-0 p-0 shadow-[0px_3px_15px_3px_rgba(34,34,34,0.10)] h-[80px] sticky bottom-[-20px] flex justify-center items-center">
          <button
            onClick={handleSubmitAddress}
            className="w-[90%] h-[40px] bg-black"
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
