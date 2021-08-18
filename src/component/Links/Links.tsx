import React from 'react';
import '../../scss/Links.scss'

interface LinkProps{
    name:string,
    href:string,
    extraClasses:string,
}

const Link:React.FC<LinkProps>=({name,href,extraClasses})=>{
        return <div className={extraClasses+" LinkItem"}>
            <a key={name} href={href}>
                {name}
            </a>
        </div>
}

export default Link;
