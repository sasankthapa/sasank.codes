import React,{useState,useEffect } from 'react';
import Writer from './Writer';
import ProjectContainer from './ProjectContainer'
import '../scss/Body.scss';
import {ReactElement} from 'react';

const BodyComponent:React.FC<{}> = () => {

    const [currIndex,setCurrIndex]=useState<number>(0);
    const colorClasses=['coralBG','sblueBG','grayBG'];
    const [pauseAnim,setPauseAnim]=useState<boolean>(false);

    useEffect(()=>{
        if(!pauseAnim){
            setCurrIndex((prev)=>(prev+1)%3);
    }},[pauseAnim]);

    const createOverFlowContainer = (element:ReactElement) => {
        return <div className={"overflowH Projects "+colorClasses[currIndex]}>
            {element}
        </div>
    }

    return <>
        <Writer currIndex={currIndex} extraClass={"desc animateAfter "+colorClasses[currIndex]} values={
            ['Aspiring ML Engineer',
            'Frontend Engineer',
            'Fullstack Developer']
        }/>
        {createOverFlowContainer(<ProjectContainer currIndex={currIndex} setPauseAnim={setPauseAnim}/>)}
    </>
}

export default BodyComponent
