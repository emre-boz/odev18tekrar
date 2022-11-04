import { useState } from "react";

function Kompo({item,moreno}){
    const [goster,setGoster]=useState(false);
    
    return(<>
    <button onClick={()=>setGoster(!goster)}>{item.company}</button>
    
    
    </>)
}

export default Kompo;