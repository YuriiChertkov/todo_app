import React from "react";
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import ListOfTasks from "./components/ListOfTasks";
import style from "./styles/modules/app.module.scss";

function App() {
  return (
    <div className="">
      <AppTitle> TODO LIST</AppTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        </div>
      <ListOfTasks />
    </div>
  );
}

export default App;
