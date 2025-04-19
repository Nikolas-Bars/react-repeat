import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    tasks: any[]
    deleteTask: (taskId: number) => void
}

export const TaskList = ({ tasks, deleteTask }: Props) => {
    return (
        <div>
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
        </div>
    )
}