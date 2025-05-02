import {Task} from "./App.tsx";

type Props = {
    tasks: any[]
    deleteTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TaskList = ({ tasks, deleteTask, changeTaskStatus }: Props) => {
    const changeTaskStatusHandler = (taskId: string, isDone: boolean) => {
        changeTaskStatus(taskId, isDone)
    }
    return (
        <div>
            {tasks.length > 0 ?
                <div style={{
                    margin: "8px auto"
                }}>{tasks.map((task: Task) => {
                    return (
                        <div key={task.id} className={"task"}>
                            <input type='checkbox' checked={task.isDone} onChange={(e) => changeTaskStatusHandler(task.id, e.currentTarget.checked)}/>
                            <span className={task.isDone ? "isDone" : ""}>{task.title}</span>
                            <button onClick={() => deleteTask(task.id)}>Xxx</button>
                        </div>
                    )
                })}
                </div> : <div>Тасок НЕТ!</div>
            }
        </div>
    )
}