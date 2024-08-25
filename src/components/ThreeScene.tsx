import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

const ThreeScene = () => {
  const boxRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current.rotation, {
        x: Math.PI * 2,
        duration: 2,
        repeat: -1,
        ease: 'power2.inOut',
      }); 
    }
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default ThreeScene;
