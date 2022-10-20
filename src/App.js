import { useState } from "react";
import data from "./data";
const veriler=data;
function App(){

  const [veri,setVeri]=useState(veriler);




  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    <div>
    {veri&&veri.map((item)=>{return <p key={item.id}>{item.name}</p>})}
    </div>
    <div>
      <button onClick={()=>{setVeri([])}}>hepsini sil</button>
    </div>
    
    </>
  )
}

export default App;