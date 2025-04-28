import { StyledLocations } from "./LocationSection.styled";
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";
import AnotherDreamMob from "../../assets/images/another-dream-mob.webp";
import AnotherDreamPc from "../../assets/images/another-dream-pc.webp";
import StoneWallMob from "../../assets/images/stone-wall-mob.webp";
import StoneWallPc from "../../assets/images/stone-wall-pc.webp";
import { SectionTitle } from "../SectionTitle/SectionTitle";




export const Locations = ({propsId}) => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize(); 


    return(
        <StyledLocations id={propsId}>
            <SectionTitle
                title={t('locations.title')}
            />
            <ul className="location-list">
                <li className="location-item">
                    <h3 className="location-name">{t('locations.location1')}</h3>
                    {renderMob ? (
                        <div className="location-img-cont">
                            <img className="location-image" src={StoneWallMob} alt="Stone Wall" width={370} height={586} loading="lazy"/>                  
                        </div>
                    ) : (
                        <div className="location-img-cont">
                            <img className="location-image" src={StoneWallPc} alt="Stone Wall" width={410} height={617} loading="lazy"/>                  
                        </div>               
                    )}
                </li>
                <li className="location-item">
                    <h3 className="location-name">{t('locations.location2')}</h3>
                    {renderMob ? (
                        <div className="location-img-cont">
                            <img className="location-image" src={AnotherDreamMob} alt="Another Dream" width={370} height={586} loading="lazy"/>                  
                        </div>                
                    ) : (
                        <div className="location-img-cont">
                            <img className="location-image" src={AnotherDreamPc} alt="Another Dream" width={410} height={617} loading="lazy"/>                  
                        </div>               
                    )}
                </li>
            </ul>
        </StyledLocations>
    )
};