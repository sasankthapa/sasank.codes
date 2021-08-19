import React,{useState,useEffect, MouseEvent} from 'react';
import Writer from './Writer';
import ProjectContainer from './ProjectContainer'
import '../scss/Body.scss';
import {ReactElement} from 'react';

const BodyComponent:React.FC<{}> = () => {

    const [currIndex,setCurrIndex]=useState<number>(0);
    const [mouseIn,setMouseIn]=useState<boolean>(true);
    const colorClasses=['coralBG','sblueBG','grayBG'];

    useEffect(()=>{
        setTimeout(()=>{
            if(currIndex <3 && !mouseIn){
                setCurrIndex((prev)=>(prev+1)%3);
        }},3000);
    },[currIndex])

    const createOverFlowContainer = (element:ReactElement) => {
        return <div className={"overflowH animateAfter Projects "+colorClasses[currIndex]}>
            {element}
        </div>
    }

    const mouseEnterHandler = () => {
        setMouseIn(true);
    }

    const mouseExitHandler = () => {
        setMouseIn(false);

    }
    return <>
        <Writer currIndex={currIndex} extraClass={"desc animateAfter "+colorClasses[currIndex]} values={
            ['Aspiring ML Engineer',
            'Frontend Engineer',
            'Fullstack Developer']
        }/>
        {createOverFlowContainer(<ProjectContainer currIndex={currIndex}/>)}
    </>
}

export default BodyComponent
