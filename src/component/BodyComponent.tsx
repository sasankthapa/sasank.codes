import React,{useState,useEffect} from 'react';
import Writer from './Writer';
import '../scss/Body.scss';

const BodyComponent:React.FC<{}> = () => {

    const [currIndex,setCurrIndex]=useState<number>(0);
    const colorClasses=['',' gray',' blue'];

    useEffect(()=>{
        setTimeout(()=>{
            if(currIndex <3){
                setCurrIndex((prev)=>(prev+1)%3);
        }},6000);
    },[currIndex])

    console.log('ntoaheu')

    return <>
        <Writer currIndex={currIndex} extraClass={"desc"+colorClasses[currIndex]} values={
            ['Aspiring ML Engineer',
            'Frontend Engineer',
            'Fullstack Developer']
        }/>
    </>
}

export default BodyComponent
