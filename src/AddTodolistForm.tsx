import {Button} from "./Button.tsx";
import {ChangeEvent, useState} from "react";

type Props = {
    createTodolist: (title: string) => void
}

export const AddTodolistForm = ({createTodolist}: Props) => {
    // const inputRef = useRef<HTMLInputElement>(null);

    const [titleInput, setTitleInput] = useState<string>("");

    const [error, setError] = useState<string>("");

    const createTodolistHandler = () => {
        if (titleInput.trim().length >= 3 && titleInput.trim().length <= 13) {
            createTodolist(titleInput)
            setTitleInput("")
            setError("")
        } else if (titleInput.trim().length < 3) {
            setError("min length 3 characters long")
        } else if (titleInput.trim().length >= 13) {
            setError("max length 13 characters long")
        }
    }
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitleInput(e.currentTarget.value)
    }
    const createTodolistOnEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            createTodolistHandler()
        }
    }

    return (
        <div style={{backgroundColor: "blue", maxWidth: "280px", opacity: "0.5", borderRadius: "8px", padding: "16px", marginBottom: "16px"}}>
            <div style={{display: "flex", margin: "8px 0", border: "2px solid gray", padding: "8px", borderRadius: "4px", height: "40px", alignItems: "center", justifyContent: "space-between"}}>
                <input
                    style={{marginRight: "8px", width: "100%"}}
                    placeholder={"max title 13"}
                    className={error ? "error-input" : ""}
                    value={titleInput}
                    onChange={(e) => changeInputHandler(e)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => createTodolistOnEnterHandler(e)}
                />
                <Button disabled={!titleInput.length} title="+" onClick={() => createTodolistHandler()}/>
            </div>
            {error && <div style={{color: "red"}}>{error}</div>}
        </div>
    )
}