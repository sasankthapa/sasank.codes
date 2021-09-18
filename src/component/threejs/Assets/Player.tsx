import React, {useEffect, useRef, useState} from 'react';
import {GroupProps, useFrame} from '@react-three/fiber';
import * as THREE from 'three';

interface PlayerProps extends GroupProps{
    mouseCoords:THREE.Vector3;
}

const Player:React.FC<PlayerProps>=({mouseCoords,...props})=>{

    const SPEED=10;

    const ref=useRef<THREE.Mesh>(null!);

    const [targetPos,setTargetPos]=useState<THREE.Vector3>(new THREE.Vector3(0,1,0))
    const [moving, setMoving]=useState(false);

    useEffect(()=>{
        setTargetPos(mouseCoords)
    },[mouseCoords])

    useEffect(()=>{
        if(ref.current){
            if(ref.current.children[0] instanceof THREE.SpotLight){
                let spot= ref.current.children[0]
                spot.target=ref.current.children[1]
            }
        }
    },[ref])

    const approach=(flGoal:number,flCurrent:number,dt:number)=>{
        const flDifference=flGoal-flCurrent;

        if(flDifference > dt){
            return flCurrent+dt;
        }else if(flDifference < -dt){
            return flCurrent-dt ;
        }
        return 0;
    }

    useFrame((_,delta)=>{
        console.log(delta);
        if(ref.current){
            //gravity
            let currentPos=ref.current.position;
            if(currentPos.y >= -3.9)
                ref.current.position.y-=1*delta;
            if(currentPos.x < targetPos.x)
                ref.current.position.x=approach(targetPos.x,currentPos.x,SPEED*delta);
            if(currentPos.z < targetPos.z)
                ref.current.position.z=approach(targetPos.z,currentPos.z,SPEED*delta);
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
