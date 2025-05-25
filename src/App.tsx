import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1, v4} from "uuid";
import {AddTodolistForm} from "./AddTodolistForm.tsx";
import s from "./TodolistList.module.css";

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
        const todolist: todolistType | undefined = todolists.find((tdl) => {
           return tdl.todolistId === todolistId
        });
        if (todolist) {
            const changedTodolist: todolistType = {...todolist, tasks: todolist.tasks.map((t) => {
                    return t.id === taskId ? {...t, isDone} : {...t}
                })}

            setTodolists(todolists.map((t) => {
                return t.todolistId === changedTodolist.todolistId ? {...changedTodolist} : {...t}
            }))
        }

    }

    const deleteTodolist = (todolistId: string) => {
        setTodolists(todolists.filter((td) => td.todolistId !== todolistId))
    }

    const createTodolist = (todolistTitle: string) => {
        setTodolists([
            {
                todolistId: v1(),
                title: todolistTitle,
                tasks: []
            },
            ...todolists
        ])
    }

    const updateTodolistTitle = (todolistId: string, title: string) => {
        setTodolists(todolists.map((t) => {
            return t.todolistId === todolistId ? {...t, title} : {...t}
        }))
    }

    const updateTaskTitle = (todolistId: string, taskId: string, title: string) => {
        console.log(todolistId, taskId, title)
        setTodolists(todolists.map((t) => {
            return t.todolistId === todolistId ? {
                ...t,
                tasks: t.tasks.map((task) => task.id === taskId ? {...task, title} : {...task})
            } : {...t}
        }))
    }

    return (
      <div className="app">
          <div className={s.main}>
              <AddTodolistForm createTodolist={createTodolist} />
              <div className={s.todolists_block}>
                  {todolists.map((todolist) => {
                      return <div className={s.todolist}><TodolistItem
                          title={todolist.title}
                          todolistId={todolist.todolistId}
                          tasks={todolist.tasks}
                          createTask={createTask}
                          deleteTask={deleteTask}
                          deleteTodolist={deleteTodolist}
                          updateTodolistTitle={updateTodolistTitle}
                          updateTaskTitle={updateTaskTitle}
                          changeTaskStatus={changeTaskStatus} />
                      </div>
                  })}
              </div>

          </div>
      </div>
  )
}
