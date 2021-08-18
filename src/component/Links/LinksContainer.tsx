import React from 'react';
import Link from './Links';

interface LinkConfig{
    name:string,
    href:string,
    extraClasses:string,
    image?:string
}

const LinksContainer:React.FC<{}> = () =>{

    const linkItems=[
        {
            name:'GitHub',
            href:'http://github.com/sasankthapa',
            extraClasses:'GitHub ',
        },
        {
            name:'Linkedin',
            href:'https://www.linkedin.com/in/sasank-t-b815b1104/',
            extraClasses:'Linkedin ',
        },
        {
            name:'Blog',
            href:'https://sasank.codes/blog',
            extraClasses:'Blog ',
        }
    ]

    return <div className="LinksContainer">
        {linkItems.map((linkItem)=>{
            return <Link name={linkItem.name}
                    href={linkItem.href}
                    extraClasses={linkItem.extraClasses}
            />
        })}
    </div>

}

export default LinksContainer;
