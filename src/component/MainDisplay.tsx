import React, {useState} from 'react'
import {getMainConfig,getCardDescInfo} from './purecss/CuboidHandler'
import Cuboid from './purecss/Cuboid'

const MainDisplay:React.FC<{currIndex:number}> = ({currIndex}) => {
    const [mainconfig,setMainConfig]=useState(getMainConfig())

    const handleMouseClick:MouseEventHandler<HTMLDivElement> =()=>{
        setMainConfig(config=>{
            config['rotateX']=70
            return config
        })
    }

    return <Cuboid extraClass="paper" 
                front={()=>{
                    const cardInfo=getCardDescInfo(currIndex);
                    if(cardInfo===undefined)
                        return <></>
                    return <div className="ProjectDesc"> 
                        <h3>{cardInfo.title}</h3>
                        <p>{cardInfo.body}</p>
                        <h3 onClick={handleMouseClick} className="tech">TECHNOLOGY</h3>
                    </div>
                }} config={mainconfig}/>
}

export default MainDisplay
