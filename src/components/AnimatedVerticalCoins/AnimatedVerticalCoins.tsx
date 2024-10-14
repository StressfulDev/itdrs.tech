import React, {FC, useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";

interface IAnimatedVerticalCoinsProps {
  screenWidth: number;
}

const AnimatedVerticalCoins: FC<IAnimatedVerticalCoinsProps> = ({screenWidth}) => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(485);
  const [pathsCoins, setPathsCoins] = useState<string[]>([
    "M-80.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0",
    "M60.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0",
    "M200.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0"
  ]);

  const ref = useRef<any>(null);

  ref.current = anime.timeline({
    direction: "alternate",
    loop: true,
    autoplay: true,
    easing: "easeInOutSine",
    duration: 2000,
  })

  useEffect(() => {
    if (screenWidth >= 1280) {
      setPathsCoins([
        "M-80.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0",
        "M60.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0",
        "M200.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0"
      ])
    } else if (screenWidth < 1280 && screenWidth > 940) {
      setPathsCoins([
        "M-80.38 150a53.75 53.75 0 1 0 107.5 0a53.75 53.75 0 1 0 -107.5 0",
        "M30.38 150a53.75 53.75 0 1 0 107.5 0a53.75 53.75 0 1 0 -107.5 0",
        "M140.38 150a53.75 53.75 0 1 0 107.5 0a53.75 53.75 0 1 0 -107.5 0"
      ])
    } else if (screenWidth <= 940 && screenWidth > 650) {
      setPathsCoins([
        "M-80.38 150a53.75 53.75 0 1 0 107.5 0a53.75 53.75 0 1 0 -107.5 0",
        "M27.38 150a53.75 53.75 0 1 0 107.5 0a53.75 53.75 0 1 0 -107.5 0",
        "M135.38 150a53.75 53.75 0 1 0 107.5 0a53.75 53.75 0 1 0 -107.5 0"
      ])
    } else if (screenWidth <= 650) {
      setPathsCoins([
        "M-80.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0",
        "M60.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0",
        "M200.38 150a63.75 63.75 0 1 0 127.5 0a63.75 63.75 0 1 0 -127.5 0"
      ])
    }
  }, [screenWidth]);

  useEffect(() => {
    ref.current
        .add({
          targets: "#top-left-coin",
          translateY: "-10rem"
        }, 100)
        .add({
          targets: "#bottom-left-coin",
          translateY: "5rem"
        }, 100)
        .add({
          targets: "#top-middle-coin",
          translateY: "-5rem"
        }, 100)
        .add({
          targets: "#bottom-middle-coin",
          translateY: "10rem"
        }, 100)
        .add({
          targets: "#top-right-coin",
          translateY: "-10rem"
        }, 100)
        .add({
          targets: "#bottom-right-coin",
          translateY: "5rem"
        }, 100)
  }, [screenWidth])

  useEffect(() => {
    if (screenWidth <= 1680 && screenWidth > 1430) {
      setWidth(750);
      setHeight(460);
    } else if (screenWidth <= 1430 && screenWidth > 1110) {
      setWidth(742);
    } else if (screenWidth <= 1110 && screenWidth > 1070) {
      setWidth(725);
      setHeight(400);
    } else if (screenWidth <= 1070 && screenWidth > 1024) {
      setWidth(690);
    } else if (screenWidth <= 1024 && screenWidth > 980) {
      setWidth(660);
      setHeight(390);
    } else if (screenWidth <= 980 && screenWidth > 940) {
      setWidth(640);
      setHeight(385);
    } else if (screenWidth <= 940 && screenWidth > 650) {
      setWidth(500);
      setHeight(327);
    } else if (screenWidth <= 650 && screenWidth > 390) {
      setWidth(470);
      setHeight(230)
    } else if (screenWidth <= 390) {
      setWidth(450);
      setHeight(210)
    }
  }, [screenWidth])

  return (
    <div className="animatedCoins">
      <svg
        width={width}
        height={height}
        viewBox="0 0 285 285"
        fill="#BFFDE8"
        className="vertical-coins"
      >
        <defs>
          <clipPath id="clipPathLeft">
            <path
                id="main-left-coin"
                stroke="#BFFDE8"
                strokeWidth="10"
                fill="#BFFDE8"
                d={pathsCoins[0]}
                fillRule="evenodd" clipRule="evenodd"
            />
          </clipPath>
          <clipPath id="clipPathMiddle">
            <path
                id="main-middle-coin"
                stroke="#BFFDE8"
                strokeWidth="15"
                fill="#BFFDE8"
                d={pathsCoins[1]}
                fillRule="evenodd" clipRule="evenodd"
            />
          </clipPath>
          <clipPath id="clipPathRight">
            <path id="main-right-coin"
                  stroke="#BFFDE8"
                  strokeWidth="15"
                  fill="#BFFDE8"
                  d={pathsCoins[2]}
                  fillRule="evenodd" clipRule="evenodd"
            />
          </clipPath>
        </defs>

        <path id="top-left-coin" stroke="#388EFF" strokeWidth="10" fill="#BFFDE8" d={pathsCoins[0]}/>
        <path id="main-left-coin" stroke="#388EFF" strokeWidth="10" fill="#BFFDE8" d={pathsCoins[0]}/>
        <path
          id="bottom-left-coin"
          stroke="#388EFF"
          strokeWidth="10"
          fill="#BFFDE8"
          d={pathsCoins[0]}
          style={{position: "absolute", transform: "translateY(10rem)"}}
          fillRule="evenodd"
          clipRule="evenodd"
        />

        <path id="bottom-middle-coin" stroke="#388EFF" strokeWidth="10" fill="#BFFDE8" d={pathsCoins[1]}/>
        <path id="main-middle-coin" stroke="#388EFF" strokeWidth="10" fill="#BFFDE8" d={pathsCoins[1]}/>
        <path
          id="top-middle-coin"
          stroke="#388EFF"
          strokeWidth="10"
          fill="#BFFDE8"
          d={pathsCoins[1]}
          style={{position: "absolute", transform: "translateY(-10rem)"}}
          fillRule="evenodd"
          clipRule="evenodd"
        />

        <path id="top-right-coin" stroke="#388EFF" strokeWidth="10" fill="#BFFDE8" d={pathsCoins[2]}/>
        <path id="main-right-coin" stroke="#388EFF" strokeWidth="10" fill="#BFFDE8" d={pathsCoins[2]}/>
        <path
          id="bottom-right-coin"
          stroke="#388EFF"
          strokeWidth="10"
          fill="#BFFDE8"
          d={pathsCoins[2]}
          style={{position: "absolute", transform: "translateY(10rem)"}}
          fillRule="evenodd"
          clipRule="evenodd"
        />

        <g clipPath="url(#clipPathLeft)">
          <path id="bottom-left-coin"
            stroke="#388EFF"
            strokeWidth="0"
            fillRule="evenodd" clipRule="evenodd"
            fill="#388EFF"
            style={{position: "absolute", transform: "translateY(10rem)"}}
            d={pathsCoins[0]}
          />
        </g>
        <g clipPath="url(#clipPathMiddle)">
          <path
            id="top-middle-coin"
            stroke="#388EFF"
            strokeWidth="15"
            fillRule="evenodd" clipRule="evenodd"
            fill="#388EFF"
            style={{position: "absolute", transform: "translateY(-10rem)"}}
            d={pathsCoins[1]}
          />
        </g>
        <g clipPath="url(#clipPathRight)">
          <path
            id="bottom-right-coin"
            stroke="#388EFF"
            strokeWidth="15"
            fillRule="evenodd" clipRule="evenodd"
            fill="#388EFF"
            style={{position: "absolute", transform: "translateY(10rem)"}}
            d={pathsCoins[2]}
          />
        </g>
      </svg>
    </div>
  )
}
export default AnimatedVerticalCoins;
