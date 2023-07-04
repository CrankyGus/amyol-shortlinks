"use client";
import React, { createContext, useState } from "react";

type ModalContextType = {
  isOpen: boolean;
  isShow: boolean;
  isCookieAccepted: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsShow: (isShow: boolean) => void;
  setIsCookieAccepted: (isCookieAccepted: boolean) => void;
};

interface IProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  isShow: false,
  isCookieAccepted: false,
  setIsOpen: () => {},
  setIsShow: () => {},
  setIsCookieAccepted: () => {},
});

function Modal({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isShow,
        setIsShow,
        isCookieAccepted,
        setIsCookieAccepted,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function ModalProvider({ children }: IProps) {
  return <Modal>{children}</Modal>;
}

export default ModalProvider;
