import React, {FC} from "react";
import "./ProjectCardWideOne.css";
import AnimatedBars from "../../../../../components/AnimatedBars/AnimatedBars";
import {useTranslation} from "react-i18next";

const ProjectCardWide1: FC<any> = ({
  area,
  icon,
  title,
  text,
  labels,
  screenWidth,
  backgroundColor,
  color,
  cardDescription = '',
  rightBlockClassname = '',
  labelClassname = '',
  children
}) => {
  const {t} = useTranslation();

  return (
    <div
      className="cookie-card"
      style={{
        gridArea: area,
        backgroundColor: backgroundColor,
        color: color,
        overflow: "hidden"
      }}
    >
      <div className="project-card-content" style={{fontFamily: "Inter"}}>
        <div className="project-card-left-block">
          <div style={{display: "flex", alignItems: "start"}}>
            <img className="cookie-card-icon" src={icon} alt={"cookie"}/>
            <h3 className="project-card-title project-card-title-wide1">{title}</h3>
          </div>
          {screenWidth <= 650 && <div>{children}</div>}
          <div
            className={`project-content-description card-wide-descr ${cardDescription}`}
            style={{borderColor: color}}
          >
            <p className="cookie-paragraph">{t(text)}.</p>
          </div>
        </div>
        <div className={`right-block ${rightBlockClassname}`}>
          <div className={`labels-container ${labelClassname}`}>
            {labels.map((label: string) => {
              return (
                <div className={"label"} style={{borderColor: color}}>
                  {label}
                </div>)
            })}
          </div>
          {screenWidth > 650 && children}
        </div>
      </div>
    </div>
  )
}
export default ProjectCardWide1;
