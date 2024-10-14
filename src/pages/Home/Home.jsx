import "./Home.css";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import Accordion from "../../components/Accordion/Accordion";
import Modal from "../../components/Modal/Modal";
import One from "../../assets/img/icons/1_Point.svg";
import Two from "../../assets/img/icons/2_Point.svg";
import Three from "../../assets/img/icons/3_Point.svg";
import Four from "../../assets/img/icons/4_Point.svg";
import Arrow from "../../assets/img/icons/arrow-hero.svg";
import SpiralHero from "../../assets/img/spiral_1.svg";
import SpiralAccordion from "../../assets/img/spiral_2.svg";
import SpiralCardOne from "../../assets/img/spiral_3.svg";
import GreenSpiralMobile from "../../assets/img/green_mobile.svg";
import BlackSpiralMobile from "../../assets/img/black_mobile.svg";
import BlueSpiralMobile from "../../assets/img/blue_mobile.svg"
import Vector from "../../assets/img/Vector.svg";
import {useTranslation} from "react-i18next";
import Header from "../../Layout/Header/Header";

const Home = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    useEffect(()=> {
        if (window.location.hash === "#contact-form"){
            const element = document.getElementById('contact');
            if (element){
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [window.location]);
    const location = useLocation();

    const hash = location.hash;

    const renderDevDescription = () => {
        return (
            <>
                <span className="accordion-bold">{t('Infrastructure')}</span>
                <p style={{marginBottom: 23}}>{t('We use VDS or cloud providers like AWS, Google Cloud, Yandex Cloud, and Selectel to develop our&nbsp;solutions.')}</p>
                <span className="accordion-bold">{t('Frontend')}</span>
                <p style={{marginBottom: 23}}>{t('We use the latest technologies like Vanilla JS, React, and&nbsp;Server-Side Rendering (SSR) to develop fast, responsive and&nbsp;dynamic frontend solutions.')}</p>
                <span className="accordion-bold">{t('Backend')}</span>
                <p>{t('Whether you need a monolithic or microservices architecture, our team can help you make the right choice for your project.')}</p>
            </>
        )
    }

    const accordionInfo = [
        {
            sup: 1,
            title: 'Architecture',
            description: 'Our team can provide you with a comprehensive software project architecture development service that will help you achieve your goals.'
        },
        {
            sup: 2,
            title: 'Design',
            description: 'Our team provides comprehensive web design services to create visually stunning, user-friendly websites that align with your business goals and target audience.'
        },
        {
            sup: 3,
            title: 'Development',
            description: renderDevDescription()
        },
        {
            sup: 4,
            title: 'Testing',
            description: 'Our team performs thorough testing to ensure that the product meets the requirements and works as expected.\n Don\'t let lack of in-house development expertise hold you back. Let us build your custom software today.'
        },
    ]
    useEffect(() => {
        if (hash === '#contact') {
            const element = document.getElementById('contact');
            element.scrollIntoView({behavior: 'smooth'});
        }
    }, [hash]);

    const scrollByClick = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({behavior: 'smooth'});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        async function send () {
            await fetch('https://itdrs.tech/sendMessage/',{
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                    {from: email, message: message}
                )
            })
        }
        send();
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 4000);
    }

    return (
        <div className="home">
            <div className="hero">
                <img className="hero-spiral" src={SpiralHero} alt={""}/>
                <div className="content">
                    <Header />
                    <h1 className="hero-title">{t('We offer')} <span className="highlight">{t('full development cycle')}</span> {t('from design to testing or we are ready to join your project at any stage')}
                        <img
                            className="hero-arrow"
                            src={Arrow}
                            alt={""}
                            onClick={() => scrollByClick('accordion')}
                        />
                    </h1>
                </div>
            </div>

            <div id="accordion" className="accordion-section">
                <img className="accordion-spiral" src={SpiralAccordion} alt={""}/>
                <div className="accordion-wrap">
                    <div className="accordion-block">
                        <>
                            {accordionInfo.map(({sup, title, description}, idx) => (
                                <Accordion
                                    key={idx}
                                    sup={sup}
                                    title={t(title)}
                                >
                                    {typeof description === 'string' ? t(description) : description}
                                </Accordion>
                            ))}
                        </>
                    </div>
                </div>
            </div>

            <div
                className="content"
                style={{display: "flex", justifyContent: "flex-end"}}
            >
                <button
                    className="call-to-action"
                    onClick={() => scrollByClick('contact')}
                >
                    {t('Build my solution')}
                </button>
            </div>

            <div className="cards content">
                <div className="card green">
                    <div className="card-content">
                        <div className="card-header">
                            <img className="card-icon" src={One} alt={""}/>
                            <h3 className="card-title">{t('Architecture')}</h3>
                        </div>
                        <div style={{textAlign: "left"}}>
                            <div className="card-description">
                                {t('You have a super 100% fantastic idea of a product you want, but do not know what you' +
                                ' need to implement it? Should it be a standalone program or a cloud solution? We will' +
                                ' listen to your need and offer your most suitable solution from which blocks it should be' +
                                ' build.')} <span className="bold">{t('Message us to get an architectural and product development advice.')}</span>
                            </div>
                        </div>
                    </div>
                    <img className="spiral" src={SpiralCardOne} alt={""}/>
                    <img className="green-spiral-mobile" src={GreenSpiralMobile} alt={""}/>
                </div>

                <div className="card black">
                    <div className="card-content">
                        <div className="card-header">
                            <img className="card-icon" src={Two} alt={""}/>
                            <h3 className="card-title">{t('Integration')}</h3>
                        </div>
                        <div style={{textAlign: "left"}}>
                            <p className="card-description">
                                {t('You have several systems which need to exchange information and work together? We can ' +
                                'investigate and offer options how to deal with it, including adapters, API bridges, etc.')}
                                <br/><span className="bold">{t('Message us to get an intergration advice.')}</span>
                            </p>
                        </div>
                    </div>
                    <img className="black-spiral-mobile" src={BlackSpiralMobile} alt={""}/>
                </div>

                <div className="card blue">
                    <div className="card-content">
                        <div className="card-header">
                            <img className="card-icon" src={Three} alt={""}/>
                            <h3 className="card-title">{t('Development')}</h3>
                        </div>
                        <div style={{textAlign: "left"}}>
                            <p className="card-description">
                                {t('You have a software your company works on, but the deadline is near and there is still ' +
                                'much to be done? Lets see how the scope can be optimized and which resources you need to ' +
                                'finish your tasks in time.')} <span
                                className="bold">{t('Message us to get development advice.')}</span>
                            </p>
                        </div>
                    </div>
                    <img className="blue-spiral-mobile" src={BlueSpiralMobile} alt={""}/>
                </div>

                <div className="card lightBlue">
                    <div className="card-content">
                        <div className="card-header">
                            <img className="card-icon" src={Four} alt={""}/>
                            <h3 className="card-title">{t('New technologies')}</h3>
                        </div>
                        <div style={{textAlign: "left"}}>
                            <div className="card-description">
                                {t('You have a running business and you see how you can get an edge over your competitors, ' +
                                'but you need an instrument for it. We can help you get a leverage with new ' +
                                'technology.')} <span className="bold">{t('Message us to get competitive advantage with technological solutions.')}</span>
                            </div>
                        </div>
                    </div>
                    <img className="lightBlue-spiral-mobile" src={BlueSpiralMobile} alt={""}/>
                </div>
                <img className="vector" src={Vector} alt={""}/>
            </div>

            <div id="contact" className="contact-wrapper">
                <hr/>
                <div
                    className="contact-block"
                    style={{alignItems: !showModal ? "baseline" : "flex-start"}}
                >
                    <h3 id="contact-form" className="contact-title">{t('Contact us')}</h3>
                    <div className="contact-form-wrapper">
                        {!showModal ? (
                            <form className={`contact-form ${!showModal && "active"}`} onSubmit={handleSubmit}>
                                <input
                                    required
                                    className="contact-form-input email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <textarea
                                    required
                                    className="contact-form-input message"
                                    placeholder={t("Message")}
                                    onChange={e => setMessage(e.target.value)}
                                />
                                <button className="contact-form-button">
                                    {t('Send')}
                                </button>
                            </form>
                        ) : (
                            <Modal showModal={showModal}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
