import { StyledAbout } from "./AboutSection.styled";
import { useTranslation } from 'react-i18next';
import useWindowSize from "../../custom-hooks/hooks";
import AboutImageMob from "../../assets/images/author-img-mob.webp";
import AboutImagePc from "../../assets/images/author-img-pc.webp";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useInView } from 'react-intersection-observer';




export const About = ({propsId}) => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();
    const [titleItem, titleItem1InView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.5,
    });    
    const [refItem, refItem1InView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    }); 


    return (
        <StyledAbout id={propsId}>
            <SectionTitle
                title={t('about.title')}
                titleItem={titleItem}
                titleItem1InView={titleItem1InView}
            />
            <div className="about-content-block" ref={refItem}>
                <div className={`about-image-cont ${refItem1InView? "active-about-image-cont" : ""}`}>
                    {renderMob ? (
                        <img className="about-img" src={AboutImageMob} alt="Hero Image"width={370} height={457} loading="lazy"/>
                    ) : (
                        <img className="about-img" src={AboutImagePc} alt="Hero Image"width={411} height={507} loading="lazy"/>
                    )}
                </div>
                <div className="about-text-cont">
                    <p className={`about-text-above ${refItem1InView ? "active-about-text-above" : ""}`}>{t('about.textOne')}</p>
                    <p className={`about-text-lower ${refItem1InView ? "active-about-text-lower" : ""}`}>{t('about.founder')}</p>
                </div>
            </div>
        </StyledAbout>
    )
}