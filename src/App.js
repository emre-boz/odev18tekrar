import { useState, useRef, useEffect } from "react";
import questions from "./dataSorular";

function App(){


const [veriler,setVeri]=useState(questions);








  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    {veriler.map((item)=><div key={item.id}>
     <p>{item.title}</p>
     
     <button>cevup</button>
     <p>{item.info}</p> 
 
     


     </div>)}
    </>
  )
}

export default App;