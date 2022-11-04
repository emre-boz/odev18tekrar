import { useEffect } from "react";
import { useState } from "react";
import Kompo from "./Kompo";

function App(){
 const [loading,setLoading]=useState(true);
  const [data,setData]=useState([]);
const [moreno,setMoreno]=useState(0)


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

  // beasts.indexOf('bison')
  return (
    <>
    <h1>ben appdullah size nasıl yardımcı olabilirim</h1>
    {data&&data.map((item)=><button onClick={()=>setMoreno(data.indexOf(item))} key={item.id}>{item.company}</button>)}
      <p>{data&&data[moreno].duties}</p> 
    </>
    )
}

export default App;