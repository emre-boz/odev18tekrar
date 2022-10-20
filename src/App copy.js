import { useEffect, useState } from "react";
import Kompoder1 from "./Kompoder";
import Refresh from "./Refresh";

function App(){

const [data,setData]=useState("");

//useefecte bir değişkene atasak setstateyi o değişkenle güncellesek şayet

c
useEffect(()=>{
  const comer=async()=>{
    const fetcher=await fetch("data.json");
    const fetherJson=await fetcher.json();
    setData(fetherJson);
  }
  comer();
},[]);



function notInterested(target){
const yeniListe= data.filter((item)=>item.id!==target.id);
setData(yeniListe);
}

function refresh(){
  const tekrar=data.map((item)=>{})
  setData();
}

if(data.length<1){
  return <Refresh refresh={refresh}/>
}

  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    <p>Loading...  data:...?"Loading"</p>
    <div>
      {data&&data.map((item)=><Kompoder1 key={item.id} item={item} notInterested={notInterested}/>)}
    </div>
    </>
  )
}

export default App;