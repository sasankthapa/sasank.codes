import React, {useEffect, useState} from 'react';
import '../scss/Writer.scss';

interface WriterProps{
    values:Array<string>;
    changes:boolean;
    timeout?:number;
}

const Writer:React.FC<WriterProps>=({values,changes,timeout})=>{
    const [currIndex,setCurrIndex]=useState<number>(0);
    const [current,setCurrent]=useState<string>(values[currIndex]);

    const currentCharacters:Array<string>=[];

    for(var i=0;i<current.length;i++){
        currentCharacters.push(current[i]);
    }

    useEffect(()=>{
        if(changes){
            setTimeout(()=>{
                setCurrent(values[currIndex]);
                setCurrIndex(currIndex+1)
            },timeout);
        }
    },[])

    return <div className="MainWriter">
        {currentCharacters.map((curr) => {
            return <span>{curr}</span>;
        })}
    </div>
}

export default Writer;
