import React from 'react';
import Image from './Image'
import '../scss/Links.scss'
import GitHubImage from '../assets/GitHub-Mark-Light-64px.png'
import LinkedinImage from '../assets/LI-In-Bug.png'

type LinkConfig={
    name:string,
    href:string,
    extraClasses:string,
    image?:string
}

const Links:React.FC<{}>=()=>{

    const createLinkItem=(config:LinkConfig)=>{
        return <a key={config.name} href={config.href}><div className={config.extraClasses+" LinkItem"}>
            {config.image!==undefined?
                <Image image={config.image} alt={config.name+' logo'} width={32} height={32}/>:''}
                <h3>{config.name}</h3>
        </div></a>
    }

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
        {
            name:'sasank.codes/app (Coming Soon)',
            href:'/',
            extraClasses:'Disabled ',
        }
    ]

    return <div className="LinksContainer">
        {linkItems.map((linkItem)=>{
            return createLinkItem(linkItem)
        })}
    </div>
}

export default Links;
