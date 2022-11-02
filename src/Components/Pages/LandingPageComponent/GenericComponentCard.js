import React, { useState } from 'react'
import './GenericComponentCard.css'


function GenericComponentCard(props) {
    const [count, setCount] = useState(0);
    const setCountHandler = () => {
        console.log("component");
        console.log(props.valueTop)
        if (count <= props.valueTop) {
            console.log("scrolled");
            setTimeout(() => { setCount(count + 1) }, 100);
        }
        else {
            return;
        }
    }
    return (
        <div className='GCardOuterContainer'  >
            <div className="topRow" onScroll={setCountHandler}>{props.valueTop}</div>
            <div className="bottomRow">{props.valueBottom}</div>
        </div>

    )
}

export default GenericComponentCard
