import React from 'react';

interface CuboidComponentProps{
    config:{
        width:number,
        height:number,
        depth:number,
        x:number,
        y:number,
        z:number,
        rotateX:number,
        rotateY:number,
        rotateZ:number,
    },
    front?:()=>React.ReactNode,
    extraClass:string,
}

const CuboidComponent:React.FC<CuboidComponentProps> =({config,front,extraClass})=>{
    const baseStyles={
        position:'absolute' as 'absolute',
        transformOrigin:'50% 50%',
        top:'50%',
        left:'50%'
    }
    const frontStyle={
        ...baseStyles,
        height:`${config.height}vmin`,
        width:`100%`,
        transform: `translate(-50%,-50%) rotateX(-90deg) translate3d(0,0,${config.depth/2}vmin)`
    }
    const backStyle={
        ...baseStyles,
        height:`${config.height}vmin`,
        width:`100%`,
        transform: `translate(-50%,-50%) rotateX(-90deg) rotateY(180deg) translate3d(0,0,${config.depth/2}vmin)`
    }
    const leftStyle={
        ...baseStyles,
        height:`${config.height}vmin`,
        width:`${config.depth}vmin`,
        transform:`translate(-50%, -50%) rotateX(-90deg) rotateY(90deg) translate3d(0,0,${config.width/2}vmin)`
    }
    const rightStyle={
        ...baseStyles,
        height:`${config.height}vmin`,
        width:`${config.depth}vmin`,
        transform:`translate(-50%, -50%) rotateX(-90deg) rotateY(-90deg) translate3d(0, 0,${config.width/2}vmin)`
    }
    const upStyle={
        ...baseStyles,
        height:`${config.depth}vmin`,
        width:`${config.width}vmin`,
        transform:`translate(-50%,-50%) translate3d(0,0,${config.height/2}vmin)`
    }
    const downStyle={
        ...baseStyles,
        height:`${config.depth}vmin`,
        width:`${config.width}vmin`,
        transform:`translate(-50%,-50%) translate3d(0,0,-${config.height/2}vmin) rotateX(180deg)`
    }

    return <div className={"cuboid "+extraClass} style={{width:`${config.width}vmin`,height:`${config.depth}vmin`,
                    transform:`translate3d(${config.x}vmin,${config.y}vmin,${config.z}vmin) rotateX(${config.rotateX}deg) rotateY(${config.rotateY}deg) rotateZ(${config.rotateZ}deg)`}}>
        <div style={{...frontStyle}} >
            {front?front():''}
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
