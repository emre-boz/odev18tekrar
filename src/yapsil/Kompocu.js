import { useState } from "react";

function Kompocu({item,ilgimiCekmiyi}){

const [devami,setDevami]=useState(false);

    return(
        <>
        
        <div>
            <h3>{item.name}</h3>
            <p>
                {devami?item.info:`${item.info.substring(0,50)}...`}

              {/* {readMore ? item.info : `${item.info.substring(0, 200)}...`} */}
                

                <button onClick={()=>{setDevami(!devami)}}>
                    {devami?"azi":"devamını okut"}</button>
            </p>
            <button onClick={()=>{ilgimiCekmiyi(item)}}>ilgimi Çekmiyi</button>
        </div>
        </>
    )
}

export default Kompocu;