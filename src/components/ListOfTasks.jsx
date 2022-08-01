import React from "react";
import TaskItem from "./TaskItem";

const ListOfTasks = () => {
  return (
    <div className="px-5 py-6 z-0 container mx-auto border rounded-xl border-purple-300">
      <div>ListOfTasks1</div>
      <div>
        <TaskItem />
      </div>
      <div>ListOfTasks3</div>
      <div>ListOfTasks4</div>
    </div>
  );
};

export default ListOfTasks;
