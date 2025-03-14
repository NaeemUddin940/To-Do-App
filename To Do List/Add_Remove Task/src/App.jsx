import React from "react";
import { useState } from "react";
import AddTask from "./assets/Component/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "" });

  const addTask = () => {
    if (newTask.name) {
      setTasks([...tasks, { id: Date.now(), name: newTask.name }]);
      setNewTask({ name: "" });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeHandle = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="
      h-screen flex flex-col items-center"
    >
      <div
        className="
        flex flex-col items-center
        h-[800px] w-[600px] mt-6
        bg-indigo-600 rounded-2xl 
        shadow-[0_5px_10px_rgba(0,0,0,.4)]"
      >
        <h1
          className="
        bg-[#b2f142]
        w-[100%]
        py-4 rounded-2xl 
        text-4xl font-bold 
        text-center shadow-[0_5px_10px_rgba(0,0,0,.4)]"
        >
          Add New Task
        </h1>

        <div className="flex justify-between items-center font-bold text-black bg-[#f55f10] h-[60px] w-[400px] rounded-full m-4 shadow-[3px_4px_9px_rgba(0,0,0,.4)]">
          <input
            className="py-1 text-white  outline-none ml-5 "
            type="text"
            name="name"
            value={newTask.name}
            onChange={changeHandle}
            placeholder="Enter Movie Name"
          />
          <button
            className="h-full w-30 bg-[#ff0069] rounded-r-full rounded-l-full cursor-pointer"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <AddTask tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
