import { StyledLocations } from "./LocationSection.styled";
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";
import AnotherDreamMob from "../../assets/images/another-dream-mob.webp";
import StoneWallMob from "../../assets/images/stone-wall-mob.webp";
// import AnotherDreamPc from "../../assets/images/another-dream-pc.webp";
// import StoneWallPc from "../../assets/images/stone-wall-pc.webp";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useInView } from 'react-intersection-observer';
import { PanoramaViever } from "./PanoramaViever";
import { useRoute, useLocation } from 'wouter';
import { useEffect } from "react";



export const Locations = ({propsId}) => {
    const { t } = useTranslation();
    const [, params] = useRoute('/item/:id')
    const [location, setLocation] = useLocation()
    const { renderMob } = useWindowSize(); 
    const [titleItem, titleItem1InView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.5,
    }); 
    const [refItemOne, refItemOneInView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    });
    const [refItemTwo, refItemTwoInView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    }); 


    useEffect(() => {
        if (location !== '/') {
            setLocation('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return(
        <StyledLocations id={propsId}>
            <SectionTitle
                title={t('locations.title')}
                titleItem={titleItem}
                titleItem1InView={titleItem1InView}
            />
            {renderMob ? (
                <ul className="location-list">
                    <li className="location-item" ref={refItemOne}>
                        <h3 className={`location-name ${refItemOneInView ? "active-location-name" : ""}`}>{t('locations.location1')}</h3>
                        <div className={`location-img-cont ${refItemOneInView ? "active-location-img-cont" : ""}`}>
                            <img className="location-image" src={StoneWallMob} alt="Stone Wall" width={370} height={586} loading="lazy"/>                  
                        </div>
                    </li>
                    <li className="location-item" ref={refItemTwo}>
                        <h3 className={`location-name ${refItemTwoInView ? "active-location-name" : ""}`}>{t('locations.location2')}</h3>
                        <div className={`location-img-cont ${refItemTwoInView ? "active-location-img-cont" : ""}`}>
                            <img className="location-image" src={AnotherDreamMob} alt="Another Dream" width={370} height={586} loading="lazy"/>                  
                        </div>                          
                    </li>
                </ul>
            ) : (
                <div id="locations">
                    {params && (
                        <a style={{ 
                                position: 'absolute', 
                                top: 40, 
                                left: 60, 
                                fontSize: '36px',
                                fontFamily: 'Italiana', 
                                cursor: "pointer", 
                                zIndex: "1", 
                                outlineWidth: 50,
                                outlineColor: "white"
                            }} onClick={() => setLocation('/')}>
                            {t('locations.back')}
                        </a>
                    )}
                    <PanoramaViever/>
                </div>
            )}
        </StyledLocations>
    )
};


