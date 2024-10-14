import React, {FC, useEffect, useMemo, useRef} from "react";
import anime from "animejs/lib/anime.es";

interface Interface {
  count: number
  minHeight: number
  maxHeight: number
  isRelative: boolean
  barsClassName?: string;
}

const AnimatedBars: FC<Interface> = ({
  count,
  minHeight = 400,
  maxHeight = 50,
  isRelative = false,
  barsClassName = ''
}) => {

  const bars = Array();
  const barsLimit = Array();

  for (let x of Array(count)) {
    bars.push(Math.random() * (maxHeight - minHeight) + minHeight);
    barsLimit.push(Math.random() * (maxHeight - minHeight) + minHeight);
  }

  const relativeOffset = isRelative ? {top: "5rem"} : {};
  const ref = useRef<any>(null);

  ref.current = anime.timeline({
    direction: "alternate",
    loop: true,
    autoplay: true,
    easing: "easeInOutSine",
    duration: 1500
  });

  useEffect(() => {
    bars.forEach((el: any, index: number) => {
      ref.current.add({
        targets: `#char-${index}`,
        height: barsLimit[index],
        duration: 1500
      }, 100);
    })
  }, []);

  return (
    <div
      className={`animatedChart ${barsClassName}`}
      style={{...relativeOffset, position: "relative", height: maxHeight + 10}}>
      {bars.map((bar: any, index: number) => {
        return (
          <div
            id={`char-${index}`}
            className={"chartBar"}
            style={{height: bar}}
          />
        )
      })}
    </div>
  )
}
export default AnimatedBars;
