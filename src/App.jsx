import React from "react";
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import ListOfTasks from "./components/ListOfTasks";
import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <div className="container">
      <AppTitle> TODO LIST</AppTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <ListOfTasks />
      </div>
    </div>
  );
}

export default App;
