import React, {useEffect, useState} from 'react';
import Character from './Character';
import '../scss/Writer.scss';

interface WriterProps{
    values:Array<string>;
    changes:boolean;
    extraClass?:String;
    timeout?:number;
}

const Writer:React.FC<WriterProps>=({values,changes,extraClass,timeout})=>{
    const [currIndex,setCurrIndex]=useState<number>(0);

    const currentCharacters:Array<string>=[];

    const current=values[currIndex];

    for(var i=0;i < current.length;i++){
        currentCharacters.push(current[i]);
    }

    useEffect(()=>{
        if(!changes)
            return
        setTimeout(()=>{
            if(currIndex <values.length){
                setCurrIndex((prev)=>(prev+1)%values.length);
        }},timeout);
    },[currIndex])

    return <div className={extraClass+" MainWriter"}>
        {currentCharacters.map((curr,index) => {
            return <Character key={currIndex+curr+index} character={curr===' '?'':curr} />;
        })}
    </div>
}

export default Writer;
