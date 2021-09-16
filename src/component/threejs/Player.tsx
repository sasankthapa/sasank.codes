import React, {useEffect, useState} from 'react';
import {useSpring, animated} from '@react-spring/three'
import {GroupProps, Vector2, Vector3} from '@react-three/fiber';

interface PlayerProps extends GroupProps{
    mouseCoords:Vector2;
}

const Player:React.FC<PlayerProps>=({mouseCoords,...props})=>{
    const [currentPos,setCurrentPos]=useState<Vector2>([0,0])

    useEffect(()=>{
        setCurrentPos(mouseCoords)
    },[mouseCoords])

    Vector3 currentPos=[mouseCoords[0],mouseCoords[1],0];

    return <group position={[currentPos,0]} {...props}>
        <mesh position={[0,0,3]}>
            <sphereGeometry />
            <meshStandardMaterial color="red"/>
        </mesh>
    </group>
}

export default Player;
