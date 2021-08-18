import React,{useState,useEffect} from 'react';
import Writer from './Writer';
import ProjectContainer from './ProjectContainer'
import '../scss/Body.scss';

const BodyComponent:React.FC<{}> = () => {

    const [currIndex,setCurrIndex]=useState<number>(0);
    const colorClasses=[' coral',' sblue',' gray'];

    useEffect(()=>{
        setTimeout(()=>{
            if(currIndex <3){
                setCurrIndex((prev)=>(prev+1)%3);
        }},6000);
    },[currIndex])

    console.log('ntoaheu')

    return <>
        <Writer currIndex={currIndex} extraClass={"desc"+colorClasses[currIndex]+"BG"} values={
            ['Aspiring ML Engineer',
            'Frontend Engineer',
            'Fullstack Developer']
        }/>
        <ProjectContainer extraclass={colorClasses[currIndex]}/>
    </>
}

export default BodyComponent
