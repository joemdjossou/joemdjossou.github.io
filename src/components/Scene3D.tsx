import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { MathUtils, type Mesh } from "three";

/** Distorted metallic royal-blue blob that gently reacts to the pointer. */
function Blob() {
  const mesh = useRef<Mesh>(null);
  const shell = useRef<Mesh>(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
      mesh.current.rotation.x = MathUtils.lerp(mesh.current.rotation.x, y * 0.45, 0.05);
      mesh.current.rotation.z = MathUtils.lerp(mesh.current.rotation.z, -x * 0.35, 0.05);
    }
    if (shell.current) {
      shell.current.rotation.y -= 0.0016;
      shell.current.rotation.x += 0.0009;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      {/* Wireframe outer shell for depth */}
      <Icosahedron ref={shell} args={[2.05, 1]}>
        <meshBasicMaterial color="#5c7cfa" wireframe transparent opacity={0.12} />
      </Icosahedron>
      {/* Solid distorted core */}
      <Icosahedron ref={mesh} args={[1.4, 12]}>
        <MeshDistortMaterial
          color="#4f74ff"
          emissive="#16205e"
          emissiveIntensity={0.5}
          roughness={0.12}
          metalness={0.65}
          distort={0.42}
          speed={1.7}
        />
      </Icosahedron>
    </Float>
  );
}

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#a9bcff" />
      <pointLight position={[-5, -3, -2]} intensity={28} color="#3b5bdb" />
      <pointLight position={[4, -2, 3]} intensity={14} color="#8aa0ff" />
      <Suspense fallback={null}>
        <Blob />
      </Suspense>
    </Canvas>
  );
};

export default Scene3D;
