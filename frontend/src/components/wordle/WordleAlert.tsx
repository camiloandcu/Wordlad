"use client";

import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WordleAlert() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1000}
      closeButton={false}
      limit={3}
      hideProgressBar
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      transition={Zoom}
    />
  );
}
