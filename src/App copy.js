import { useState } from "react";
import reviews from "./supriseMeData";

function App(){
  const data=reviews;

  const [veri,setVeri]=useState(data);

  
  



function rastgeleSayi(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

const karistir=rastgeleSayi(1,4);

const supriser=rastgeleSayi(0,(veri.length-1));

const matmazel=()=>{
 return veri.filter((item)=>{
    return item.id===karistir; }).map((item)=><p key={item.id}>{item.name}{item.text}</p>)
}

const [kerim,kerimullah]=useState(null);



// function arttir(a){
// return a++;
// }
// function azalt(a){
//   return a--;
// }

// if(a<veri.length){
//   return a++;
// }
const [sayi,setSayi]=useState(0);

console.log(veri.length);
function right(deger){
      if(deger<(veri.length)-1){
        return deger+1;
      }else {
        return deger=0;
      }
}

function left(deger){
  if(deger<=0){
    return (veri.length)-1;
  }else {
    return deger-1;
  }
}



console.log(sayi);



  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    <div>
      {veri[0].name}
      {veri&&veri.map((item)=>{return <p key={item.id}>{item.name}{item.text}</p>})}
    </div>

    <div>
     <button onClick={()=>{setSayi(left)}}>geri</button> 
     {veri.length}
     <p style={{color:"red"}}>{veri[sayi].name}</p>

     <button onClick={()=>{setSayi(right)}}>ileri</button>
     <button onClick={()=>{setSayi(supriser)}}>bana süpriz yap</button>
   
   
    </div>

    <div>
     "ayrı kerim" {kerim}
      <button onClick={()=>{kerimullah(matmazel)}}>haydi bastır</button>
    </div>


 



  
    </>
  )
}

export default App;