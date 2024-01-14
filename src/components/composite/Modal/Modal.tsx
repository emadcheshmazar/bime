import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";

function Modal({
  open,
  onChange,
  placement,
  showDrawer,
  onClose,
}: {
  open: boolean;
  onChange: (e: RadioChangeEvent) => void;
  placement: DrawerProps["placement"];
  showDrawer: () => void;
  onClose: () => void;
}) {
  return (
    <Drawer
      title="Drawer with extra actions"
      placement={placement}
      width={500}
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export default Modal;
