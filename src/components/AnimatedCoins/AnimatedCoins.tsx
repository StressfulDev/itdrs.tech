import React, {FC, useEffect, useRef, useState} from "react";
import Coin from "../../assets/img/animations/coins/coin_1.svg";
import Coin2 from "../../assets/img/animations/coins/coin_2.svg";
import "./AnimatedCoins.css";
import anime from "animejs/lib/anime.es";

const AnimatedCoins: FC<any> = ({screenWidth}) => {
  const [height, setHeight] = useState(285);

  const mainCircle = ["M0.38 127.5a127.5 127.5 0 1 0 255 0a127.5 127.5 0 1 0 -255 0",]

  const ref = useRef<any>(null);

  ref.current = anime.timeline({
    direction: "alternate",
    loop: true,
    autoplay: true,
    easing: "easeInOutSine",
    duration: 2000,
  })

  useEffect(() => {
    ref.current
        .add({
          targets: "#left-coin",
          translateX: "-10rem"
        }, 100)
        .add({
          targets: "#right-coin",
          translateX: "9.5rem"
        }, 100)

  }, [])

  useEffect(() => {
    if (screenWidth <= 1024 && screenWidth >= 850) {
      setHeight(230);
    } else if (screenWidth <= 850) {
      setHeight(185);
    }
  }, [screenWidth]);

  return (
      <div className="animatedCoins">
        <svg
            width="680"
            height={height}
            viewBox="0 0 285 285"
            fill="#BFFDE8"
            style={{top: "-6rem", position: "absolute"}}
        >
          <defs>
            <clipPath id="clipPath">
              <path
                  id="main-coin"
                  stroke="#BFFDE8"
                  strokeWidth="15"
                  fill="#BFFDE8"
                  d={mainCircle[0]}
                  fillRule="evenodd" clipRule="evenodd"
              />
            </clipPath>
          </defs>
          <path id="left-coin" stroke="#A8CCFC" strokeWidth="15" fill="#BFFDE8" d={mainCircle[0]}/>
          <path id="main-coin" stroke="#A8CCFC" strokeWidth="15" fill="#BFFDE8" d={mainCircle[0]}/>
          <path
              id="right-coin"
              stroke="#A8CCFC"
              strokeWidth="15"
              style={{position: "absolute", transform: "translateX(32rem)"}}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#BFFDE8"
              d={mainCircle[0]}
          />
          <g clipPath={"url(#clipPath)"}>
            <path
                id="right-coin"
                stroke="#A8CCFC"
                strokeWidth="15"
                fillRule="evenodd" clipRule="evenodd"
                fill="#A8CCFC"
                style={{position: "absolute", transform: "translateX(32rem)"}}
                d={mainCircle[0]}
            />
          </g>
        </svg>
      </div>
  )
}
export default AnimatedCoins;
