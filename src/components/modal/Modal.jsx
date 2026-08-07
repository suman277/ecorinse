import React from "react";
import style from "./Modal.module.css";
import { XCircleIcon } from "lucide-react";

const Modal = ({ setHandleDeleteModal, handleDelete }) => {
  return (
    <div className={style.parentContainer}>
      <div>Are you sure want to delete?</div>
      <div className={style.btnSection}>
        <button
          className={style.cancel}
          onClick={() => {
            setHandleDeleteModal({ id: "", isOpen: false });
          }}
        >
          Cancel
        </button>
        <button
          className={style.delete}
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modal;
