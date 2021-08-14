import React from 'react'

interface ImageProps {
    image:string,
    width:number,
    height:number,
    alt:string
}

const Image:React.FC<ImageProps> = ({image,width,height,alt}) =>{
    return <img src={image} alt={alt} width={width} height={height}/>

}

export default Image;
