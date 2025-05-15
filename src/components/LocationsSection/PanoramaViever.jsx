import * as THREE from 'three';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useCursor, MeshPortalMaterial, CameraControls, Text, Preload } from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing, geometry } from 'maath';
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";
import Fonts from "/fonts/Italiana-Regular.ttf";


extend(geometry);


export const PanoramaViever = () => {
  const { t } = useTranslation();
  const [positionOne, setPositionOne] = useState();
  const [rotationOne, setRotationOne] = useState();
  const [positionTwo, setPositionTwo] = useState();
  const [rotationTwo, setRotationTwo] = useState();
  const [fovCameram, setFovCamera] = useState();
  const [frameWidth, setFrameWidth] = useState();
  const [frameHeight, setFrameHeight] = useState();
  const {renderTab, renderPC } = useWindowSize();
  const [nameOne, setNameOne] = useState();
  const [nameTwo, setNameTwo] = useState();
  const [author, setAuthor] = useState();

  
  // позиционирование камеры перед входом в портал. Чем выше значение тем дальше располложена камера;
  // Position & rotation - расположение картинок и порталов в пространстве по осям (x, y, z);
  // Ширина и высота - для определения самой картинки перед входом в портал;


  useEffect(() => {
    setNameOne(t('locations.location1'));
    setNameTwo(t('locations.location2'));
    setAuthor(t('locations.founder'));
  },[t]);


  useEffect(() => {
    if(renderTab){
      setPositionOne([-0.65, 0, 0.6]);
      setPositionTwo([0.65, 0, 0.6]);
      setRotationOne([0, 0.2, 0]);
      setRotationTwo([0, -0.2, 0]);
      setFovCamera(75);
      setFrameWidth(1.1);
      setFrameHeight(1.8);
    } else if(renderPC) {
      setPositionOne([-0.85, 0, 0.6]);
      setPositionTwo([0.85, 0, 0.6]);
      setRotationOne([0, 0.2, 0]);
      setRotationTwo([0, -0.2, 0]);
      setFovCamera(75);
      setFrameWidth(1.25);
      setFrameHeight(1.8);
    } else {
      setPositionOne([-1, 0, 0.6]);
      setPositionTwo([1, 0, 0.6]);
      setRotationOne([0, 0.2, 0]);
      setRotationTwo([0, -0.2, 0]);
      setFovCamera(75);
      setFrameWidth(1.25);
      setFrameHeight(1.8);
    }
  },[renderPC, renderTab]);


  // Параметры выставлены на разрешение мобильного приложения, свыше 768, 1440 и 1920px;


  return(
    <Canvas flat camera={{ fov: fovCameram, position: [0, 0, 20] }} eventSource={document.getElementById('locations')} eventPrefix="client">
        <color attach="background" args={['#fff']} />
        <Suspense fallback={null}>
            <Frame
                id="01"
                name={nameOne}
                author={author}
                image="panoramaOne.jpg"
                bg="#000000"
                position={positionOne}
                rotation={rotationOne}
                width={frameWidth}
                height={frameHeight}
            />
            <Frame
                id="02"
                name={nameTwo}
                author={author}
                image="panoramaTwo.jpg"
                bg="#000000"
                position={positionTwo}
                rotation={rotationTwo}
                width={frameWidth}
                height={frameHeight}
            />
            <Rig />
            <Preload all />
        </Suspense>
    </Canvas>
    )
};



function Frame({ id, name, author, image, bg, width, height, ...props }) {
  const portal = useRef()
  const [, setLocation] = useLocation();
  const [, params] = useRoute('/item/:id');
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  const [fonrSizeOne, setFontSizeOne] = useState();
  const [fonrSizeTwo, setFontSizeTwo] = useState();
  const [textPositionOne, setTextPositionOne] = useState();
  const [textPositionTwo, setTextPositionTwo] = useState();
  const {renderTab, renderPC } = useWindowSize();


  useFrame((_, dt) => {
    easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt)
  });


  useEffect(() => {
    if(renderTab){
      setFontSizeOne(0.10);
      setFontSizeTwo(0.05);
      setTextPositionOne([0, 0.75, 0.025]);
      setTextPositionTwo([-0.01, -0.8, 0.025]);
    } else if(renderPC){
      setFontSizeOne(0.13);
      setFontSizeTwo(0.05);
      setTextPositionOne([0, 0.75, 0.025]);
      setTextPositionTwo([-0.1, -0.8, 0.025]);
    } else {
      setFontSizeOne(0.13);
      setFontSizeTwo(0.05);
      setTextPositionOne([0, 0.75, 0.025]);
      setTextPositionTwo([-0.15, -0.8, 0.025]);
    }
  },[renderPC, renderTab]);


  return (
    <group {...props}>
      <Text
        font={Fonts}
        fontSize={fonrSizeOne}
        fontWeight={400}
        anchorY="top"
        anchorX="center"
        lineHeight={0.5}
        position={textPositionOne}
        material-toneMapped={false}
        color="black"
        outlineWidth={0.0022}
        // outlineColor="white"
      >
        {name}
      </Text>
      <Text
        font={Fonts}
        fontSize={fonrSizeTwo}
        anchorY="bottom"
        anchorX="right"
        position={textPositionTwo}
        material-toneMapped={false}
        color="black"
        outlineWidth={0.001}
        // outlineColor="white"
      >
        {author}
      </Text>
        <mesh
            name={id}
            onClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
        >
            <planeGeometry args={[width, height]} />
            <meshBasicMaterial transparent opacity={0} />

        </mesh>
        <mesh>
        <roundedPlaneGeometry args={[width, height, 0.05]} />
            <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
                <color attach="background" args={[bg]} />
                <Panorama image={image} />
            </MeshPortalMaterial>
        </mesh>
    </group>
  )
};


function Panorama({ image }) {
  const texture = useLoader(THREE.TextureLoader, image)
  
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[15, 100, 100]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  )
};



function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree();
  const [, params] = useRoute('/item/:id');

  useEffect(() => {
  const active = scene.getObjectByName(params?.id);
  
  if (active) {
    active.parent.localToWorld(position.set(0, 0.5, 0.25));
    if (active.name === "01") {
      active.parent.localToWorld(focus.set(0, 0, -2));
    } else {
      active.parent.localToWorld(focus.set(0, 0, 2));
    }

  }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  }, [controls, focus, params?.id, position, scene]);

  return <CameraControls 
    // makeDefault
    // minPolarAngle={Math.PI / 2}     // Ограничение вертикального вращения (вверх)
    // maxPolarAngle={Math.PI / 2.2}   // Ограничение вертикального вращения (вниз)
    // minAzimuthAngle={-Math.PI / 4}  // Ограничение горизонтального вращения влево
    // maxAzimuthAngle={Math.PI / 4}   // Ограничение горизонтального вращения вправо
    // minDistance={1}                 // Минимальный зум
    // maxDistance={5}                 // Максимальный зум
    // enableZoom={false}               // Включен ли зум
    // minPolarAngle={0} 
    // maxPolarAngle={Math.PI} 
    // mouseButtons={{ wheel: 0 }}
    // dragToOffset={false}
    // dollyToCursor={true}
    dollySpeed={false}
    enablePan={true}
    makeDefault 
    minPolarAngle={Math.PI / 2 - 0.4}
    maxPolarAngle={Math.PI / 2 + 0.5}
    minAzimuthAngle={-Math.PI / 10}
    maxAzimuthAngle={Math.PI / 2 * 2} 
  />
};