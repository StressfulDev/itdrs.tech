import {useRef, useState} from "react";

import './Accordion.css';
import ArrowCircleDown from "../../assets/img/icons/arrow-circle-down.svg";
import ArrowCircleUp from "../../assets/img/icons/arrow-circle-up.svg";

const Accordion = ({sup, title, children}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setShowDescription(!showDescription);
        setHeightState(
            showDescription ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div
            className="accordion-item"
            style={{paddingBottom: `${showDescription ? "20px" : 0}`}}
        >
            <div className="accordion-header">
                <sup className="accordion-sup">{sup}</sup>
                <p className="accordion-title">
                    {title}
                </p>
                <img
                    className="accordion-icon"
                    src={!showDescription ? ArrowCircleDown : ArrowCircleUp}
                    alt={!showDescription ? "show" : "hide"}
                    onClick={() => toggleAccordion()}
                />
            </div>
            <div
                className={`accordion-description ${showDescription ? "active" : ""}`}
                style={{
                    maxHeight: `${setHeight}`,
                }}
                ref={content}
            >
                {children}
            </div>
        </div>
    )
}

export default Accordion;