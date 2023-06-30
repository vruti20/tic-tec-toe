// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
var [value,setValue]=useState(["","","","","","","","",""])
var [main,setMain]=useState(true)
var [text,setText]=useState("")


var buttonhendler=(i)=>{
   
  var copyValue;
  if(main)
  {
     copyValue = [...value]; 
    copyValue[i]="o"
    setValue(copyValue)
    setMain(false)
  } 
  else 
  {
    copyValue = [...value];
    copyValue[i]="x"
    setValue(copyValue) 
    setMain(true)
  }

  if(copyValue[0]==="o" && copyValue[1]==="o" && copyValue[2]==="o")
  {
    setText("o win");

  }
  else if(copyValue[3]==="o" && copyValue[4]==="o" && copyValue[5]==="o")
  {
    setText("o win");
  }
  else if(copyValue[6]==="o" && copyValue[7]==="o" && copyValue[8]==="o")
  {
    setText("o win");
  }
  else if(copyValue[0]==="o" && copyValue[3]==="o" && copyValue[6]==="o")
  {
    setText("o win");
  }
  else if(copyValue[1]==="o" && copyValue[4]==="o" && copyValue[7]==="o")
  {
    setText("o win");
  }
  else if(copyValue[2]==="o" && copyValue[5]==="o" && copyValue[8]==="o")
  {
    setText("o win");
  }
  else if(copyValue[0]==="o" && copyValue[4]==="o" &&  copyValue[8]==="o")
  {
    setText("o win");
  }
  else if(copyValue[2]==="o" && copyValue[4]==="o" && copyValue[6]==="o")
  {
    setText("o win");
  }
  else if(copyValue[0]==="x" && copyValue[1]==="x" && copyValue[2]  ==="x")
  {
    setText("x win");
  }
  else if(copyValue[3]==="x" && copyValue[4]==="x" && copyValue[5]==="x")
  {
    setText("x win");
  }
  else if(copyValue[6]==="x" && copyValue[7]==="x" && copyValue[8]==="x")
  {
    setText("x win");
  }
  else if(copyValue[0]==="x" && copyValue[3]==="x" && copyValue[6]==="x")
  {
    setText("x win");
  }
  else if(copyValue[1]==="x" && copyValue[4]==="x" && copyValue[7]==="x")
  {
    setText("x win");
  }
  else if(copyValue[2]==="x" && copyValue[5]==="x" && copyValue[8]==="x")
  {
    setText("x win");
  }
  else if(copyValue[0]==="x" && copyValue[4]==="x" && copyValue[8]==="x")
  {
    setText("x win");
  }
  else if(copyValue[2]==="x" && copyValue[4]==="x" && copyValue[6]==="x")
  {
    setText("x win");
  }
  else if(copyValue[0]!=="" && copyValue[1]!=="" && copyValue[2]!=="" && copyValue[3]!=="" && 
  copyValue[4]!=="" && copyValue[5]!=="" && copyValue[6]!=="" && copyValue[7]!=="" && copyValue[8]!=="" )
  {
    setText("draw");
  }
  } 
  
var newhendle=()=>{
 setValue(["","","","","","","","",""])
 setText("");
 
}
   return (  
    <div className="App"> 
      <div className='main'>
        <div className='box'>
           <h1>tik tac toe </h1>
           <h2>{text}</h2>      
     {
       value.map((el,i)=>{
        return<button className='btn' disabled={text ? true :false} onClick={() => buttonhendler(i)}>{el}</button>
       }) 
     }

     <button className='main' onClick={() => newhendle()}>reset</button>
 

     </div>
    
    </div>
    </div>
  );
}

export default App;
