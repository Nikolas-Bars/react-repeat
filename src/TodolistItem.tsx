import {FilterType, Task} from "./App.tsx";
import {Button} from "./Button.tsx";
import {TaskList} from "./TaskList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";

type Props = {
    title: string
    tasks: Task[],
    deleteTask: (id: number) => void,
    changeFilter: (filter: FilterType) => void,
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+" onClick={() => ''} />
            </div>
            <TaskList tasks={tasks} deleteTask={deleteTask} />
            <div>
                <FilterButtons changeFilter={changeFilter} />
            </div>
        </div>
    )
}