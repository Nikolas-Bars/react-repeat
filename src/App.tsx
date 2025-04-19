import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

export type Task = {
    title: string
    isDone: boolean
    id: number
}

export type FilterType = "all" | "completed" | "active"

export const App = () => {
    const [tasks, setTasks] = useState<Array<Task>>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ])

    const deleteTask = (id: number) => {
        console.log(id, 'jeppa')
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
        <TodolistItem title="Jeppa" tasks={filteredTasks} deleteTask={deleteTask} changeFilter={changeFilter} />
      </div>
  )
}
