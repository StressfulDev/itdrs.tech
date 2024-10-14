import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

import './Footer.css';
import logoFooter from "../../assets/img/logo_white.svg";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <footer className="footer">
            <div className="footer-wrap">
                <Link to="/">
                    <img className="footer-logo" src={logoFooter} alt="IT & Design"/>
                </Link>
                <div className="footer-contacts-wrap">
                    <div className="footer-contacts">
                        <p className="footer-title footer-mb">{t('Contacts')}</p>
                        <p className="footer-mb">IT and Design RS d.o.o.</p>
                        <p className="footer-mb">{t('Belgrade')}, Bulevard Mihajla<br/> Pupina 10A</p>
                        <p className="phone"><a href="tel:0629382340">0 629 38 23 40</a></p>
                    </div>
                    <p className="cookie">
                        <Link to="/cookie-policy">{t('Cookie Policy')}</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
