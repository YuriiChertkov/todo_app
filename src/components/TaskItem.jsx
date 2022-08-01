import React from "react";

const TaskItem = () => {
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = date + " " + time;
  return <div>{dateTime}</div>;
};

export default TaskItem;
