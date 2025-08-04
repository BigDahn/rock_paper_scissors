import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenModal({ children, open: OpenModalName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(OpenModalName) });
}

function ModalWindow({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== name) return null;

  return createPortal(
    <main className="bg-black/50 fixed inset-0 flex m-auto">
      <div className="bg-white w-[400px] h-[415px] flex text-black m-auto  flex-col px-6 justify-evenly rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[32px] leading-[32px] text-[#3B4262]">
            RULES
          </h3>
          <img
            src="/icon-close.svg"
            role="button"
            className="cursor-pointer"
            onClick={() => close()}
          />
        </div>
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </main>,
    document.body
  );
}
Modal.OpenModal = OpenModal;
Modal.ModalWindow = ModalWindow;
export default Modal;
