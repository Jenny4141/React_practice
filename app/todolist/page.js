"use client";

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

export default function ToDoListPage() {
  // 狀態處理
  const [tasks, setTasks] = useState([
    "React專案練習",
    "作品集整理",
    "企劃書撰寫",
  ]);
  const [newTask, setNewTask] = useState("");
  // 事件處理函數
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {};
  const deleteTask = (index) => {};

  return (
    <div className="container flex flex-col justify-center items-center mx-auto max-w-[400px] py-6 border rounded gap-3">
      <h1 className="text-lg font-bold">TO-DO-LIST</h1>
      <div className="input-group flex items-center gap-1">
        <input
          type="text"
          className="border rounded p-1 text-sm h-8"
          placeholder="請輸入待辦事項"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="w-8 h-8 bg-red-300 flex justify-center items-center rounded">
          <IoMdAdd />
        </button>
      </div>
      <ol>
        {tasks.map((task, idx) => (
          <li key={idx} className="flex gap-1">
            <span className="text-base">{task}</span>
            <button className="w-5 h-5 bg-gray-400 flex justify-center items-center rounded">
              <IoTrashOutline />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
