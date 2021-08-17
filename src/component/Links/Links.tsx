import React from 'react';
import '../../scss/Links.scss'
import Image from '../Image';

interface LinkProps{
    name:string,
    href:string,
    extraClasses:string,
    image:string
}

const Link:React.FC<LinkProps>=({name,href,extraClasses,image})=>{
        return <div className={extraClasses+" LinkItem"}>
            <a key={name} href={href}>
                <Image image={image} alt={name+' logo'} width={32} height={32}/>    
            </a>
        </div>
}

export default Link;
