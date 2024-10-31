type ComponentProps = {
  type: 'advanced' | 'basic'
}

function Component({ type }: ComponentProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Challenge {type}</h2>
    </div>
  )
}
export default Component
