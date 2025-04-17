import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    subTitle?: string
    description?: string
    tasks: Task[]
}


export const TodolistItem = (props: Props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button title="+" />
            </div>
            {props.tasks.length > 0 ?
                <ul>{props.tasks.map((task: Task) => {
                    return (
                        <li key={task.id}>
                            <input type='checkbox' checked={task.isDone}/>
                            <span>{task.title}</span>
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