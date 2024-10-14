import {Link, useLocation} from "react-router-dom";
import logoWhite from "../../assets/img/logo_white.svg";
import logoBlack from "../../assets/img/logo_black.svg"
import Button from "../../components/Button/Button";
import {useTranslation} from "react-i18next";
import "./Header.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

const Header = ({inverseColors = false}) => {
    const location = useLocation();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // console.log('LOCATION', location)
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        // console.log(lng)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();

    const scrollByClick = (id) => {
        if (window.location.pathname === '/projects'){
            navigate('/#contact-form');

        } else {
            const element = document.getElementById(id);
            if (element){
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }

    const renderLinksButtons = () => {
      return (
          <div className='projects-links-button'>
              <div className={`language-selector ${inverseColors ? 'black-text' : ''}` }>
                  <Link
                      className={`${inverseColors ? 'black-text' : ''} ${i18n.language === 'en' ? "bold" : ""}`}
                      onClick={()=> changeLanguage('en')}
                  >
                      EN
                  </Link> /
                  <Link
                      className={`${inverseColors ? 'black-text' : ''} ${i18n.language === 'sr' ? "bold" : ""}`}
                      onClick={()=> changeLanguage('sr')}
                  >
                      SR
                  </Link>
              </div>
              <Link
                  to={"/projects"}
                  className={`language-selector ${location.pathname === '/projects'? 'bold' : ''} ${inverseColors ? 'black-text' : ''}`}
              >
                  {t('Projects')}
              </Link>
          </div>
      )
    };

    return (
        <header className="header">
            <Link style={{zIndex: 1}} to="/">
                <img className="logo" src={inverseColors ? logoBlack : logoWhite} alt="IT and Design"/>
            </Link>
            <div className={`buttons-block`}>
                {screenWidth > 483 && renderLinksButtons()}
                <Button onClick={() => scrollByClick('contact')} inverseColors={inverseColors}/>
            </div>
            {screenWidth <= 483 && renderLinksButtons()}
        </header>
    )
}

export default Header;
