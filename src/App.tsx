import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    title: string
    isDone: boolean
    id: number
}

export const App = () => {
    let task1: Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]

    const tasks2: Task[] = []

    const deleteTask = (id: number) => {
        console.log(id, 'jeppa')
        task1 = task1.filter((item) => item.id !== id)
        alert(task1, 'task1')
    }

    return (
      <div className="app">
        <TodolistItem title="Jeppa" tasks={task1} deleteTask={deleteTask}/>
        <TodolistItem title="Home" tasks={tasks2} deleteTask={deleteTask}/>
      </div>
  )
}
