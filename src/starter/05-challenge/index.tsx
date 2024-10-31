type ComponentProps = {
  type: 'advanced' | 'basic'
  name: string
  email?: string
}

function Component({ type, name, email }: ComponentProps) {
  return type === 'basic' ? (
    <div className="alert-success">
      <h2>User: {name}</h2>
    </div>
  ) : (
    <div className="alert-danger">
      <h2>User: {name}</h2>
      <h2>Email: {email}</h2>
    </div>
  )
}
export default Component
