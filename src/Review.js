import { useState } from "react";

function Review({veri}){

const [index,setIndex]=useState(0);

    return (
        <>
        <h3>ben reviews</h3>
        <p style={{color:"blue"}}>{veri[index].name}</p>
        </>
    )
}

export default Review;