import { StyledLocations } from "./LocationSection.styled";
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";
import AnotherDreamMob from "../../assets/images/another-dream-mob.webp";
import AnotherDreamPc from "../../assets/images/another-dream-pc.webp";
import StoneWallMob from "../../assets/images/stone-wall-mob.webp";
import StoneWallPc from "../../assets/images/stone-wall-pc.webp";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useInView } from 'react-intersection-observer';



export const Locations = ({propsId}) => {
    const { t } = useTranslation();
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


    return(
        <StyledLocations id={propsId}>
            <SectionTitle
                title={t('locations.title')}
                titleItem={titleItem}
                titleItem1InView={titleItem1InView}
            />
            <ul className="location-list">
                <li className="location-item" ref={refItemOne}>
                    <h3 className={`location-name ${refItemOneInView ? "active-location-name" : ""}`}>{t('locations.location1')}</h3>
                    <div className={`location-img-cont ${refItemOneInView ? "active-location-img-cont" : ""}`}>
                        {renderMob ? (
                            <img className="location-image" src={StoneWallMob} alt="Stone Wall" width={370} height={586} loading="lazy"/>                  
                        ) : (
                            <img className="location-image" src={StoneWallPc} alt="Stone Wall" width={410} height={617} loading="lazy"/>                  
                        )}
                    </div>
                </li>
                <li className="location-item" ref={refItemTwo}>
                    <h3 className={`location-name ${refItemTwoInView ? "active-location-name" : ""}`}>{t('locations.location2')}</h3>
                    <div className={`location-img-cont ${refItemTwoInView ? "active-location-img-cont" : ""}`}>
                        {renderMob ? (
                            <img className="location-image" src={AnotherDreamMob} alt="Another Dream" width={370} height={586} loading="lazy"/>                  
                        ) : (
                            <img className="location-image" src={AnotherDreamPc} alt="Another Dream" width={410} height={617} loading="lazy"/>                  
                        )}
                    </div>                          
                </li>
            </ul>
        </StyledLocations>
    )
};