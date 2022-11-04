import { useEffect } from "react";
import { useState } from "react";
import Kompo from "./Kompo";

function App(){
 const [loading,setLoading]=useState(true);
  const [data,setData]=useState([]);

const [goster,setGoster]=useState(false);

  const veriCek=async()=>{
      const fetcher=await fetch('https://course-api.com/react-tabs-project');
      const jsonFive=await fetcher.json();
      setLoading(false);
      setData(jsonFive);
  }

  useEffect(()=>{
        veriCek();
  },[])

  if(loading){
      return <h1>loading..</h1>
  }


  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    {data&&data.map((item)=><div>
      <button onClick={()=>setGoster(!goster)}>{item.company}</button>
    <Kompo item={item} goster={goster}/>
      </div>)}
      <div></div>
    </>
  )
}

export default App;