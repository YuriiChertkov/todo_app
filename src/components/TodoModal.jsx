import React from "react";
import toast from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../slices/todoSlice";
import styles from "../styles/modules/modal.module.scss";
import Button from "./Button";

const notifyAdd = () => toast.success("Successfully added!");
const notifyClose = () => toast.success("Successfully closed!");
const TodoModal = ({ isOpen, onCloseButtonClick }) => {
  const [title, setTitle] = React.useState("");
  const [status, setStatus] = React.useState("incomplete");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title: title,
          status: status,
          time: new Date().toLocaleDateString(),
        })
      );
    }
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.closeButton}
          onClick={onCloseButtonClick}
          tabIndex={0}
          role="button"
        >
          <MdOutlineClose onClick={notifyClose} />
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h1 className={styles.formTitle}> Add task</h1>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="status">
            Status
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
          <div className={styles.buttonContainer}>
            <Button type="submit" variant="primary" onClick={notifyAdd}>
              Add Task
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={onCloseButtonClick}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
