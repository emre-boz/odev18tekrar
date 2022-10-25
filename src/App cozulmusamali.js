import { useState } from "react";
import reviews from "./supriseMeData";

function App(){
  const data=reviews;

  const [veri,setVeri]=useState(data);

const [sayi,setSayi]=useState(0);

//console.log(veri.length);

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

console.log("sayi",sayi);

function rastgeleSayi(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

//BURAYA BİR CHECKER SAYİ ARTI 1 OLUNCA LENGTHİ GEÇMESİN BİR DE COPY Yİ TEKRAR KOPYALAYABİLİRSİN BURAYA 

//const supriser=rastgeleSayi(0,(veri.length-1));

const supriser=()=>{
 return rastgeleSayi(0,(veri.length));
}



console.log("supriser",supriser);
console.log("sayi supriser sonrasi",sayi);
// if(supriser===sayi){
//   return sayi+1;
// }







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
     <button onClick={()=>{setSayi(supriser())}}>bana süpriz yap</button>
   
   
    </div>




 



  
    </>
  )
}

export default App;