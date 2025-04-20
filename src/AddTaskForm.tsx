import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
    createTask: (title: string) => void
}

export const AddTaskForm = ({createTask}: Props) => {
    // const inputRef = useRef<HTMLInputElement>(null);

    const [taskInput, setTaskInput] = useState<string>("");

    const createTaskHandler = () => {
        if (taskInput.length > 0 && taskInput.length <= 13) {
            createTask(taskInput)
            setTaskInput("")
        }
    }
    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.currentTarget.value)
    }
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <input
                style={{ marginRight: "8px" }}
                placeholder={"max title 13"}
                value={taskInput}
                onChange={(e) => changeInputHandler(e)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        createTaskHandler()
                    }
                }}
            />
            <Button disabled={!taskInput.length} title="+" onClick={() => createTaskHandler()}/>
            {taskInput.length > 13 && <div style={{color: "red"}}>max title 13</div>}
        </div>
    )
}