import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const FLOOR_HEIGHT = 1;
export const NUMBER_OF_COMPONENTS = 3;

export function Computer(props) {
  const { nodes, materials } = useGLTF("./models/lowres_computer.glb");
  const ref = useRef();
  const timeline = useRef();

  const mouseRef = useRef();
  const keyboardRef = useRef();
  const monitorRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    timeline.current.seek(scroll.offset * timeline.current.duration());
  });

  useLayoutEffect(() => {
    timeline.current = gsap.timeline();

    // timeline.current.to(
    //   ref.current.position,
    //   {
    //     duration: 2,
    //     y: -FLOOR_HEIGHT * (NUMBER_OF_COMPONENTS - 1),
    //   },
    //   0
    // );

    timeline.current.from(
      monitorRef.current.position,
      {
        duration: 0.5,
        x: -15,
      },
      0
    );

    timeline.current.from(
      monitorRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    timeline.current.from(
      keyboardRef.current.position,
      {
        duration: 1.5,
        y: 3,
      },
      0.5
    );

    timeline.current.from(
      mouseRef.current.position,
      {
        duration: 1.5,
        x: 4,
      },
      1.0
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.PC.geometry}
        material={materials.TextureGrid}
        position={[0, 0, -0.03]}
        rotation={[0.09, 0, 0]}
      />
      <group position={[0, 0.5, 0.03]}>
        <group ref={monitorRef}>
          <mesh
            geometry={nodes.Monitor.geometry}
            material={materials.TextureGrid}
            rotation={[0.09, 0, 0]}
          />
        </group>
      </group>
      <group position={[0.88, 0.06, 0.75]}>
        <group ref={mouseRef}>
          <mesh
            geometry={nodes.Mouse.geometry}
            material={materials.TextureGrid}
            rotation={[0.09, 0, 0]}
          />
        </group>
      </group>
      <group position={[0, 0.06, 0.81]}>
        <group ref={keyboardRef}>
          <mesh
            geometry={nodes.Keyboard.geometry}
            material={materials.TextureGrid}
            rotation={[0.09, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/lowres_computer.glb");
