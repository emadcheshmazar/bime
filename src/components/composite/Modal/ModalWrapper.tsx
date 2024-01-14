import React, { useState } from "react";
import Modal from "./Modal";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";

const ModalWrapper = ({
  openSelectAddress,
  modalOpen,
}: {
  openSelectAddress: () => void;
  modalOpen: boolean;
}) => {
  const [open, setOpen] = useState(modalOpen);
  const [placement, setPlacement] =
    useState<DrawerProps["placement"]>("bottom");

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={modalOpen}
      onChange={onChange}
      placement={placement}
      showDrawer={openSelectAddress}
      onClose={openSelectAddress}
    />
  );
};

export default ModalWrapper;
