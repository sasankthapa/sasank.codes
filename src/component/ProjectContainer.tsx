import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler} from 'react'
import Cuboid from './purecss/Cuboid'
import '../scss/Scene.scss'
import '../scss/ProjectContainer.scss'
import { getCardDescInfo, getMainConfig, getRandomConfigList } from './purecss/CuboidHandler'
import { SiPython, SiTensorflow } from 'react-icons/si';
import Technologies from './Technologies';

interface ProjectContainerProps{
    currIndex:number,
    setPauseAnim:(value:boolean)=>void,
    setCurrIndex:(value:number)=>void,
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex,setPauseAnim,setCurrIndex}) => {
    const [moving,setMoving]=useState<boolean>(false);
    const [clientX,setClientX]=useState(0)
    const [clientY,setClientY]=useState(0)

    const plane=useRef<HTMLDivElement>(null);

    const classesName=["scene"];

    const mouseEnterHandler:MouseEventHandler<HTMLDivElement>=()=>{
        console.log('enter')
        setPauseAnim(true);
    }

    const mouseMoveHandler:MouseEventHandler<HTMLDivElement> = (e) => {
        setClientX(e.clientX);
        setClientY(e.clientY);
    }

    const mouseExitHandler:MouseEventHandler<HTMLDivElement>=()=>{
        console.log('exit')
        setPauseAnim(false);
    }

    const touchHandler:TouchEventHandler<HTMLDivElement> = (e)=>{
        setClientX(e.targetTouches.item(0).clientX)
        if(clientY===0){
            setClientY(e.targetTouches.item(0).clientY)
        }else{
            setClientY(e.targetTouches.item(0).clientY)
        }
    }

    useEffect(()=>{
        if(plane.current){
            console.log(plane.current.offsetTop)
            if(plane.current.offsetTop!==clientX){
                var width=plane.current.offsetWidth
                var rotateY=((clientX-width/2)/width)*30.0;
                plane.current.style.transform=`rotateX(-20deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`;
            }
        }
    })

    var rotateX=0;
    if(plane.current){
        var height=plane.current.offsetHeight;
        rotateX=((clientY-height/2)/height)*90.0;
    }

    const [mainconfig1,mainconfig2]=getMainConfig()
    const randomConfList=getRandomConfigList(3);
    
    return <div draggable={false} className={classesName.join(' ')}
                onMouseMove={mouseMoveHandler}
                onTouchStart={touchHandler}
                onTouchMove={touchHandler}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}>
        <div className="plane" ref={plane}>
            {randomConfList.map((config,index)=>{
                if(index===currIndex){
                    return <Cuboid extraClass="paper" front={()=>{
                        const cardInfo=getCardDescInfo(currIndex);
                        if(cardInfo===undefined)
                            return <></>
                        return <div className="ProjectDesc"> 
                            <h3>{cardInfo.title}</h3>
                            <p>{cardInfo.body}</p>
                        </div>
                    }} config={mainconfig1}/>
                }
                if(index===(currIndex+1)%3){
                    return <Cuboid extraClass="paper" front={()=><Technologies icons={[SiPython,SiTensorflow]} />} config={mainconfig2}/>
                }
                return <Cuboid config={config} extraClass="paper"/>
            })}
        </div>
        <div className="left UIbutton" onClick={()=>{setCurrIndex((currIndex===0?currIndex+2:currIndex-1))}} ></div>
        <div className="right UIbutton" onClick={()=>{setCurrIndex((currIndex+1)%3)}}></div>
    </div>
}


export default ProjectContainer;
