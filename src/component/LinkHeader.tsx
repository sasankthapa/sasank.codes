import React, {useState} from 'react';
import {MouseEvent} from 'react';
import '../scss/LinkHeader.scss'

const LinkHeader:React.FC<{}> = () => {
    const [showH,setShow] = useState(false);
    const mouseEnterHandler=(e:MouseEvent)=>{
        setShow(true);
    }

    const mouseExitHandler=(e:MouseEvent)=>{
        setShow(false);
    }

    return <div className="maincontainer" onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}>
        <div>S</div> 
        <div>a</div> 
        <div>s</div> 
        {showH?<div>h</div>:''}
        <div>a</div> 
        <div>n</div> 
        <div>k</div> 
        <div> </div>
        <div>T</div>
        <div>h</div>
        <div>a</div>
        <div>p</div>
        <div>a</div> 
    </div>
}

export default LinkHeader
