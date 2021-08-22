import React, {MouseEventHandler} from 'react';
import {IconType} from 'react-icons';

interface TechnologyProps{
    icons:IconType[]
}

const Technologies:React.FC<TechnologyProps> = ({icons})=> {
    
    const handleMouseMove:MouseEventHandler<HTMLDivElement>=(e)=>{
        console.log(e);
    }

    return <div onMouseMove={handleMouseMove} className="threeD outericonContainer">
        {icons.map((Icon)=>{
            return <Icon className="reacticon"/>
        })}
    </div>
}

export default Technologies;
