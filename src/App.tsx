import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    title: string
    isDone: boolean
    id: number
}

export const App = () => {
    const task1: Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: Task[] = []

    return (
      <div className="app">
        <TodolistItem title="Jeppa" tasks={task1} />
        <TodolistItem title="Home" tasks={tasks2} />
      </div>
  )
}
