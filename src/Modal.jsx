import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

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
      <AnimatePresence>
        <motion.div
          className="bg-white w-[400px] h-full lg:h-[415px] flex text-black m-auto  flex-col px-6 justify-evenly rounded-lg items-center lg:items-start lg:px-6"
          layoutId="modal"
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center lg:justify-between w-full">
            <h3 className="font-bold text-[32px] leading-[32px] text-[#3B4262]">
              RULES
            </h3>
            <img
              src="/icon-close.svg"
              role="button"
              className="cursor-pointer hidden lg:flex gap-8"
              onClick={() => close()}
            />
          </div>
          <div className="flex items-center justify-center w-full">
            {children}
          </div>
          <div>
            <img
              src="/icon-close.svg"
              role="button"
              className="cursor-pointer lg:hidden"
              onClick={() => close()}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </main>,
    document.body
  );
}
Modal.OpenModal = OpenModal;
Modal.ModalWindow = ModalWindow;
export default Modal;
