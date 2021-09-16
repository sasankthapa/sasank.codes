import React, {useEffect, useRef, useState} from 'react';
import {GroupProps, useFrame} from '@react-three/fiber';
import {Vector3} from 'three';

interface PlayerProps extends GroupProps{
    mouseCoords:Vector3;
}

const Player:React.FC<PlayerProps>=({mouseCoords,...props})=>{
    const ref=useRef();

    const [currentPos,setCurrentPos]=useState<Vector3>(new Vector3(0,1,0))
    const [targetPos,setTargetPos]=useState<Vector3>(new Vector3(0,1,0))
    const [moving, setMoving]=useState(false);

    useEffect(()=>{
        const newCoords=new Vector3().copy(mouseCoords);
        newCoords.setY(1);
        setCurrentPos(newCoords)
    },[mouseCoords])

    useEffect(()=>{
        if(ref.current){
            console.log(currentPos)
        }
    })

    useFrame((state,delta)=>{

    })

    return <group ref={ref} {...props} position={currentPos}>
        <spotLight position={[0,2,0]} args={['red',1,20]}/>
        <mesh position={[0,1.7,0]}>
            <sphereGeometry attach="geometry" args={[0.5]}/>
            <meshStandardMaterial attach="material" color="red"/>
        </mesh>
        <mesh position={[0,1,0]}>
            <cylinderGeometry attach="geometry" args={[0.3,0.3,1]}/>
            <meshStandardMaterial attach="material" color="green" />
        </mesh>
        <mesh position={[0,0,0]}>
            <torusGeometry attach="geometry" args={[0.5,0.2,9,45]}/>
            <meshStandardMaterial attach="material" color="black" />
        </mesh>
    </group>
}

export default Player;
