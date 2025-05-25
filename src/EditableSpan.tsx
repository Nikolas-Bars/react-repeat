import {useState} from "react";

type Props = {
    title: string
    callback: (newTitle: string) => void
}
export const EditableSpan = ({title, callback}: Props) => {
    const [editMode, setEditMode] = useState(false)

    const [inputText, setInputText] = useState<string>(title)

    const [error, setError] = useState<string>("")

    const onEditMode = () => {
        setEditMode(true)
    }

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    };

    const onBlurHandler = () => {
        if (inputText.trim().length >= 3 && inputText.trim().length <= 13) {
            callback(inputText)
            setEditMode(false)
            setError("")
        } else if (inputText.trim().length < 3) {
            setError("min length 3 characters long")
        } else if (inputText.trim().length >= 13) {
            setError("max length 13 characters long")
        }
    }

    return (
        <div>
            {editMode ? <input value={inputText} onBlur={onBlurHandler} onChange={(e) => onChangeInputHandler(e)}/>
                : <span onDoubleClick={onEditMode}>{title}</span>
            }
            <div style={{color: "red", marginTop: "8px"}}>{error}</div>
        </div>
    )
}