import React from 'react';

interface CuboidComponentProps{
    width:number,
    height:number,
    depth:number,
    x:number,
    y:number,
    z:number,
    rotateX:number,
    rotateY:number,
    rotateZ:number,
    Front:()=>React.ReactNode; 
}

const CuboidComponent:React.FC<CuboidComponentProps> =({width,height,depth,x,y,z,Front,rotateX,rotateY,rotateZ})=>{
    const baseStyles={
        position:'absolute' as 'absolute',
        transformOrigin:'50% 50%',
        top:'50%',
        left:'50%'
    }
    const frontStyle={
        ...baseStyles,
        height:`${height}vmin`,
        width:`100%`,
        transform: `translate(-50%,-50%) rotateX(-90deg) translate3d(0,0,${depth/2}vmin)`
    }
    const backStyle={
        ...baseStyles,
        height:`${height}vmin`,
        width:`100%`,
        transform: `translate(-50%,-50%) rotateX(-90deg) rotateY(180deg) translate3d(0,0,${depth/2}vmin)`
    }
    const leftStyle={
        ...baseStyles,
        height:`${height}vmin`,
        width:`${depth}vmin`,
        transform:`translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0,0,${width/2}vmin)`
    }
    const rightStyle={
        ...baseStyles,
        height:`${height}vmin`,
        width:`${depth}vmin`,
        transform:`translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0,${width/2}vmin)`
    }
    const upStyle={
        ...baseStyles,
        height:`${depth}vmin`,
        width:`${width}vmin`,
        transform:`translate(-50%,-50%) translate3d(0,0,${height/2}vmin)`
    }
    const downStyle={
        ...baseStyles,
        height:`${depth}vmin`,
        width:`${width}vmin`,
        transform:`translate(-50%,-50%) translate3d(0,0,-${height/2}vmin) rotateX(180deg)`
    }

    return <div className="cuboid" style={{width:`${width}vmin`,height:`${depth}vmin`,
                    transform:`translate3d(${x}vmin,${y}vmin,${z}vmin) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`}}>
        <div style={{...frontStyle}} >
            {Front()}
        </div>
        <div style={{...backStyle}} >
        </div>
        <div style={{...leftStyle}} >
        </div>
        <div style={{...rightStyle}} >
        </div>
        <div style={{...upStyle}} >
        </div>
        <div style={{...downStyle}} >
        </div>
    </div>
}

export default CuboidComponent;
