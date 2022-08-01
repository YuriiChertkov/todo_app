import React from "react";
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import ListOfTasks from "./components/ListOfTasks";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-100 to-pink-100">
      <AppTitle> TODO LIST</AppTitle>
      <AppHeader />
      <ListOfTasks />
    </div>
  );
}

export default App;
