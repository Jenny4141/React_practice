"use client";

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

export default function ToDoListPage() {
  // 狀態處理
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // 事件處理函數
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div className="container flex flex-col justify-center items-center mx-auto max-w-[400px] py-6 border rounded">
      <h1 className="text-lg font-bold mb-3">TO-DO-LIST</h1>
      <div className="input-group flex items-center gap-1">
        <input
          type="text"
          className="border rounded p-1 text-sm h-8"
          placeholder="請輸入待辦事項"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="w-8 h-8 bg-red-300 flex items-center justify-center rounded">
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
}
