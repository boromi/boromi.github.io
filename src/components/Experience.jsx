import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Computer } from "./Computer";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Computer />
      </ScrollControls>
    </>
  );
};
