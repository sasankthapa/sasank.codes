import React, {MouseEventHandler} from 'react';
import {IconType} from 'react-icons';

interface TechnologyProps{
    icons:IconType[]
}

const Technologies:React.FC<TechnologyProps> = ({icons})=> {
    
    const getRandInt=(min:number,max:number)=>{
        var rand=Math.random()
        return (min+rand*(max-min))
    }

    return <div className="cuboid IconPlane">
        {icons.map((Icon,index)=>{
            return <div key={index+'icon'} className="IconHolder" style={{
                    transform:`translate3d(${getRandInt(30,60)}vmin,${getRandInt(1,20)}vmin,${getRandInt(30,-60)}vmin)`}}>
                <Icon className="iconstars"/>
                </div>
        })}
    </div>
}

export default Technologies;
