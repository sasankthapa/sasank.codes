import React from 'react';
import {IconType} from 'react-icons';

interface TechnologyProps{
    icons:IconType[]
}

const Technologies:React.FC<TechnologyProps> = ({icons})=> {
    return <>
        {icons.map((Icon)=>{
            return <div className="icon">
                <Icon className="reacticon"/>
            </div>
        })}
    </>
}

export default Technologies;
