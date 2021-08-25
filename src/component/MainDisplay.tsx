import React, {useState} from 'react'
import {getMainConfig,getCardDescInfo,getRandomConfig,getIconsWithInfo} from './purecss/CuboidHandler'
import Cuboid from './purecss/Cuboid'

interface MainDisplayProps{
    currIndex:number;
    isMain:boolean;
}

const MainDisplay:React.FC<MainDisplayProps> = ({currIndex,isMain}) => {
    const [showIcons,setShowIcons]=useState(false)
    const [mainconfig,setMainConfig]=useState(getMainConfig())

    const handleMouseClick:MouseEventHandler<HTMLDivElement> =(val:boolean)=>{
        if(val){
            setShowIcons(true)
            return setMainConfig(config=>{
                config['rotateX']=70
                return config
            })
        }
        setShowIcons(false)
        return setMainConfig(getMainConfig())
    }

    return <Cuboid extraClass={showIcons?"frontblack paper":"paper"} 
                front={isMain?()=>{
                    const cardInfo=getCardDescInfo(currIndex);
                    if(cardInfo===undefined)
                        return <></>
                    return <div className="ProjectDesc"> 
                        <h3>{cardInfo.title}</h3>
                        <p>{cardInfo.body}</p>
                        <h3 onClick={()=>handleMouseClick(true)} className="tech">TECHNOLOGY</h3>
                        <div className="iconsContainer">
                            {getIconsWithInfo(currIndex).map(({Icon,info}:iconObject,index)=>{
                                    return <div key={index+'iconsContainer'} className="">
                                        <Icon className="" />
                                        {info.forEach((info)=>{
                                            return <p>{info}</p>
                                        })}
                                    </div>
                            })}
                        </div>
                    </div>}:()=><></>
                } config={isMain?mainconfig:getRandomConfig()}/>
}

export default MainDisplay
