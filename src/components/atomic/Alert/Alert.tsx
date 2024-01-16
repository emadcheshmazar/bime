import React, { useEffect, useState } from "react";
import { message } from "antd";

const Alert: React.FC<{
  type: alertType;
  title: alertTitle;
  message?: string;
  show: boolean;
}> = ({ type, title, message: alertMessage, show }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (show) {
      messageApi.open({
        type,
        content: (
          <div>
            <h3>{title}</h3>
            {alertMessage && <p>{alertMessage}</p>}
          </div>
        ),
        duration: 5,
      });
    }
  }, [show, type, title, alertMessage, messageApi]);

  return <>{contextHolder}</>;
};

export default Alert;
