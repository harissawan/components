function ShowArray(props){
    console.log(props);
    let arr = props.data;
    return(
        <>
            {arr.map((val, index) =>(
                <p>
                    {index} || bowlwer name {val.bowler} || age {val.age}
                </p>
            ))}
        </>
    )
}

export default ShowArray;