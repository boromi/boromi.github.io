import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 84,
        position: [1.0, 1.9, 2.8],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
