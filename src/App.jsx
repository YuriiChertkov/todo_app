import React from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import AppTitle from "./components/AppTitle";
import TodoModal from "./components/TodoModal";

const notify = () => toast("Hi i'm new developer.");

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <AppTitle> TODO LIST</AppTitle>
      <div className='px-8 py-8'>
        <button
          className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'
          onClick={() => setIsOpen(true)}
        >
          Show Modal
        </button>
        {isOpen && <TodoModal setIsOpen={setIsOpen} />}
        <button onClick={notify}></button>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
