import React from 'react';
import Link from './Links';

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
            name:'Projects',
            href:'https://sasank.codes/projects',
            extraClasses:'Blog Disabled ',
        }
    ]

    return <div className="LinksContainer">
        {linkItems.map((linkItem)=>{
            return <Link 
                    key={linkItem.name}
                    name={linkItem.name}
                    href={linkItem.href}
                    extraClasses={linkItem.extraClasses}
            />
        })}
    </div>

}

export default LinksContainer;
