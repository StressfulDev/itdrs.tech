import React, {FC, useEffect, useState} from "react";
import "./ProjectCardNarrow.css";
import {useTranslation} from "react-i18next";
import SpiralLogo from "../../../../../assets/img/logo_spiral_1.svg";

const ProjectCardNarrow: FC<any> = (
    {
        area,
        icon,
        title,
        text,
        labels,
        backgroundColor,
        color,
        backgroundSize,
        backgroundPosition,
        backgroundImage = null,
        labelClassname = '',
        projectCardTitleWrap = '',
        rightBlockClassname = '',
        descriptionClassname = '',
        paragraphClassName = '',
        children
    }) => {
    const { t } = useTranslation();

    const backgroundImageStyle = backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `top ${backgroundPosition || ''} right 100%`,
        backgroundSize: `${backgroundSize}px`,
    } : {};
    const baseStyle = {
        overflow: "hidden",
        gridArea: area,
        backgroundColor: backgroundColor, color: color};

    const overriddenMarginTop = children ? {marginTop: "50px!important"} : {};

    return (
        <div className="cookie-card" style={{...baseStyle, ...backgroundImageStyle}}>
            <div className="project-card-content" style={{fontFamily: "Inter", flexDirection: "column"}}>
                <div className={`project-card-title-wrap ${projectCardTitleWrap}`}>
                    <div style={{display: "flex", alignItems: "start", zIndex: 1}}>
                        <img className="cookie-card-icon" src={icon} alt="cookie"/>
                        <h3 className="project-card-title">{title}</h3>
                    </div>
                    <div className={`labels-container ${labelClassname}`}>
                        {labels.map((label: string) => {
                            return (
                                <div className="label" style={{borderColor: color, ...overriddenMarginTop}}>
                                  {label}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={`right-block ${rightBlockClassname}`}>
                    {children}
                    <div className={`project-content-description ${descriptionClassname}`} style={{borderColor: color}}>
                        <p className={`cookie-paragraph project-card-paragraph ${paragraphClassName}`}>{t(text)}.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCardNarrow;
