import {FilterType, Task} from "./App.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {useState} from "react";

type Props = {
    title: string
    todolistId: string,
    tasks: Task[],
    createTask: (title: string, todolistId: string) => void,
    deleteTask: (taskId: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void,
}

export const TodolistItem = ({todolistId, title, tasks, deleteTask, changeTaskStatus, createTask}: Props) => {

    let filteredTasks: Task[] = [];

    const [filter, setFilter] = useState<FilterType>("all")

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
    const createTaskHandler = (title: string) => {
        createTask(title, todolistId)
    }
    const changeTaskStatusHandler = (taskId: string, isDone: boolean) => {
        changeTaskStatus(taskId, isDone, todolistId)
    }
    const deleteTaskHandler = (taskId: string) => {
        deleteTask(taskId, todolistId)
    }
    return (
        <div style={{display: "flex", minWidth: "280px", flexDirection: "column", border: "1px solid black", padding: "0 16px 16px 16px", borderRadius: "8px", justifyContent: "space-between"}}>
            <h3>{title}</h3>
            <AddTaskForm createTask={createTaskHandler} />
            <TaskList tasks={filteredTasks} deleteTask={deleteTaskHandler} changeTaskStatus={changeTaskStatusHandler} />
            <div>
                <FilterButtons changeFilter={changeFilter} activeFilter={filter} />
            </div>
        </div>
    )
}