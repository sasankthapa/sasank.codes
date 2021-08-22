import React,{MouseEventHandler, useRef, useEffect, useState, TouchEventHandler} from 'react'
import Cuboid from './purecss/Cuboid'
import '../scss/ProjectContainer.scss'
import '../scss/Scene.scss'
import { FaNodeJs } from 'react-icons/fa';
import { SiPython, SiTensorflow } from 'react-icons/si';
import Technologies from './Technologies';
import {GiAirplaneArrival} from 'react-icons/gi';

interface ProjectContainerProps{
    currIndex:number,
}

const ProjectContainer:React.FC<ProjectContainerProps> = ({currIndex}) => {
    const [clientX,setClientX]=useState(0)
    const [clientY,setClientY]=useState(0)
    const [rateX,setRateX]=useState(0);
    const [rateY,setRateY]=useState(0);

    const scene=useRef<HTMLDivElement>(null);

    const classesName=["scene"];

    const mouseMoveHandler:MouseEventHandler<HTMLDivElement> = (e) => {
        setClientX(e.clientX);
        setClientY(e.clientY);
        setRateX(e.movementX);
        setRateY(e.movementY);
    }

    const touchHandler:TouchEventHandler<HTMLDivElement> = (e)=>{
        setClientX(e.targetTouches.item(0).clientX)
        if(clientY===0){
            setClientY(e.targetTouches.item(0).clientY)
        }else{
            setClientY(e.targetTouches.item(0).clientY)
        }
    }

    var rotateX=0;
    var rotateY=0;
    if(scene.current){
        var width=scene.current.offsetWidth
        var height=scene.current.offsetHeight
        rotateX=((clientX-scene.current.offsetLeft-width/2)/width)*30.0;
        rotateY=((clientY-scene.current.offsetTop-height/2)/height)*30.0;
    }

    return <div draggable={false} className={classesName.join(' ')}
                onMouseMove={mouseMoveHandler}
                onTouchStart={touchHandler}
                onTouchMove={touchHandler}>
        <div ref={scene} className="plane">
            <Cuboid width={30} height={30} depth={3} Front={()=><h3>Hello</h3>}
                rotateX={0} rotateY={0} rotateZ={0} x={50} y={50} z={0}/>
        </div>
    </div>
}


export default ProjectContainer;
