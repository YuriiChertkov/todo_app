import React from "react";
import TodoModal from "../components/TodoModal";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";

function AppHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className={styles.appHeader}>
        <Button variant="primary">Show Modal</Button>
        <SelectButton>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </SelectButton>
      </div>
      <TodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default AppHeader;
