import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler, MouseEvent} from 'react'
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
            console.log('11')
            plane.current.animate([{
                    transform:`rotateX(-${rotateX}deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`
                },{
                    transform:`rotateX(-${rotateX}deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`
            }])
            //plane.current.style.transform=`rotateX(-${rotateX}deg) rotateY(${rotateY}deg) rotateX(90deg) translate3d(-0%,0,0)`;
        }
    },[clientX,clientY])

    const mouseExitHandler:MouseEventHandler<HTMLDivElement>=()=>{
        setPauseAnim(false);
    }

    function mouseMoveHandler(ev:MouseEvent){
        setClientX(ev.clientX);
        setClientY(ev.clientY);
        ev.target.removeEventListener('mousemove',mouseMoveHandler)
        if(plane.current)
            plane.current.addEventListener('animationend',function(ev){
                if(this===plane.current){
                    scene.current.addEventListener('mousemove',mouseMoveHandler,{capture:true})
                    this.removeEventListener('animationend',this)
                }
            })
    }

    useEffect(()=>{
        if(scene.current){
            console.log('here')
            scene.current.addEventListener('mousemove',mouseMoveHandler,{capture:true})
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
                <div className="plane" ref={plane}>
                    {randomConfList.map((config,index)=>{
                        if(index===currIndex){
                            return <MainDisplay key={index+'Cuboid'} currIndex={currIndex}/>
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
