import React from 'react';

interface CharacterProps{
    character:string,
    show?:boolean
}

const Character:React.FC<CharacterProps>=({character,show})=>{
    const classNameList=['Character']
    if(show) 
        classNameList.push('show')
    return <div className={classNameList.join(' ')}>
        {character}
    </div>
}

export default Character;
