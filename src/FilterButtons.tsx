import {FilterType} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    changeFilter: (filter: FilterType) => void,
}

export const FilterButtons = ({changeFilter}: Props) => {
    return (
        <div>
            <Button title="All" onClick={() => changeFilter("all")} />
            <Button title="Active" onClick={() => changeFilter("active")} />
            <Button title="Completed" onClick={() => changeFilter("completed")} />
        </div>
    )
}