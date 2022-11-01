
import Component from './Component.jsx';
import ButtonClick from './ButtonClick.jsx';
import ShowImage from './ShowImage.jsx';
import ShowArray from './ShowArray';
import List from './List.jsx';
import Ternary from './Ternary';
import Button from 'react-bootstrap/Button';


import './parent.css';

function Parent(){
    const comment = {
        text: "Learning react",
        authrt: {
            name:"Hello !"
        }
    };
    const dataArray = [
        {bowler: 'shaheen', age: 21},
        {bowler: 'Haris', age: 21}

    ]


    let value = false
    const number =[1, 2, 3, 4, 5];
   
    

   
   
    return(

      
        <div className='main'>
       
 <div className='parent all'>
        <Component comment={comment}/>
            
         </div>
         <div className='parent all'>
       <ButtonClick/>
            
        </div>
       <div className='parent all'>
         <ShowImage/>
            
       </div>

         <div className='parent all'>
         <ShowArray data={dataArray}/>
            
         </div>
        <div className='parent all'>
        <List numbers={number}/>
            
         </div>

         <div className='parent all'>
         {value ? <ShowArray data={dataArray}/>:<Ternary />}
           
        </div>  
        
        {/* <div><button>submit</button></div> */}
        </div>
        

        
    )
};

export default Parent;