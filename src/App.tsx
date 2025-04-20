import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1, v4} from "uuid";

export type Task = {
    title: string
    isDone: boolean
    id: string
}

export type FilterType = "all" | "completed" | "active"

export const App = () => {
    const [tasks, setTasks] = useState<Array<Task>>([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
    ])

    const createTask = (title: string) => {
        setTasks([...tasks, { id: v4(), title, isDone: false}])
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((item) => item.id !== id))
    }

    const [filter, setFilter] = useState<FilterType>("all")

    let filteredTasks: Task[] = [];

    if (filter === "all") {
        filteredTasks = tasks
    }

    if (filter === "completed") {
        filteredTasks = tasks.filter((item) => item.isDone)
    }

    if (filter === "active") {
        filteredTasks = tasks.filter((item) => !item.isDone)
    }

    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
      <div className="app">
        <TodolistItem title="Jeppa" tasks={filteredTasks} createTask={createTask} deleteTask={deleteTask} changeFilter={changeFilter} />
      </div>
  )
}
