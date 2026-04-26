import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.css";
import { NotificationBox } from "../notification-box";

export const NotificationProvider = ({ state, removeNotification }) => {
  return createPortal(
    <div className="notification__container">
      {Object.keys(state.byId).map((key) => {
        const notify = state.byId[key];
        return (
          <NotificationBox
            key={key}
            title={notify.title}
            delay={notify.delay}
            type={notify.type}
            removeNotification={removeNotification}
            id={key}
          />
        );
      })}
    </div>,
    document.getElementById("notifications"),
  );
};
