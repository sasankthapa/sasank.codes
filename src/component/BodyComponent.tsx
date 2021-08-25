import React,{useState, useCallback } from 'react';
import Writer from './Writer';
import ProjectContainer from './ProjectContainer'
import '../scss/Body.scss';
import {ReactElement} from 'react';
import {getRandomConfigList} from './purecss/CuboidHandler';

const BodyComponent:React.FC<{}> = () => {

    const [currIndex,setCurrIndex]=useState<number>(0);
    const colorClasses=['coralBG','sblueBG','grayBG'];
    const [pauseAnim,setPauseAnim]=useState<boolean>(false);

    const isPaused = useCallback(()=>{
        return pauseAnim
    },[pauseAnim])

    function x() {
        const animationPromise:Promise<()=>void> = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(isPaused())
                    return
                resolve(()=>setCurrIndex(prev=>(prev+1)%3))
            },3000)
        })
        return animationPromise
    }

    const animate=()=>{
        x().then((callback)=>{
            console.log(pauseAnim)
            if(!pauseAnim){
                callback();
                animate();
            }
        })
    }

    const createOverFlowContainer = (element:ReactElement) => {
        return <div className={"overflowH animateAfter Projects "+colorClasses[currIndex]}>
            {element}
        </div>
    }

    const randomConfList=getRandomConfigList(3);

    return <>
        <Writer currIndex={currIndex} extraClass={"desc animateAfter "+colorClasses[currIndex]} values={
            ['Aspiring ML Engineer',
            'Frontend Engineer',
            'Fullstack Developer']
        }/>
        {createOverFlowContainer(<ProjectContainer randomConfList={randomConfList} currIndex={currIndex} setPauseAnim={setPauseAnim} setCurrIndex={setCurrIndex}/>)}
    </>
}

export default BodyComponent
