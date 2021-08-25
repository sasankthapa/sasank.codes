import React, {MouseEventHandler, useState} from 'react'
import {getMainConfig,getCardDescInfo,getRandomConfig,getIconsWithInfo} from './purecss/CuboidHandler'
import Cuboid from './purecss/Cuboid'

interface MainDisplayProps{
    currIndex:number;
    isMain:boolean;
}

const MainDisplay:React.FC<MainDisplayProps> = ({currIndex,isMain}) => {
    const [showIcons,setShowIcons]=useState(false)
    const [mainconfig,setMainConfig]=useState(getMainConfig())

    const handleMouseClick =(val:boolean)=>{
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

    return <Cuboid extraClass={showIcons?"paper bgBlack":"paper "} 
                front={isMain?()=>{
                    const cardInfo=getCardDescInfo(currIndex);
                    const iconsInfo=getIconsWithInfo(currIndex);
                    if(cardInfo===undefined || iconsInfo===undefined)
                        return <></>
                    return <div className="ProjectDesc"> 
                        <h3>{cardInfo.title}</h3>
                        <p>{cardInfo.body}</p>
                        <h3 onClick={()=>handleMouseClick(true)} className="tech">TECHNOLOGY</h3>
                        {showIcons?<h3 onClick={()=>handleMouseClick(false)} className="close">CLOSE</h3>:''}
                        <div className={showIcons?"iconsContainer show1":"iconsContainer"}>
                            {iconsInfo.map(({Icon,title,info})=>{
                                return <div className="iconholder">
                                    <Icon className="icon"/>
                                    <h3>{title}</h3>
                                    {info.map((text)=><p>{text}</p>)}
                                </div>
                            })}
                        </div>
                    </div>}:()=><></>
                } config={isMain?mainconfig:getRandomConfig()}/>
}

export default MainDisplay
