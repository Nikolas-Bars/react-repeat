import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1, v4} from "uuid";

export type Task = {
    title: string
    isDone: boolean
    id: string
}

type todolistType = {
    todolistId: string
    title: string
    tasks: Task[]
}

export type FilterType = "all" | "completed" | "active"

export const App = () => {
    const [tasks, setTasks] = useState<Array<Task>>([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
    ])

    const [todolists, setTodolists] = useState<Array<todolistType>>([
        {todolistId: v1(), title: "Todolist", tasks: [
            { id: v1(), title: 'HTML&CSS', isDone: true },
            { id: v1(), title: 'JS', isDone: true },
            { id: v1(), title: 'ReactJS', isDone: false },
        ]},
        {todolistId: v1(), title: "Jeppa", tasks: [
                { id: v1(), title: 'HTML&CSS', isDone: true },
                { id: v1(), title: 'JS', isDone: true },
                { id: v1(), title: 'ReactJS', isDone: false },
            ]},

    ])

    const [filter, setFilter] = useState<FilterType>("all")

    const createTask = (title: string, todolistId: string) => {
        // setTasks([...tasks, { id: v4(), title, isDone: false}])
        console.log(title, todolistId)
        setTodolists(todolists.map((td) => {
                return td.todolistId === todolistId ? {...td, tasks: [...td.tasks, { id: v4(), title, isDone: false}]} : {...td}
            })
        )
    }

    const deleteTask = (taskId: string, todolistId: string) => {
        setTodolists(todolists.map((td) => {
            return td.todolistId === todolistId ? {...td, tasks: td.tasks.filter((task) => task.id !== taskId)} : {...td}
        }))
    }

    const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        const newTasks: Array<Task> = tasks.map((task) => {
           return task.id === taskId ? {...task, isDone} : task
        });
        setTasks(newTasks)
    }

    // let filteredTasks: Task[] = [];

    // const getFilteredTasks = (filter: FilterType) => {
    //     if (filter === "all") {
    //         filteredTasks = tasks
    //     }
    //
    //     if (filter === "completed") {
    //         filteredTasks = tasks.filter((item) => item.isDone)
    //     }
    //
    //     if (filter === "active") {
    //         filteredTasks = tasks.filter((item) => !item.isDone)
    //     }
    // }
    //
    //
    //
    // const changeFilter = (filter: FilterType) => {
    //     setFilter(filter)
    // }
    //
    // getFilteredTasks(filter)

    return (
      <div className="app">
          <div>
              {todolists.map((todolist) => {
                  return <TodolistItem
                      title={todolist.title}
                      todolistId={todolist.todolistId}
                      tasks={todolist.tasks}
                      createTask={createTask}
                      deleteTask={deleteTask}
                      changeTaskStatus={changeTaskStatus} />
              })}
          </div>
        {/*<TodolistItem*/}
        {/*    title="LIST"*/}
        {/*    tasks={filteredTasks}*/}
        {/*    createTask={createTask}*/}
        {/*    activeFilter={filter}*/}
        {/*    deleteTask={deleteTask}*/}
        {/*    changeTaskStatus={changeTaskStatus}*/}
        {/*    changeFilter={changeFilter} />*/}
      </div>
  )
}
