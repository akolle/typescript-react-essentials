import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import { type Task } from './types'

function Component() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task): void => {
    setTasks([...tasks, task])
  }

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  )
}
export default Component
