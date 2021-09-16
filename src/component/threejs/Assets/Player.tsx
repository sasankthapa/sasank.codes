import React, {useEffect, useRef, useState} from 'react';
import {GroupProps, useFrame} from '@react-three/fiber';
import {Group, SpotLight, Vector3} from 'three';

interface PlayerProps extends GroupProps{
    mouseCoords:Vector3;
}

const Player:React.FC<PlayerProps>=({mouseCoords,...props})=>{

    const SPEED=0.12;

    const ref=useRef<Group>(null);

    const [targetPos,setTargetPos]=useState<Vector3>(new Vector3(0,1,0))
    const [moving, setMoving]=useState(false);

    useEffect(()=>{
        setTargetPos(mouseCoords)
    },[mouseCoords])

    useEffect(()=>{
        if(ref.current){
            let spot:SpotLight=ref.current.children[0]
            spot.target=ref.current.children[1]
        }
    },[ref])

    const approach=(flGoal:number,flCurrent:number,dt:number)=>{
        const flDifference=flGoal-flCurrent;

        if(flDifference > dt){
            return flCurrent+dt;
        }else if(flDifference < -dt){
            return flCurrent -dt ;
        }
    }

    useFrame((_,delta)=>{
        console.log(delta);
        if(ref.current){
            let currentPos=ref.current.position;
            if(currentPos.x!==targetPos.x)
            ref.current.position.x+=(targetPos.x-currentPos.x)*SPEED;
            ref.current.position.z+=(targetPos.z-currentPos.z)*SPEED;
        }
    })

    return <group ref={ref} {...props}>
        <spotLight position={[0,2,0]} args={['red',1,20]}/>
        <mesh position={[0,1,0]}>
            <sphereGeometry attach="geometry" args={[0.5]}/>
            <meshStandardMaterial attach="material" color="red"/>
        </mesh>
        <mesh position={[0,0.5,0]}>
            <cylinderGeometry attach="geometry" args={[0.5,0.5,1]}/>
            <meshStandardMaterial attach="material" color="green" />
        </mesh>
        <mesh position={[0,0,0]}>
            <sphereGeometry attach="geometry" args={[0.5]}/>
            <meshStandardMaterial attach="material" color="black" />
        </mesh>
    </group>
}

export default Player;
