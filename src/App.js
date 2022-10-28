import { useState, useRef, useEffect } from "react";
import questions from "./dataSorular";
import Soru from "./Soru";
function App(){


const [veriler,setVeri]=useState(questions);








  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    {veriler.map((item)=><Soru key={item.id} item={item} />)}
    

    </>
  )
}

export default App;