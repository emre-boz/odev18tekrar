import { useState } from "react";
import reviews from "./data";

function App(){
  const veriler=reviews;
  const [data,setData]=useState(veriler);
  const [deger,setDeger]=useState(0);
console.log("deger",deger);
console.log("length",data.length);

const arttir=()=>{
if(deger==data.length-1){
  return deger=0;
}else{
  return deger+1;
}
}
console.log("fonk sonrası deger",deger);

  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    {data.map((item,index)=><p>{item.name}</p>)}


    <button>geri</button>{data[deger].name}<button onClick={()=>setDeger(arttir)}>ileri</button>
    </>
  )
}

export default App;