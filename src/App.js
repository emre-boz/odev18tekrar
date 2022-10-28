import { useState } from "react";
import menu from "./yemekler";

function App(){

const [yemek,setYemek]=useState(menu);

const kahvaltiliklar=()=>{
  const yeniListe=yemek.filter((item)=>{
    return item.category==='breakfast';
  }).map((item)=>{
    return item;
  })
  setYemek(yeniListe);
}

const oglen=()=>{
  const yeniListe=yemek.filter((item)=>{
    return item.category==='lunch';
  }).map((item)=>{
    return item;
  })
  setYemek(yeniListe);
}





  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    
    <div>
    <button onClick={()=>setYemek(yemek)}>hepsi</button>
    <button onClick={()=>kahvaltiliklar()}>kahvaltiliklar</button>
    <button onClick={()=>oglen()}>öğlen</button>
    
{yemek.map((item)=><p key={item.id}>{item.title}</p>)}

    </div>
    </>
  )
}

export default App;