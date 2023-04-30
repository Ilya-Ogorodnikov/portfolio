import { useState, useRef, FC } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
//@ts-ignore либа не подтягивает типы
import * as random from "maath/random/dist/maath-random.esm";


export const Stars: FC = () => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    //@ts-ignore либа не дает типы для типизации рефа
    ref.current.rotation.x -= delta / 10;
    //@ts-ignore либа не дает типы для типизации рефа
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Ненужные поля являются обязательными
      // @ts-ignore */}
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled

      >
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};