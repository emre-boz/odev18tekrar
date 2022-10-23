import { useState } from "react"

function Bastaci(){
    //substring
const [more,setMore]=useState(false);
const yazi="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quo quia laudantium quisquam ab illo aliquid quidem consequuntur, officiis est possimus sit, earum ut blanditiis minus cumque enim neque reprehenderit!";

    return(
        <>
        <p>
            {more?yazi:`${yazi.substring(0,10)}...`}
        </p>

        <p>
            {more?yazi:`${yazi.substring(0,10)}...`}
            <button onClick={()=>{setMore(!more)}}>
                {more?"lessingen":"give me more"}
            </button>
        </p>

        </>
    )
}

export default Bastaci;