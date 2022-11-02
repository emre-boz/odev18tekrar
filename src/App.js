import { useState } from "react";

import menu from "./yemekler";

function App(){

const [yemek,setYemek]=useState(menu);

const kahvaltiliklar=()=>{
  const yeniListe=menu.filter((item)=>{
    return item.category==="breakfast";
  });
  setYemek(yeniListe);
}

const lunch=()=>{
  const yeniListe=menu.filter((item)=>{
    return item.category==="lunch";
  });
  setYemek(yeniListe);
}
// {TEKRAR.filter((aramazzu)=>{
//   if(kim==""){
//       return aramazzu;
//   }else if(aramazzu.first_name.includes(kim)){
//       return aramazzu;

//   }
const hepsi=()=>{
  const yeniListe=menu.map((item)=>{
    return item;
  });
  setYemek(yeniListe);
}

  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    
    <div>
    <button onClick={()=>hepsi()}>hepisi</button>
<button onClick={()=>kahvaltiliklar()}>kahvaltiliklar</button>
<button onClick={()=>lunch()}>oglen</button>

{yemek&&yemek.map((item)=><p key={item.id}>{item.title}</p>)}

    </div>
    </>
  )
}

export default App;