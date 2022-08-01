import React from "react";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Successfully added!");
const TodoModal = ({ setIsOpen }) => {
  return (
    <div className="fixed mx-96 z-50 px-2 py-6 w-96 border rounded-xl border-purple-200 bg-cyan-100">
      Add Task
      <div>
        <div>
          Title
          <input
            className="ml-2 my-4 w-64 border border-purple-200"
            title="Titles"
            type="text"
          />
        </div>
        <button
          className="mx-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
          onClick={notify}
        >
          Add
        </button>

        <button
          className="mx-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default TodoModal;
