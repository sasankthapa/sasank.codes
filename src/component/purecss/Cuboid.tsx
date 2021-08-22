import React from 'react';

interface CuboidComponentProps{
    width:number,
    height:number,
    depth:number,
    Front:React.ReactNode; 
}

const CuboidComponent:React.FC<CuboidComponentProps> =({width,height,depth,Front})=>{
    const baseStyles={
        transformOrigin:'50% 50%',
        position:'absolute',
        top:'50%',
        left:'50%'
    }
    const frontStyle={
        height:`${height}vmin`,
        width:`100%`,
        transform: `translate(-50%,-50%) rotateX(-90deg) translate3d(0,0,${depth/2}vmin)`
    }
    const backStyle={
        height:`${height}vmin`,
        width:`100%`,
        transform: `translate(-50%,-50%) rotateX(-90deg) rotateY(180deg) translate3d(0,0,${depth/2}vmin)`
    }
    const leftStyle={
        height:`${height}vmin`,
        width:`${depth}vmin`,
        transform:`translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0,0,${width/2}vmin)`
    }
    const rightStyle={
        height:`${height}vmin`,
        width:`${depth}vmin`,
        transform:`translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0,${width/2}vmin)`
    }
    const upStyle={
        height:`${depth}vmin`,
        width:`${width}vmin`,
        transform:`translate(-50%,-50%) translate3d(0,0,${height/2}vmin)`
    }
    const downStyle={
        height:`${depth}vmin`,
        width:`${width}vmin`,
        transform:`translate(-50%,-50%) translate3d(0,0,-${height/2}vmin) rotateX(180deg)`
    }

    return <div className="cuboid" style={{width:`${width}vmin`,height:`${depth}vmin`}}>
        <div style={{...baseStyles,...frontStyle}} >
            <Front />
        </div>
        <div style={{...baseStyles,...backStyle}} >
        </div>
        <div style={{...baseStyles,...leftStyle}} >
        </div>
        <div style={{...baseStyles,...rightStyle}} >
        </div>
        <div style={{...baseStyles,...upStyle}} >
        </div>
        <div style={{...baseStyles,...downStyle}} >
        </div>
    </div>
}

export default CuboidComponent;
