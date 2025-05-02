import {Button} from "./Button.tsx";
import {ChangeEvent, useState} from "react";

type Props = {
    createTask: (title: string) => void
}

export const AddTaskForm = ({createTask}: Props) => {
    // const inputRef = useRef<HTMLInputElement>(null);

    const [taskInput, setTaskInput] = useState<string>("");

    const [error, setError] = useState<string>("");

    const createTaskHandler = () => {
        if (taskInput.trim().length >= 3 && taskInput.trim().length <= 13) {
            createTask(taskInput)
            setTaskInput("")
            setError("")
        } else if (taskInput.trim().length < 3) {
            setError("min length 3 characters long")
        } else if (taskInput.trim().length >= 13) {
            setError("max length 13 characters long")
        }
    }
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTaskInput(e.currentTarget.value)
    }
    const createTaskOnEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            createTaskHandler()
        }
    }
    return (
        <div>
            <div style={{ display: "flex", height: '30px', width: "100%", justifyContent: "space-between" }}>
                <input
                    style={{marginRight: "8px", width: "100%"}}
                    placeholder={"max title 13"}
                    className={error ? "error-input" : ""}
                    value={taskInput}
                    onChange={(e) => changeInputHandler(e)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => createTaskOnEnterHandler(e)}
                />
                <Button disabled={!taskInput.length} title="+" onClick={() => createTaskHandler()}/>
            </div>
            {error && <div style={{color: "red"}}>{error}</div>}
        </div>
    )
}