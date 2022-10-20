import { useEffect, useState } from "react";
import Kompoder1 from "./Kompoder";
import Refresh from "./Refresh";

function App(){

const [loading,setLoading]=useState(true);
const [data,setData]=useState([]);

//useefecte bir değişkene atasak setstateyi o değişkenle güncellesek şayet

const comer=async()=>{
  const fetcher=await fetch("data.json");
  const fetherJson=await fetcher.json();
  setLoading(false);
  setData(fetherJson);
}


useEffect(()=>{
comer();
},[]);

if(loading){
  return <>Loading...</>
}



function notInterested(target){
const yeniListe= data.filter((item)=>item.id!==target.id);
setData(yeniListe);
}



if(data.length<1){
  return <Refresh refresh={comer}/>
}

  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    
    <div>
      {data&&data.map((item)=><Kompoder1 key={item.id} item={item} notInterested={notInterested}/>)}
    </div>
    </>
  )
}

export default App;