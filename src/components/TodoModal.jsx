import React from "react";

const TodoModal = ({ setIsOpen }) => {
  return (
    <div>
      TodoModal
      <div>
        <button>Add</button>
        <button
          className="className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent'"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
