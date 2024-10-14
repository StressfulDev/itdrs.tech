import React, {FC, useEffect, useState} from "react";
import One from "../../assets/img/icons/1_Point.svg";
import Two from "../../assets/img/icons/2_Point.svg";
import Three from "../../assets/img/icons/3_Point.svg";
import Four from "../../assets/img/icons/4_Point.svg";
import {useTranslation} from "react-i18next";
import './Projects.css';
import Header from "../../Layout/Header/Header";
import ProjectCardWide1 from "../Cookie/components/ProjectCards/ProjecsCardWide1/ProjectCardWide1";
import ProjectCardNarrow from "../Cookie/components/ProjectCards/ProjecsCardNarrow/ProjectCardNarrow";
import AnimatedBars from "../../components/AnimatedBars/AnimatedBars";
import SpiralLogo from "../../assets/img/logo_spiral_1.svg";
import VectorGreen from "../../assets/img/VectorGreen.svg";
import AnimatedCoins from "../../components/AnimatedCoins/AnimatedCoins";
import AnimatedTarget from "../../components/AnimatedTarget/AnimatedTarget";
import AnimatedVerticalCoins from "../../components/AnimatedVerticalCoins/AnimatedVerticalCoins";

const Projects: FC<any> = () => {
  const {t} = useTranslation();

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [backgroundSize, setBackgroundSize] = useState(697);
  const [backgroundPosition, setBackgroundPosition] = useState('0%');

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= 1600 && screenWidth > 1500) {
      setBackgroundSize(650);
    } else if (screenWidth <= 1500 && screenWidth > 1280) {
      setBackgroundSize(580);
    } else if (screenWidth <= 1280 && screenWidth > 1100) {
      setBackgroundSize(500);
    } else if (screenWidth <= 1100 && screenWidth > 1024) {
      setBackgroundSize(490);
    } else if (screenWidth <= 1024 && screenWidth > 744) {
      setBackgroundSize(440);
      setBackgroundPosition('24%');
    } else if (screenWidth <= 744 && screenWidth > 550) {
      setBackgroundSize(300);
    } else if (screenWidth <= 550 && screenWidth > 480) {
      setBackgroundSize(330);
      setBackgroundPosition('37%');
    } else if (screenWidth <= 400 && screenWidth > 360) {
      setBackgroundPosition('30%');
    }
  }, [screenWidth]);

  const getCountBars = (width: number) => {
    if (width <= 1430 && width > 980) {
      return 6;
    } else if (width <= 980) {
      return 5;
    } else {
      return 8;
    }
  }

  return (
    <div className='content-page-wrapper'>
      <div className='content projects-header'>
        <Header inverseColors={true}/>
      </div>
      <div className='top-block top-block-projects top-block-hero'>
        <h1 className='top-block-title title-integration'>{t('Integration')}</h1>
        <div className='top-description-container'>
          Our team has expertise in integrating with banks via API to collect bank account transaction information.
          This integration allows for automated retrieval of financial data, which can then be used for financial
          reporting, accounting, and analytics. The integration also ensures secure and efficient data transfer,
          reducing the risk of errors and saving time compared to manual data entry.
        </div>
      </div>
      <div className='project-cards'>
        <ProjectCardWide1
          area='one'
          icon={One}
          title='Virtua Gym system & the Holded accounting system'
          width={650}
          labels={['finance', 'accounting', 'adapters']}
          backgroundColor='#000000'
          color='#ffffff'
          screenWidth={screenWidth}
          text='Our team recently developed an adapter between the Virtua Gym system and the Holded accounting system. This adapter seamlessly forwards sales and client information from the VirtuaGym to Holded, ensuring that all data is accurate and up-to-date. This solution allows for streamlined data management and improved financial reporting capabilities for our client. By implementing this adapter, our client has been able to save time and resources previously spent on manual data transfer'
        >
          <AnimatedBars
            count={getCountBars(screenWidth)}
            minHeight={50}
            maxHeight={400}
            isRelative={false}
            barsClassName='animatedChartIntegration'
          />
        </ProjectCardWide1>
        <ProjectCardNarrow
          area='two'
          icon={Two}
          title='E&#8209;signature systems'
          width={650}
          labels={['adapters', 'signatures']}
          backgroundColor='#388EFF'
          color='#000000'
          text='Our team has experience in integrating with electronic signature systems to provide services for exchanging documents signed with qualified encrypted signatures. This integration allows for secure and legally binding digital document signing, streamlining the document exchange process and increasing efficiency for our clients. The integration ensures compliance with relevant laws and regulations, making it ideal for industries such as finance, healthcare and legal'
          labelClassname='labels-container-direction'
          descriptionClassname='description-esignature'
          backgroundImage={SpiralLogo}
          backgroundSize={backgroundSize}
          backgroundPosition={backgroundPosition}
        >
        </ProjectCardNarrow>
        <ProjectCardNarrow
          area='three'
          icon={Three}
          title='Billing system'
          width={650}
          labels={['finance', 'adapters']}
          labelClassname='labels-container-direction'
          descriptionClassname='description-billing'
          backgroundColor='#A8CCFC'
          color='#000000'
          text='A client which is rendering IT services had its own billing service and was looking for a solution to integrate bank account information with the billing system. He did not want to use any SaaS solution because data protection was critical. We developed an on-premise scalable solution, which supports both manual and automated data input and integrated it with a given clients billing systems'
        >
          <AnimatedCoins screenWidth={screenWidth}/>
        </ProjectCardNarrow>
        <ProjectCardWide1
          area='four'
          icon={Four}
          title='Clients personal space'
          width={650}
          labels={['data', 'cRM', 'adapters']}
          screenWidth={screenWidth}
          backgroundColor='#BFFDE8'
          color='#000000'
          labelClassname='labels-container-target'
          rightBlockClassname='right-block-target'
          text='A client had a CRM system, where he had his leads and clients registered, and a separate website. We implemented a clients personal space where they could login and see their data on visits and performance streamlined from CRM system'
        >
          <AnimatedTarget screenWidth={screenWidth}/>
        </ProjectCardWide1>
      </div>

      <div className='top-block top-block-projects'>
        <h1 className='top-block-title'>{t('Iot')}</h1>
        <div className='top-description-container'>
          Video analysis is a major part of data driven economy. It requires various solutions in web, IoT and
          robotics.
        </div>
      </div>
      <div className="project-cards">
        <ProjectCardWide1
          area='five'
          icon={One}
          title='Web interface for managers and operators'
          width={650}
          labels={['ML', 'video', 'IoT']}
          backgroundColor='#388EFF'
          color='#000000'
          screenWidth={screenWidth}
          cardDescription='description-vertical-coins'
          rightBlockClassname='right-block-vertical-coins'
          text='A client asked for a solution to support video events manual markup for further ML and statistical processing and analysis. Together we implemented a system which provides a web interface for managers and operators, who can collaborate on different tasks of marking up event on videos and sharing this data in different formats'
        >
          <AnimatedVerticalCoins screenWidth={screenWidth}/>
        </ProjectCardWide1>
      </div>

      <div className='top-block top-block-projects'>
        <h1 className='top-block-title'>{t('Web')}</h1>
        <div className='top-description-container'>
          Video analysis is a major part of data driven economy. It requires various solutions in web, IoT and
          robotics.
        </div>
      </div>
      <div className='project-cards'>
        <ProjectCardNarrow
          area='six'
          icon={One}
          title='A software for video cameras'
          width={650}
          labels={['Web', 'video']}
          rightBlockClassname='right-block-web'
          projectCardTitleWrap='project-card-title-wrap-web'
          labelClassname='labels-container-direction labels-container-web'
          paragraphClassName='paragraph-web'
          backgroundColor='#000000'
          color='#ffffff'
          text='We developed a software to manage and run video cameras for our client. It encompassed an solution tailored to a specific camera designed by our client, web-application to control and manage the camera, together with the server software to control the cameras network and status'
        >
          <AnimatedBars count={screenWidth < 1280 ? 5 : 6} minHeight={20} maxHeight={120} isRelative={true}/>
        </ProjectCardNarrow>
        <ProjectCardNarrow
          area='seven'
          icon={Two}
          title={`Optimized architecture, new\u00A0pages & SEO`}
          width={650}
          labels={['reverse engineering', 'web']}
          labelClassname='labels-container-direction'
          backgroundColor='#BFFDE8'
          color='#000000'
          text='A client with a highly sophisticated website asked to implement new pages and add SEO optimizations. However the project had no source code and had only a built obfuscated JS SPA version deployed. We analyzed the architecture, reverse engineered the logic behind the code and managed to add the necessary changes in a timely manner'
          backgroundImage={VectorGreen}
        />
      </div>
    </div>
  )
}
export default Projects;
