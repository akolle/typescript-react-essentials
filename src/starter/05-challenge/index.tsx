type BasicType = {
  type: 'basic'
  name: string
}

type AdvancedType = {
  type: 'advanced'
  name: string
  email: string
}

type ProfileCardProps = BasicType | AdvancedType

function Component(props: ProfileCardProps) {
  let nameOfClass: string =
    props.type === 'basic' ? 'alert alert-success' : 'alert alert-danger'

  return props.type === 'basic' ? (
    <div className={nameOfClass}>
      <h2>User: {props.name}</h2>
    </div>
  ) : (
    <div className={nameOfClass}>
      <h2>User: {props.name}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  )
}
export default Component
