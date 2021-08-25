import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler } from 'react'
import Cuboid from './purecss/Cuboid'
import '../scss/Scene.scss'
import '../scss/ProjectContainer.scss'
import { getAllIcons, getCardDescInfo, getMainConfig, getRandomConfigList } from './purecss/CuboidHandler'
import Technologies from './Technologies';
import MainDisplay from './MainDisplay';

interface ProjectContainerProps{
    currIndex:number,
    setPauseAnim:(value:boolean)=>void,
    setCurrIndex:(value:number)=>void,
    randomConfList:any[]
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex,setPauseAnim,setCurrIndex, randomConfList}) => {
    const [clientX,setClientX]=useState<number>(0);
    const [clientY,setClientY]=useState<number>(0);

    const scene=useRef<HTMLDivElement>(null);
    const plane=useRef<HTMLDivElement>(null);

    const classesName=["scene"];

    const mouseEnterHandler:MouseEventHandler<HTMLDivElement>=()=>{
        setPauseAnim(true);
    }

    useEffect(()=>{
        if(plane.current){
            var rotateX=((clientY-plane.current.offsetTop)/plane.current.offsetHeight)*20;
            var rotateY=((clientX/plane.current.offsetWidth)-0.5)*20;
            console.log(rotateX,rotateY)
            plane.current.style.transform=`rotateX(-${rotateX}deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`;
        }
    },[clientX,clientY])

    const mouseExitHandler:MouseEventHandler<HTMLDivElement>=()=>{
        setPauseAnim(false);
    }

    function mouseMoveHandler(this:HTMLDivElement,ev:MouseEvent){
        setClientX(ev.clientX);
        setClientY(ev.clientY);
        if(plane.current)
            plane.current.addEventListener('transitionend',function(){
                if(scene.current)
                    scene.current.addEventListener('mousemove',mouseMoveHandler,{once:true})
            },{once:true})
    }

    useEffect(()=>{
        if(scene.current){
            scene.current.addEventListener('mousemove',mouseMoveHandler,{once:true})
        }
    },[])

    const touchHandler:TouchEventHandler<HTMLDivElement> = (e)=>{
        //TODO: HANDLE TOUCH
    }
    
    return <div ref={scene} draggable={false} className={classesName.join(' ')}
                onTouchStart={touchHandler}
                onTouchMove={touchHandler}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}>
                <div className="plane passthrough" ref={plane}>
                    {randomConfList.map((_,index)=>{
                        return <MainDisplay currIndex={index} key={index+'Cuboid'} isMain={currIndex===index}/>
                    })}
                    <Technologies icons={getAllIcons()}/>
                </div>
        <div className="left UIbutton" onClick={()=>{setCurrIndex((currIndex===0?currIndex+2:currIndex-1))}} ></div>
        <div className="right UIbutton" onClick={()=>{setCurrIndex((currIndex+1)%3)}}></div>
    </div>
}


export default ProjectContainer;
