import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  function handleDismiss(id) {
    setToastList(toastList.filter((toast) => toast.id !== id));
  }

  function handleToastAddition(toast) {
    const nextToast = {
      variant: toast.variant,
      message: toast.message,
      id: crypto.randomUUID(),
    };
    const nextToastList = [...toastList, nextToast];
    setToastList(nextToastList);
  }

  return (
    <ToastContext.Provider
      value={{ toastList, handleDismiss, handleToastAddition }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;