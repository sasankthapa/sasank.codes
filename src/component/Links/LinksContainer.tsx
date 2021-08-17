import React from 'react';
import '../../scss/LinksContainer.scss';
import GitHubImage from '../../assets/GitHub-Mark-Light-64px.png'
import LinkedinImage from '../../assets/LI-In-Bug.png'
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
            image:GitHubImage
        },
        {
            name:'Linkedin',
            href:'https://www.linkedin.com/in/sasank-t-b815b1104/',
            extraClasses:'Linkedin ',
            image:LinkedinImage
        },
    ]

    return <div className="LinksContainer">
        {linkItems.map((linkItem)=>{
            return <Link name={linkItem.name}
                    href={linkItem.href}
                    extraClasses={linkItem.extraClasses}
                    image={linkItem.image}
            />
        })}
    </div>

}

export default LinksContainer;
