function ButtonClick(){
    const onClick = ()=>(
        alert('Button Clicked')
    )
    return(
        <>
            <button  onClick={onClick}>click me</button>
        </>
    )
}
export default ButtonClick;