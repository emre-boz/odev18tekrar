function Refresh({refresh}){
    return(
        <>
        <h1>No Country for old man</h1>
        <button onClick={()=>{refresh()}}>Refresh</button>
        </>
    )
}

export default Refresh;