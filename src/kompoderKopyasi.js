import { useState } from "react";

function Kompoder1({item,notInterested}){

    const [readMore, setReadMore] = useState(false);
    return(
        <>
        <div>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>
            {readMore ? item.info : `${item.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more okur'}
          </button>
            </p>

            <button onClick={()=>notInterested(item)}>not interested</button>
        </div>
        </>
    )
}

export default Kompoder1;