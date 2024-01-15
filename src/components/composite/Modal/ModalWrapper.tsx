import React, { ReactNode, useState } from "react";
import Modal from "./Modal";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";

const ModalWrapper = ({
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
    <Modal
      open={modalOpen}
      placement={"bottom"}
      onClose={onClose}
      title={""}
      handleSubmitAddress={handleSubmitAddress}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
