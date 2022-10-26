import { useState, useRef, useEffect } from "react";
import questions from "./dataSorular";

function App(){


const [veriler,setVeri]=useState(questions);
const [goster,setGoster]=useState(false,[]);



// const cevat=(patates)=>{
//   if(patates.id===item.id){
//     return <p>{item.info}</p>
//   }
// }
console.log("ilk baslangic",goster);
function listeList(delir){ 
  setGoster(!goster);
  console.log("ilk değişiklik",goster);
  const yeniListe= veriler.map((item) => {
    if (item.id === delir.id) {
      return { ...item, gostert:goster };
    } else {
      return item;
    }
  });
  setVeri(yeniListe);
}
console.log("after fonk",goster);


return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    <div>
    {veriler.map((item)=><div key={item.id}>
     <p>{item.title}</p>
     <button onClick={()=>listeList(item)}>cevup</button>
     {/* <p>{veriler[0].info}</p> */}
     <p>{item.gostert?`${item.info}`:""}</p>
    
     </div>)}
    </div>

<div>
  
</div>
    </>
  )
}

export default App;