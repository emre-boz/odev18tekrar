function Kompoder1({item,notInterested}){
    return(
        <>
        <div>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>{item.info}</p>
            <button onClick={()=>notInterested(item)}>not interested</button>
        </div>
        </>
    )
}

export default Kompoder1;