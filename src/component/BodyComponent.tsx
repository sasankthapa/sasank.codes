import React,{useState, useEffect } from 'react';
import Writer from './Writer';
import ProjectContainer from './ProjectContainer'
import '../scss/Body.scss';
import {ReactElement} from 'react';
import {getConfigs} from './purecss/CuboidHandler';

const BodyComponent:React.FC<{}> = () => {

    const [currIndex,setCurrIndex]=useState<number>(0);
    const colorClasses=['sblueBG','grayBG','coralBG'];
    const [,setPauseAnim]=useState<boolean>(false);

    useEffect(()=>{
        setInterval(()=>{
            setPauseAnim(prev=>{
                if(prev!==true){
                    setCurrIndex(prev=>(prev+1)%3)
                }
                return prev
            })
        },8000)
    },[])

    const createOverFlowContainer = (element:ReactElement) => {
        return <div className={"overflowH animateAfter ProjectsGrid Projects "+colorClasses[currIndex]}>
            {element}
        </div>
    }

    const randomConfList=getConfigs();

    return <>
        <Writer currIndex={currIndex} extraClass={"desc animateAfter "+colorClasses[currIndex]} values={
            ['Fullstack Developer',
            'Frontend Engineer',
            'Aspiring ML Engineer']
        }/>
        {createOverFlowContainer(<ProjectContainer extraClass={colorClasses[currIndex]} randomConfList={randomConfList} currIndex={currIndex} setPauseAnim={setPauseAnim} setCurrIndex={setCurrIndex}/>)}
        <div className=" background_threeD ProjectsGrid"></div>
    </>
}

export default BodyComponent
