import {Task} from "./App.tsx";

type Props = {
    tasks: any[]
    deleteTask: (taskId: string) => void
}

export const TaskList = ({ tasks, deleteTask }: Props) => {
    return (
        <div>
            {tasks.length > 0 ?
                <div style={{
                    margin: "8px auto"
                }}>{tasks.map((task: Task) => {
                    return (
                        <div key={task.id}
                             style={{
                                 display: "flex",
                                 justifyContent: "space-between",
                                 width: "100%"
                        }}>
                            <input type='checkbox' checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => deleteTask(task.id)}>Xxx</button>
                        </div>
                    )
                })}
                </div> : <div>Тасок НЕТ!</div>
            }
        </div>
    )
}