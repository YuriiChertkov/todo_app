import React from "react";
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import ListOfTasks from "./components/ListOfTasks";
import styles from "./styles/modules/app.module.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container">
      <AppTitle> TODO LIST</AppTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
        <ListOfTasks />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </div>
  );
}

export default App;
