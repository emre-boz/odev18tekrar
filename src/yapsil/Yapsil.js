import { useEffect, useState } from "react";
import Bastaci from "./Bastaci";
import Kompocu from "./Kompocu";
import Loading from "./Loading";
import Yenileyen from "./Yenileyen";

function Yapsil(){

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

   

    const veriler=async()=>{
        const fetcher=await fetch("data.json");
        const fetherJson=await fetcher.json();
        setLoading(false);
        setData(fetherJson);
    }

    useEffect(()=>{
        veriler();

    },[])

    if(loading){
        return <Loading />
    }

    function ilgimiCekmiyi(tiklanan){
        const yeniListe=data.filter((item)=>{
            return item.id!==tiklanan.id;
        })

        setData(yeniListe);
    }
    
    function yenileyici(){
        veriler();
    }

    if(data.length===0){
        return <Yenileyen yenileyici={yenileyici} />
    }

    return(
        <>
        <h3>Merhaba ben yapsil siz sevenlerimle tekrar birlikteyiz</h3>
        <Bastaci />
        <div>
            {data&&data.map((item)=><Kompocu key={item.id} item={item} ilgimiCekmiyi={ilgimiCekmiyi}/>)}
        </div>
       
        </>
    )
}

export default Yapsil;