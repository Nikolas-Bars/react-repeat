import {FilterType} from "./App.tsx";
import {SuperButton} from "./SuperButton.tsx";

type Props = {
    changeFilter: (filter: FilterType) => void,
    activeFilter: FilterType,
}

export const FilterButtons = ({changeFilter, activeFilter}: Props) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <SuperButton className={activeFilter === 'all' ? 'btn-filter-active' : 'btn-filter-no-active'} title="All" onClick={() => changeFilter("all")} />
            <SuperButton className={activeFilter === 'active' ? 'btn-filter-active' : 'btn-filter-no-active'} title="Active" onClick={() => changeFilter("active")} />
            <SuperButton className={activeFilter === 'completed' ? 'btn-filter-active' : 'btn-filter-no-active'} onClick={() => changeFilter("completed")}>
                Completed
            </SuperButton>
        </div>
    )
}