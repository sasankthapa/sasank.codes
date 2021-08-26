import React, {useEffect, useState} from 'react'
import {getMainConfig,getCardDescInfo,getIconsWithInfo, config} from './purecss/CuboidHandler'
import Cuboid from './purecss/Cuboid'

interface MainDisplayProps{
    currIndex:number;
    isMain:boolean;
    config:config;
}

const MainDisplay:React.FC<MainDisplayProps> = ({currIndex,isMain,config}) => {
    const [showIcons,setShowIcons]=useState(false)
    const [mainconfig,setMainConfig]=useState(getMainConfig(window.innerWidth))

    const handleMouseClick =(val:boolean)=>{
        if(val){
            setShowIcons(true)
            return setMainConfig(config=>{
                config['rotateX']=80
                config['z']=-5
                return config
            })
        }
        setShowIcons(false)
        return setMainConfig(getMainConfig(window.innerWidth))
    }

    useEffect(()=>{
        setShowIcons(false)
        if(!isMain)
            setMainConfig(config)
        else
            setMainConfig(getMainConfig(window.innerWidth))
    },[isMain])

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setMainConfig(getMainConfig(window.innerWidth))
        })
    },[])

    return <Cuboid extraClass={showIcons?"paper bgBlack":"paper "} 
                front={()=>{
                    const cardInfo=getCardDescInfo(currIndex);
                    const iconsInfo=getIconsWithInfo(currIndex);
                    if(cardInfo===undefined || iconsInfo===undefined)
                        return <></>
                    return <div draggable={false} className="ProjectDesc"> 
                        <h3 className="Heading">{cardInfo.title}</h3>
                        {cardInfo.body.map((phrase)=>{
                            return <p key={phrase.slice(0,5)} className="body">{phrase}</p>
                        })}
                        {!showIcons?<h3 onClick={()=>handleMouseClick(true)} className="tech">TECHNOLOGIES</h3>:
                        <h3 onClick={()=>handleMouseClick(false)} className="close">CLOSE</h3>}
                        <div className={showIcons?"iconsContainer show1":"iconsContainer"}>
                            {iconsInfo.map(({Icon,title,info})=>{
                                return <div key={title} className="iconholder">
                                    <Icon className="icon"/>
                                    <h3>{title}</h3>
                                    {info.map((text)=><p>{text}</p>)}
                                </div>
                            })}
                        </div>
                    </div>}
                } config={isMain?mainconfig:config}/>
}

export default MainDisplay
