import img from './Images/1.png';
import './parent.css';
function ShowImage(){
    return(
        <>
        <img className="img" src={img}></img>
        </>
    )
}

export default ShowImage;