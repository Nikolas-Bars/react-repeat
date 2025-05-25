import {Task} from "./App.tsx";
import {EditableSpan} from "./EditableSpan.tsx";

type Props = {
    tasks: any[]
    deleteTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    updateTaskTitle: (taskId: string, title: string) => void,
}

export const TaskList = ({ tasks, deleteTask, updateTaskTitle, changeTaskStatus }: Props) => {
    const changeTaskStatusHandler = (taskId: string, isDone: boolean) => {
        changeTaskStatus(taskId, isDone)
    }
    const updateTaskTitleHandler = (taskId: string, title: string) => {
        updateTaskTitle(taskId, title)
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
                            <div className={task.isDone ? "isDone" : ""}><EditableSpan title={task.title} callback={(title) => updateTaskTitleHandler(task.id, title)} /></div>
                            <button onClick={() => deleteTask(task.id)}>Xxx</button>
                        </div>
                    )
                })}
                </div> : <div>Тасок НЕТ!</div>
            }
        </div>
    )
}