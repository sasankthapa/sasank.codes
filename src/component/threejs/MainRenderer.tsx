import React, {useState,useRef} from 'react'
import { Canvas, MeshProps, SpriteProps, ThreeEvent, useFrame, useLoader } from '@react-three/fiber'
import { BoxGeometry, Sprite, Texture, TextureLoader, Vector3} from 'three'
import characterImage from '../../assets/profile.jpg'

interface PlaneProps extends MeshProps{
    updateMouse:(pos:Vector3)=>void;
}

const Plane:React.FC<PlaneProps>=({updateMouse,...other})=>{
    const ref=useRef<BoxGeometry>(null);

    const handleMouseMove=(e:ThreeEvent<PointerEvent>)=>{
        if(ref.current){
            console.log(e);
            updateMouse(e.point);
        }
    }

    return <mesh {...other} onPointerMove={handleMouseMove} ref={ref}>
        <boxGeometry />
        <meshStandardMaterial color="orange"/>
    </mesh>
}

const Player=(props:SpriteProps)=>{
    const ref=useRef<Sprite>(null);
    
    const texture =useLoader(TextureLoader,characterImage )

    return <sprite {...props} ref={ref}>
        <spriteMaterial map={texture}/>
    </sprite>
}

const App:React.FC<{}> = () => {
    const [pointerPos,setPointerPos]=useState(new Vector3(10,10,0));

    const updateMouse=(pos:Vector3)=>{
        setPointerPos(pos)
        console.log(pos)
    }

  return <Canvas raycaster={{}} className="ProjectsGrid" camera={{ position: [0,10,10] }}>
        <Player scale={[10,10,1]} position={pointerPos}/>
        <Plane position={[0,-10,-20]} scale={[50,1,50]} updateMouse={updateMouse}/>
        <pointLight position={[10, 10, 10]} />
  </Canvas>
}


export default App;
