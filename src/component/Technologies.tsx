import React, {MouseEventHandler, useEffect, useState} from 'react';
import {IconType} from 'react-icons';

interface TechnologyProps{
    icons:IconType[]
}

const Technologies:React.FC<TechnologyProps> = ({icons})=> {

    const getRandInt=(min:number,max:number)=>{
        var rand=Math.random()
        return (min+rand*(max-min))
    }

    const genStarsRandom=(i:number)=>{
        const starsRandom=[];
        for(var k=0;k < i;k++){
            starsRandom.push({x: getRandInt(0,200) , y:getRandInt(0,75),z:getRandInt(-30,30)})
        }
        return starsRandom
    }

    const [locations,]= useState(genStarsRandom(15))
    
    return <div className="IconPlane">
        {icons.map((Icon,index)=>{
            return <div key={index+'icon'} className="IconHolder" style={{
                    transform:`translate(-50%,-50%) translate3d(${locations[index].x}vmin,${locations[index].y}vmin,${locations[index].z}vmin)`}}>
                    <Icon className="iconstars"/>
                </div>
        })}
    </div>
}

export default Technologies;
