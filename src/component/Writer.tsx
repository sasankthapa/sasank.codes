import React from 'react';
import Character from './Character';
import '../scss/Writer.scss';

interface WriterProps{
    currIndex:number;
    values:Array<string>;
    extraClass?:String;
}

const Writer:React.FC<WriterProps>=({currIndex,values,extraClass})=>{

    const currentCharacters:Array<string>=[];

    const current=values[currIndex];

    for(var i=0;i < current.length;i++){
        currentCharacters.push(current[i]);
    }

    return <div className={"MainWriter "+extraClass}>
        {currentCharacters.map((curr,index) => {
            return <Character key={currIndex+curr+index} character={curr} />;
        })}
    </div>
}

export default Writer;
