import { StyledAbout } from "./AboutSection.styled";
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";
import AboutImageMob from "../../assets/images/author-img-mob.webp";
import AboutImagePc from "../../assets/images/author-img-pc.webp";




export const About = ({propsId}) => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();    



    return (
        <StyledAbout id={propsId}>
            <div className="about-title-cont">
                <h2 className="section-title">
                    {t('about.title')}
                </h2>
                <span className="title-undescore"/>
            </div>
            <div className="about-content-block">
                <div className="about-image-cont">
                    {renderMob ? (
                        <img className="about-img" src={AboutImageMob} alt="Hero Image"width={370} height={457} loading="lazy"/>
                    ) : (
                        <img className="about-img" src={AboutImagePc} alt="Hero Image"width={411} height={507} loading="lazy"/>
                    )}
                </div>
                <div className="about-text-cont">
                    <p className="about-text-above">{t('about.textOne')}</p>
                    <p className="about-text-lower">{t('about.founder')}</p>
                </div>
            </div>
        </StyledAbout>
    )
}