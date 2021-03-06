import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler } from 'react'
import '../scss/Scene.scss'
import '../scss/ProjectContainer.scss'
import { getAllIcons } from './purecss/CuboidHandler'
import Technologies from './Technologies';
import MainDisplay from './MainDisplay';

interface ProjectContainerProps{
    currIndex:number,
    setPauseAnim:(value:boolean)=>void,
    setCurrIndex:(value:number)=>void,
    randomConfList:any[],
    extraClass:string
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex,setPauseAnim,setCurrIndex, randomConfList,extraClass}) => {
    const [clientX,setClientX]=useState<number>(0);
    const [clientY,setClientY]=useState<number>(0);

    const scene=useRef<HTMLDivElement>(null);
    const plane=useRef<HTMLDivElement>(null);

    const mouseEnterHandler:MouseEventHandler<HTMLDivElement>=()=>{
        setPauseAnim(true);
    }

    useEffect(()=>{
        if(scene.current){
            var rotateX=((clientY-scene.current.offsetTop)/scene.current.offsetHeight)*10;
            var rotateY=((clientX-scene.current.offsetWidth/2)/(scene.current.offsetWidth/2))*20;
            var translateZ=window.innerWidth < 600?45:20
            if(plane.current) plane.current.style.transform=`rotateX(-${rotateX}deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,-${translateZ}vmin)`;
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
        console.log(e)
        //TODO: HANDLE TOUCH
    }
    
    return <div ref={scene} draggable={false} className={"scene passthrough "+extraClass}
                onTouchStart={touchHandler}
                onTouchMove={touchHandler}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}>
                <div className="plane passthrough" ref={plane}>
                    {randomConfList.map((config,index)=>{
                        return <MainDisplay config={config} currIndex={index} key={index+'Cuboid'} isMain={currIndex===index}/>
                    })}
                    <Technologies icons={getAllIcons()}/>
                </div>
        <div className={`left UIbutton buttonColor${currIndex}`} onClick={()=>{setCurrIndex((currIndex===0?currIndex+2:currIndex-1))}} ></div>
        <div className={`right UIbutton buttonColor${currIndex}`} onClick={()=>{setCurrIndex((currIndex+1)%3)}}></div>
    </div>
}


export default ProjectContainer;
