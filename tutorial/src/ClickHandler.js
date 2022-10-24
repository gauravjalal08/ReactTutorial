
export const ClickHandler = () => {
    const clickHandler=(event,count=1) =>{
    console.log('Button Clicked',event,count)
    }
  return (
    <div>
    <button onClick={clickHandler}> click</button>
    <button onClick={(event) => clickHandler(event,5)}> click 5</button>
    </div>
  )
}
