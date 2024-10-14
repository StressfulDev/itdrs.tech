import "./CookieCard.css";

const CookieCard = ({area, icon, title, width, children}) => {
    return (
        <div className="cookie-card" style={{gridArea: area}}>
            <div className="cookie-card-content">
                <div style={{display: "flex", alignItems: "baseline"}}>
                    <img className="cookie-card-icon" src={icon} alt={"cookie"}/>
                    <h3 className="cookie-card-title">{title}</h3>
                </div>
                {children}
            </div>
        </div>
    )
}

export default CookieCard;
