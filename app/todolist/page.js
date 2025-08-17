"use client";

// react
import React, { useState } from "react";
// icons
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
// 自定義
import useTitle from "@/hooks/useTitle";

export default function ToDoListPage() {
  // PageTitle
  useTitle("待辦清單")
  // 狀態處理
  const [tasks, setTasks] = useState(["待辦事項1", "待辦事項2", "待辦事項3"]);
  const [newTask, setNewTask] = useState("");
  // 事件處理函數
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
      <div className="container flex flex-col justify-center items-center mx-auto max-w-[400px] mt-20 py-6 border rounded gap-3">
        <h1 className="text-lg font-bold">TO-DO-LIST</h1>
        <div className="input-group flex items-center max-w-[250px] w-full  gap-1">
          <input
            type="text"
            className="flex-1 border rounded p-1 text-sm h-8"
            placeholder="請輸入待辦事項"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="flex justify-center items-center w-8 h-8 bg-red-200 rounded cursor-pointer hover:bg-red-400"
            onClick={addTask}
          >
            <IoMdAdd />
          </button>
        </div>
        <ol className="flex flex-col max-w-[250px] w-full gap-2">
          {tasks.map((task, idx) => (
            <li key={idx} className="flex justify-between items-center gap-1 bg-sky-100 rounded p-2 hover:bg-sky-200 hover:-translate-y-0.5 transition duration-200 ease-in-out">
              <span className="text-base">{task}</span>
              <button
                className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded cursor-pointer hover:bg-gray-400"
                onClick={() => deleteTask(idx)}
              >
                <IoTrashOutline />
              </button>
            </li>
          ))}
        </ol>
      </div>
  );
}
