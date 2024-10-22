type ComponentProps = {
  name: string
  children: React.ReactNode
}

function Component({ name, children }: ComponentProps) {
  return (
    <div>
      <h4>this is my name: {name}</h4>
      {children}
    </div>
  )
}
export default Component
