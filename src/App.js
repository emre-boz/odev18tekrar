import { useState, useRef, useEffect } from "react";
import questions from "./dataSorular";

function App(){


const [veriler,setVeri]=useState(questions);




// const cevat=(patates)=>{
//   if(patates.id===item.id){
//     return <p>{item.info}</p>
//   }
// }



function listeList(delir){ 

  const yeniListe= veriler.map((item) => {
    if (item.id === delir.id) {
      return { ...item, gostert:!item.gostert };
    } else {
      return item;
    }
  });
  setVeri(yeniListe);
}





return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    <div>
    {veriler.map((item)=><div key={item.id}>
     <p>{item.title}</p>
     <button onClick={()=>listeList(item)}>cevup</button>
    
     <p>{item.gostert?`${item.info}`:""}</p>
    
     </div>)}
    </div>

<div>
  
</div>
    </>
  )
}

export default App;