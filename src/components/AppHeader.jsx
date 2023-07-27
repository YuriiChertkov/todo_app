import React from "react";
import TodoModal from "../components/TodoModal";
import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";

function AppHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className={styles.appHeader}>
        <Button variant="primary" onClick={openModal}>
          Show Modal
        </Button>
        <SelectButton>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </SelectButton>
      </div>
      <TodoModal isOpen={isOpen} onCloseButtonClick={closeModal} />
    </div>
  );
}

export default AppHeader;
