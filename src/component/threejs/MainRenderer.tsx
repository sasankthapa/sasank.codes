import React, {useState,useRef} from 'react'
import { Canvas, MeshProps, SpriteProps, ThreeEvent, useFrame, useLoader, useThree } from '@react-three/fiber'
import { BoxGeometry, Sprite, Vector2, TextureLoader, Vector3} from 'three'
import characterImage from '../../assets/profile.jpg'
import Character from './Assets/Player';

interface PlaneProps extends MeshProps{
    updateMouse:(pos:Vector3)=>void;
}

const Plane:React.FC<PlaneProps>=({updateMouse,...other})=>{
    const ref=useRef<MeshProps>(null);

    const handleMouseMove=(e:ThreeEvent<PointerEvent>)=>{
        if(ref.current){
            console.log(e)
            updateMouse(e.point);
        }
    }

    return <mesh {...other} ref={ref} onPointerMove={handleMouseMove} >
        <boxGeometry args={[50,1,50]}/>
        <meshStandardMaterial color="orange"/>
    </mesh>
}

const SpriteCaster=(props:SpriteProps)=>{
    const ref=useRef<Sprite>(null);
    
    const texture =useLoader(TextureLoader,characterImage )

    return <sprite {...props} ref={ref}>
        <spriteMaterial map={texture}/>
    </sprite>
}

const App:React.FC<{}> = () => {
    const [pointerPos,setPointerPos]=useState(new Vector3(0,0,0));
    const [dimensions,setDimensions]=useState(new Vector2(0,0));

    const updateMouse=(pos:Vector3)=>{
        //normalize mouse pointer
        console.log(pos);
        console.log(dimensions);
        setPointerPos(pos);
    }


  return <Canvas onCreated={(state)=>{
      setDimensions(new Vector2(state.size.width,state.size.height));
  }}

    raycaster={{}} className="ProjectsGrid" camera={{ position: [0,0,-10], fov:60 }}>
        <ambientLight intensity={0.8}/>
        <spotLight position={[0,2,0]} />
        <Plane position={[0,-5,0]} updateMouse={updateMouse}/>
        <Character mouseCoords={pointerPos} />
  </Canvas>
}


export default App;
