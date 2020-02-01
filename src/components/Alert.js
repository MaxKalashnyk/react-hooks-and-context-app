import React from "react";

export const Alert = ({ alert }) => {
  if (!alert) {
    return null;
  }

  return (
    <div
      claassName={`alert alert-${alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>Warning!</strong> {alert.text}
      <button type="button" claassName="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
