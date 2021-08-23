import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler} from 'react'
import Cuboid from './purecss/Cuboid'
import '../scss/ProjectContainer.scss'
import '../scss/Scene.scss'
import { getMainConfig, getRandomConfigList } from './purecss/CuboidHandler'
import { FaNodeJs } from 'react-icons/fa';
import { SiPython, SiTensorflow } from 'react-icons/si';
import Technologies from './Technologies';
import {GiAirplaneArrival} from 'react-icons/gi';

interface ProjectContainerProps{
    currIndex:number,
    setPauseAnim:(value:boolean)=>void,
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex,setPauseAnim}) => {
    const [clientX,setClientX]=useState(0)
    const [clientY,setClientY]=useState(0)
    const [rateX,setRateX]=useState(0);
    const [rateY,setRateY]=useState(0);

    const scene=useRef<HTMLDivElement>(null);
    const plane=useRef<HTMLDivElement>(null);

    const classesName=["scene"];

    const mouseEnterHandler:MouseEventHandler<HTMLDivElement>=()=>{
        console.log('enter')
        setPauseAnim(true);
    }

    const mouseMoveHandler:MouseEventHandler<HTMLDivElement> = (e) => {
        setClientX(e.clientX);
        setClientY(e.clientY);
        setRateX(e.movementX);
        setRateY(e.movementY);
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
            var width=plane.current.offsetWidth
            var rotateY=((clientX-width/2)/width)*30.0;
            var translateX=currIndex===0?0:currIndex===1?100:200;
            plane.current.style.transform=`rotateX(-20deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`;
        }
    })

    var rotateX=0;
    if(plane.current){
        var height=plane.current.offsetHeight;
        rotateX=((clientY-height/2)/height)*90.0;
    }

    const eachStyle=(transform:number)=>{
        return {
            transition:'all 1s ease',
            transform:`transform(-50%,50%) translate3d(0,0,${transform}px)`,
            transformOrigin:'50% 50%',
            width:'100%',
            height:'100%',
            position:'absolute' as 'absolute',
            transformStyle:'preserve-3d' as 'preserve-3d',
        }
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
                    return <Cuboid extraClass="paper" front={()=><h3>Hello</h3>} config={mainconfig1}/>
                }
                if(index===(currIndex+1)%3){
                    return <Cuboid extraClass="paper" front={()=><h3>Hello</h3>} config={mainconfig2}/>
                }
                return <Cuboid config={config} extraClass=""/>
            })}
        </div>
    </div>
}


export default ProjectContainer;
