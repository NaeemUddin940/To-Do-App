import React from "react";

const AddTask = ({ tasks, deleteTask }) => {
  return (
    <>
      <ol className="bg-[#b287fd] w-[100%]">
        {tasks.map((task) => (
          <li
            className="text-white m-1 flex justify-between items-center h-10 ml-5  "
            key={task.id}
          >
            {task.name}
            <button
              className="w-30 text-black cursor-pointer bg-white h-full rounded-full hover:bg-[#ff006a]"
              onClick={() => deleteTask(task.id)}
            >
              Delete Me!
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default AddTask;
