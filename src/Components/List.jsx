function List (props){
    const numbers = props.numbers;
    const listItems = numbers.map ((val) =>
    <li>{val}</li>
    );
return(
    <>
    <ul>{listItems}</ul>
    </>
);
}
export default List;