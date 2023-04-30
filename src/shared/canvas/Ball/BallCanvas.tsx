import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { CanvasLoader } from '../../components';
import { Ball } from './Ball';

interface IBallCanvasProps {
  icon: string;
}

export const BallCanvas: FC<IBallCanvasProps> = ({ icon }) => (
  <Canvas
    frameloop="demand"
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        autoRotate
      />
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all/>
  </Canvas>
);