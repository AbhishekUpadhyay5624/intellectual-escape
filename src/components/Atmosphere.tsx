import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { useAppearance } from "@/context/AppearanceContext";

interface Props {
  mode: "psychology" | "stories";
  variation?: number;
}

export default function Atmosphere({ mode, variation = 0 }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const controls = useRef<{
    setMotion: (enabled: boolean) => void;
    setVariation: (value: number) => void;
  }>();
  const { ambientMotion } = useAppearance();

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      host.dataset.renderer = "static";
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 0, 7.4);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    room.dispose();
    pmrem.dispose();

    const geometry = new THREE.TorusKnotGeometry(0.88, 0.235, 160, 28, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({
      color: mode === "stories" ? 0xd5c9c3 : 0xbcc6dc,
      metalness: 1,
      roughness: 0.23,
      clearcoat: 0.65,
      clearcoatRoughness: 0.18,
      envMapIntensity: 1.7,
    });
    const sculpture = new THREE.Mesh(geometry, material);
    sculpture.rotation.set(0.35, -0.45, -0.35);
    const group = new THREE.Group();
    group.add(sculpture);
    scene.add(group);

    const key = new THREE.DirectionalLight(0xffffff, 3.5);
    key.position.set(-3, 5, 4);
    const rim = new THREE.DirectionalLight(0x9bb9ff, 2.4);
    rim.position.set(4, 1, -3);
    scene.add(key, rim, new THREE.AmbientLight(0xffffff, 0.5));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let motionEnabled = ambientMotion;
    let targetVariation = variation;
    let offset = variation * 0.28;
    let elapsed = 0;
    let previousTime = 0;
    let lastFrame = 0;
    let isVisible = !document.hidden;
    let loopRunning = false;
    const draw = () => renderer.render(scene, camera);
    const frame = (time: number) => {
      if (time - lastFrame < 1000 / 30) return;
      const delta = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0;
      previousTime = time;
      lastFrame = time;
      elapsed += delta;
      offset += (targetVariation * 0.28 - offset) * 0.035;
      sculpture.rotation.y = -0.45 + elapsed * 0.055 + offset;
      sculpture.rotation.x = 0.35 + Math.sin(elapsed * 0.24) * 0.12;
      sculpture.rotation.z = -0.35 + Math.sin(elapsed * 0.18) * 0.08;
      group.position.y = Math.sin(elapsed * 0.55) * 0.065;
      draw();
    };
    const updateMotion = () => {
      const shouldAnimate =
        motionEnabled && !reducedMotion.matches && isVisible;
      if (shouldAnimate !== loopRunning) {
        previousTime = 0;
        loopRunning = shouldAnimate;
        renderer.setAnimationLoop(shouldAnimate ? frame : null);
      }
      if (!shouldAnimate) {
        sculpture.rotation.y = -0.45 + targetVariation * 0.28;
        draw();
      }
    };
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      draw();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const visibility = () => {
      isVisible = !document.hidden;
      updateMotion();
    };
    const contextLost = (event: Event) => {
      event.preventDefault();
      renderer.setAnimationLoop(null);
      loopRunning = false;
      host.dataset.renderer = "static";
    };
    document.addEventListener("visibilitychange", visibility);
    reducedMotion.addEventListener("change", updateMotion);
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    controls.current = {
      setMotion: (enabled) => {
        motionEnabled = enabled;
        updateMotion();
      },
      setVariation: (value) => {
        targetVariation = value;
        if (!loopRunning) updateMotion();
      },
    };
    resize();
    updateMotion();
    host.dataset.renderer = "webgl";

    return () => {
      controls.current = undefined;
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      reducedMotion.removeEventListener("change", updateMotion);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      geometry.dispose();
      material.dispose();
      environment.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
    // Continuous motion is kept outside React; these discrete preferences use the controls below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => controls.current?.setMotion(ambientMotion), [ambientMotion]);
  useEffect(() => controls.current?.setVariation(variation), [variation]);

  return (
    <div ref={container} className="atmosphere" aria-hidden="true">
      <div className="sculpture-fallback">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
