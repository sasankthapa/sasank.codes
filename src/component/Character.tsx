import React from 'react';

interface CharacterProps{
    character:string,
    show?:boolean
}

const Character:React.FC<CharacterProps>=({character,show})=>{
    const classNameList=['Character']
    if(show) 
        classNameList.push('show')
    return <span className={classNameList.join(' ')}>
        {character}
    </span>
}

export default Character;
