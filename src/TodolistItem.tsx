import {FilterType, Task} from "./App.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";

type Props = {
    title: string
    tasks: Task[],
    deleteTask: (id: string) => void,
    changeFilter: (filter: FilterType) => void,
    createTask: (title: string) => void,
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask}: Props) => {
    return (
        <div style={{display: "flex", flexDirection: "column", border: "1px solid black", padding: "0 16px 16px 16px", borderRadius: "8px", justifyContent: "space-between"}}>
            <h3>{title}</h3>
            <AddTaskForm createTask={createTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
            <div>
                <FilterButtons changeFilter={changeFilter} />
            </div>
        </div>
    )
}