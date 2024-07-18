"use client"
import React from 'react'
import { useState } from 'react';

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask] 
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-8" key={i}>
          <div className=" flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <p className="text-xl medium" >{t.desc} </p>
          </div>
          <button 
          onClick={() =>{
            deleteHandler(i)
          }}
          className="rounded bg-black text-white px-4 py-3 text-2xl">Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1
        className=" bg-black text-white p-5 text-5xl font-bold text-center">My TodoList
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text"
          className="text-2xl border-zinc-800 border-4 m-2 px-4 py-2"
          placeholder="Enter task here"
          // two way binding
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input type="text"
          className="text-2xl border-zinc-800 border-4 m-2 px-4 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="rounded px-3 py-2 bg-black text-white font-bold text-2xl  ">Add Task</button>
      </form>
      <div className="p-8 bg-sky-100">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page