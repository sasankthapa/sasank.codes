import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler} from 'react'
import Cuboid from './purecss/Cuboid'
import '../scss/Scene.scss'
import '../scss/ProjectContainer.scss'
import { getAllIcons, getCardDescInfo, getMainConfig, getRandomConfigList } from './purecss/CuboidHandler'
import Technologies from './Technologies';

interface ProjectContainerProps{
    currIndex:number,
    setPauseAnim:(value:boolean)=>void,
    setCurrIndex:(value:number)=>void,
    randomConfList:any[]
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex,setPauseAnim,setCurrIndex, randomConfList}) => {
    const plane=useRef<HTMLDivElement>(null);

    const classesName=["scene"];

    const mouseEnterHandler:MouseEventHandler<HTMLDivElement>=()=>{
        setPauseAnim(true);
    }

    const mouseMoveHandler:MouseEventHandler<HTMLDivElement> = (e) => {
        if(plane.current){
            var rotateX=((e.clientY-plane.current.offsetTop)/plane.current.offsetHeight)*20;
            var rotateY=((e.clientX/plane.current.offsetWidth)-0.5)*20;
            plane.current.style.transform=`rotateX(-${rotateX}deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`;
        }
    }

    const mouseExitHandler:MouseEventHandler<HTMLDivElement>=()=>{
        setPauseAnim(false);
    }

    const touchHandler:TouchEventHandler<HTMLDivElement> = (e)=>{
        //TODO: HANDLE TOUCH
    }

    const mainconfig1=getMainConfig()
    
    return <div draggable={false} className={classesName.join(' ')}
                onMouseMove={mouseMoveHandler}
                onTouchStart={touchHandler}
                onTouchMove={touchHandler}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}>
                <div className="plane" ref={plane}>
                    {randomConfList.map((config,index)=>{
                        if(index===currIndex){
                            return <Cuboid key={index+'Cuboid'} extraClass="paper" front={()=>{
                                        const cardInfo=getCardDescInfo(currIndex);
                                        if(cardInfo===undefined)
                                            return <></>
                                        return <div className="ProjectDesc"> 
                                            <h3>{cardInfo.title}</h3>
                                            <p>{cardInfo.body}</p>
                                        </div>
                                    }} config={mainconfig1}/>
                        }
                        return <Cuboid key={index+'Cuboid'} config={config} extraClass="paper"/>
                    })}
                    <Technologies icons={getAllIcons()}/>
                </div>
        <div className="left UIbutton" onClick={()=>{setCurrIndex((currIndex===0?currIndex+2:currIndex-1))}} ></div>
        <div className="right UIbutton" onClick={()=>{setCurrIndex((currIndex+1)%3)}}></div>
    </div>
}


export default ProjectContainer;
