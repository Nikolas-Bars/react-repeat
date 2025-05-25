import {FilterType, Task} from "./App.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {useState} from "react";
import {Button} from "./Button.tsx";
import {EditableSpan} from "./EditableSpan.tsx";
import s from "./TodolistList.module.css"

type Props = {
    title: string
    todolistId: string,
    tasks: Task[],
    createTask: (title: string, todolistId: string) => void,
    deleteTask: (taskId: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void,
    deleteTodolist: (todolistId: string) => void,
    updateTodolistTitle: (todolistId: string, title: string) => void,
    updateTaskTitle: (todolistId: string, taskId: string, title: string) => void,
}

export const TodolistItem = ({todolistId, updateTaskTitle, updateTodolistTitle, deleteTodolist, title, tasks, deleteTask, changeTaskStatus, createTask}: Props) => {

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
    const deleteTodolistHandler = () => {
        deleteTodolist(todolistId)
    }
    const changeTodolistTitleHandler = (newTitle: string) => {
        updateTodolistTitle(todolistId, newTitle)
    }
    const  updateTaskTitleHandler = (taskId: string, newTitle: string) => {
        updateTaskTitle(todolistId, taskId, newTitle)
    }
    return (
        <div className={s.todolist_item_main}>
            <div className={s.todolist_item_header}><EditableSpan title={title} callback={changeTodolistTitleHandler} /><Button title={'X'} onClick={deleteTodolistHandler} /></div>
            <div>
                <AddTaskForm createTask={createTaskHandler} />
            </div>

            <TaskList tasks={filteredTasks} updateTaskTitle={updateTaskTitleHandler} deleteTask={deleteTaskHandler} changeTaskStatus={changeTaskStatusHandler} />
            <div>
                <FilterButtons changeFilter={changeFilter} activeFilter={filter} />
            </div>
        </div>
    )
}