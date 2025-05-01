import { StyledHero } from "./HeroSection.styled";
import { useTranslation } from 'react-i18next';
import HeroImageMob from "../../assets/images/hero-img-mob.webp";
import HeroImagePc from "../../assets/images/hero-img-pc.webp";
import useWindowSize from "../../custom-hooks/hooks";
import { useInView } from 'react-intersection-observer';



export const Hero = ({propsId, openModal}) => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();
    const [refItem, refItem1InView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    });


    return (
        <StyledHero id={propsId} ref={refItem}>
            <div className="hero-cont">
                <div className="hero-text-cont">
                    <h1 className={`hero-title ${refItem1InView ? "active-hero-title" : ""}`}>{t('hero.name')}</h1>
                    <p className={`hero-text ${refItem1InView ? "active-hero-text" : ""}`}>{t('hero.slogan')}</p>
                </div>
                <div className={`hero-image-cont ${refItem1InView ? "active-hero-cont" : ""}`}>
                    {renderMob ? (
                        <img className="hero-img" src={HeroImageMob} alt="Hero Image"width={340} height={527} loading="lazy"/>
                    ) : (
                        <img className="hero-img" src={HeroImagePc} alt="Hero Image"width={628} height={530} loading="lazy"/>
                    )}
                </div>
                <button className={`hero-button ${refItem1InView ? "active-hero-btn" : ""}`}
                    type="buttton" 
                    aria-expanded="false"
                    aria-controls="booking-button"
                    aria-label="Booking Button"
                    onClick={openModal}
                >
                    {t('hero.order')}
                </button>
            </div>
        </StyledHero>
    )
};