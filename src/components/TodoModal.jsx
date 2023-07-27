import React from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";

const notifyAdd = () => toast.success("Successfully added!");
const notifyClose = () => toast.success("Successfully closed!");
const TodoModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={notifyClose}>
          <MdOutlineClose onClick={setIsOpen} />
        </div>
        <form className={styles.form}>
          <h1 className={styles.formTitle}> Add task</h1>
          <label htmlFor="title">
            Title
            <input type="text" id="title" />
          </label>
          <label htmlFor="status">
            Status
            <select name="status" id="status">
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="primary">
              Add Task
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
      <Toaster position="top-left" />
    </div>
  );
};

export default TodoModal;
