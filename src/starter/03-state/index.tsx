import { useState } from 'react'

function Component() {
  const [text, setText] = useState('shakeandbake')
  const [number, setNumber] = useState(1)
  const [list, setList] = useState<string[]>([])

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          //setText('andy')
          //setNumber(2)
          //setList(['hello', 1])
        }}
      >
        {number}
      </button>
    </div>
  )
}
export default Component
