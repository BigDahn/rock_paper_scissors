import HomeScreen from "./HomeScreen";
import Modal from "./Modal";
import { motion } from "motion/react";
function App() {
  return (
    <div className="bg-linear-to-r from-[#1F3757] to-[#131537] w-screen h-screen flex flex-col  items-center lg:items-end lg:justify-between m-auto lg:pt-6 pb-3 lg:pb-4 font-Barlow-Semi-Condensed ">
      <HomeScreen />
      <div className=" flex justify-end px-8  ">
        <Modal>
          <Modal.OpenModal open="modal">
            <motion.button
              className="w-[128px] h-[40px] border-1 border-gray-300 rounded-md flex items-center justify-center font-semibold text-[16px] tracking-[2.5px] text-white cursor-pointer"
              layoutId="modal"
              transition={{ duration: 0.6, ease: "backInOut" }}
            >
              RULES
            </motion.button>
          </Modal.OpenModal>
          <Modal.ModalWindow name="modal">
            <div>
              <img src="/image-rules.svg" />
            </div>
          </Modal.ModalWindow>
        </Modal>
      </div>
    </div>
  );
}

export default App;
