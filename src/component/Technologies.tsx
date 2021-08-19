import React from 'react';
import {IconType} from 'react-icons';

interface TechnologyProps{
    icons:IconType[]
}

const Technologies:React.FC<TechnologyProps> = ({icons})=> {
    return <>
        {icons.map((Icon)=>{
                return <div className="innericonContainer">
                    <Icon className="reacticon threeD" />
                </div>
        })}
    </>
}

export default Technologies;
