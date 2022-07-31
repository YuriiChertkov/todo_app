import React from "react";
import TodoModal from "../components/TodoModal";

function AppHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className='flex justify-between mx-11 px-8 py-8'>
        <button
          className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'
          onClick={() => setIsOpen(true)}
        >
          Show Modal
        </button>
        <select className='mx-2 py-1 font-sans'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incompleted'>Incompleted</option>
        </select>
      </div>
      <div>{isOpen && <TodoModal setIsOpen={setIsOpen} />}</div>
    </div>
  );
}

export default AppHeader;
