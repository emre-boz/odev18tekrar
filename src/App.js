import { useState, useRef, useEffect } from "react";
import questions from "./dataSorular";
import{AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
function App(){


const [veriler,setVeri]=useState(questions);

const [gosterinho,setGosterinho]=useState(false);






  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    {veriler.map((item)=><div key={item.id}>
     <p>{item.title}</p>
     
     <button onClick={()=>setGosterinho(!gosterinho)}>
      {gosterinho?<AiOutlineMinus/>:<AiOutlinePlus/>}
     </button>



     {gosterinho&&<p>{item.info}</p>}
     
 
     


     </div>)}
    </>
  )
}

export default App;