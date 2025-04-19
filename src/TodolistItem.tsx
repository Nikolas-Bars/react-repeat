import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[],
    deleteTask: (id: number) => void,
}

export const TodolistItem = ({title, tasks, deleteTask}: Props) => {
    const func = (id: number) => {
        console.log(id)
        deleteTask(id)
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title="+" />
            </div>
            <button onClick={() => func(5)}>ssdasdwww</button>
            {tasks.length > 0 ?
                <ul>{tasks.map((task: Task) => {
                    return (
                        <li key={task.id}>
                            <input type='checkbox' checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => deleteTask(task.id)}>Xxx</button>
                        </li>
                    )
                })}
                </ul> : <div>Тасок НЕТ!</div>
            }
            <div>
                <Button title="All" />
                <Button title="Active" />
                <Button title="Completed" />
            </div>
        </div>
    )
}