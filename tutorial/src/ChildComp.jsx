
export const ChildComp = (props) => {
  return (
    <div>
        <button onClick={props.greetHandler}>greet Parent</button>
    </div>
  )
}
