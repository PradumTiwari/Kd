'use client'
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <Modal>
          <ModalTrigger className="bg-black border dark:bg-white dark:text-black text-white flex justify-center group/modal-btn relative overflow-hidden">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
           Contact
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
             Us
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent className="border p-2">
              <div className="flex justify-center items-center"></div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="flex items-center justify-center">
                  <CallIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Kundan No.
                  </span>
                </div>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Call Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-2xl font-bold mt-4"></h1>
      </motion.div>
    </>
  );
};

const CallIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 16.92v3a2 2 0 0 1 -2.18 2c-3.36-.49-6.53-2.72-9.12-5.31c-2.59-2.59-4.82-5.76-5.31-9.12a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.13 1.21.5 2.4 1.11 3.48a2 2 0 0 1 -.45 2.11l-1.27 1.27a16 16 0 0 0 6.6 6.6l1.27-1.27a2 2 0 0 1 2.11-.45c1.08.61 2.27.98 3.48 1.11a2 2 0 0 1 1.72 2z" />
  </svg>
);

export default Contact;
