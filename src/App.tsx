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

    const [filter, setFilter] = useState<FilterType>("all")

    const createTask = (title: string) => {
        setTasks([...tasks, { id: v4(), title, isDone: false}])
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((item) => item.id !== id))
    }

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        const newTasks: Array<Task> = tasks.map((task) => {
           return task.id === taskId ? {...task, isDone} : task
        });
        setTasks(newTasks)
    }

    let filteredTasks: Task[] = [];

    const getFilteredTasks = (filter: FilterType) => {
        if (filter === "all") {
            filteredTasks = tasks
        }

        if (filter === "completed") {
            filteredTasks = tasks.filter((item) => item.isDone)
        }

        if (filter === "active") {
            filteredTasks = tasks.filter((item) => !item.isDone)
        }
    }



    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    getFilteredTasks(filter)

    return (
      <div className="app">
        <TodolistItem
            title="LIST"
            tasks={filteredTasks}
            createTask={createTask}
            activeFilter={filter}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
            changeFilter={changeFilter} />
      </div>
  )
}
