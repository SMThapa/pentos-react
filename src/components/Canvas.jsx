import React, { useEffect, useRef, Fragment } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Canvas = () => {
  const canvasRef = useRef(null);
  const modelRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
  );

  useEffect(() => {

    // Set up scene and camera only once
    if (!sceneRef.current) {
      sceneRef.current = new THREE.Scene();
    }
    if (!cameraRef.current) {
      cameraRef.current = new THREE.PerspectiveCamera(
        15,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      cameraRef.current.position.set(0, 0, 0);
    }

    const canvas = canvasRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    // ✅ Force consistent color handling
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("myTexture.jpg");
    texture.encoding = THREE.sRGBEncoding; // ✅ add this

// Stronger ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Hemisphere light for natural sky/ground effect
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

// Main directional light (like the sun)
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight1.position.set(10, 20, 10);
directionalLight1.castShadow = true;
scene.add(directionalLight1);

// Fill directional light from opposite side
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight2.position.set(-10, 15, -10);
scene.add(directionalLight2);

// Point light close to the model for extra brightness
const pointLight = new THREE.PointLight(0xffffff, 0.8, 50);
pointLight.position.set(0, 5, 5);
scene.add(pointLight);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.4.1/"
    );
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      "/model/drone.glb",
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);

        model.scale.set(1, 1, 1);
        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        model.rotation.y = 0
        model.rotation.x = .25
        
        model.position.x = 0
        model.position.y = -.3
        model.position.z = -4.5

        scene.add(model);

        setupScrollAnimations(model);
        resizeModelToWidth();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      resizeModelToWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      renderer.dispose();
    };
  }, []);

  const resizeModelToWidth = () => {
    const model = modelRef.current;
    if (!model) return;
    const width = window.innerWidth;
    const scaleFactor = width / 1000;
    if (width < 1000) {
      model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    } else {
      model.scale.set(1, 1, 1);
    }
  };

  const setupScrollAnimations = (model) => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "80% 70%",
        endTrigger: "#about",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });
    tl1.to(model.position, { x: 0.7, y: -0.2, z: -6 }, 0);
    tl1.to(model.rotation, { y: -Math.PI / 7, x: 0.55 }, 0);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "80% 70%",
        endTrigger: "#whyUs",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });
    tl2.to(model.position, { x: -0.7 }, 0);
    tl2.to(model.rotation, { y: Math.PI / 7 }, 0);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#whyUs",
        start: "80% 70%",
        endTrigger: "#blankSpace",
        end: "30% 60%",
        scrub: 1,
        // markers: true,
      },
    });
    tl3.to(model.position, { x: 0, y: -0.5 }, 0);
    tl3.to(model.rotation, { y: 0, x: 0.15 }, 0);

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#blankSpace",
        start: "10% 40%",
        end: "90% 40%",
        scrub: 1,
        // markers: true,
      },
    });
    tl4.to(model.position, { x: 0, z: 1, y: 0.6 }, 0);
    tl4.to(model.rotation, { x: -0.15 }, 0);
  };

  return (
    <canvas id="myCanvas" ref={canvasRef}></canvas>
  );
};
