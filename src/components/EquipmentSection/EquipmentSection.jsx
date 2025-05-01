import { StyledEquipment } from "./EquipmentSection.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import useWindowSize from "../../custom-hooks/hooks";
import { useTranslation } from 'react-i18next';
import Equipment1Mob from "../../assets/images/equipment1-mob.webp";
import Equipment2Mob from "../../assets/images/equipment2-mob.webp";
import Equipment3Mob from "../../assets/images/equipment3-mob.webp";
import Equipment4Mob from "../../assets/images/equipment4-mob.webp";
import Equipment5Mob from "../../assets/images/equipment5-mob.webp";
import Equipment6Mob from "../../assets/images/equipment6-mob.webp";
import Equipment1Pc from "../../assets/images/equipment1-pc.webp";
import Equipment2Pc from "../../assets/images/equipment2-pc.webp";
import Equipment3Pc from "../../assets/images/equipment3-pc.webp";
import Equipment4Pc from "../../assets/images/equipment4-pc.webp";
import Equipment5Pc from "../../assets/images/equipment5-pc.webp";
import Equipment6Pc from "../../assets/images/equipment6-pc.webp";
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from "react";



const equipmentData = [
    {equipment1Mob: Equipment1Mob,
        equipment1Pc: Equipment1Pc,
        equipment2Mob: Equipment2Mob,
        equipment2Pc: Equipment2Pc
    },
    {equipment1Mob: Equipment3Mob,
        equipment1Pc: Equipment3Pc,
        equipment2Mob: Equipment4Mob,
        equipment2Pc: Equipment4Pc
    },
    {equipment1Mob: Equipment5Mob,
        equipment1Pc: Equipment5Pc,
        equipment2Mob: Equipment6Mob,
        equipment2Pc: Equipment6Pc
    }
]



export const Equipment = ({propsId}) => {
    const { t } = useTranslation();
    const { renderMob } = useWindowSize();
    const containerRefs = useRef([]);
    const [titleItem, titleItem1InView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.5,
    }); 
    const [refItem, refItemInView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    });


    const parallaxEffect = (container, tiltEffect) => {
        const size = [300, 360];
        const [w, h] = size;
    
        const setProperty = (p, v) => {
            container.style.setProperty(p, v);
        };
    
        const handleMouseMove = (event) => {
            const { offsetX, offsetY } = event;
            let X, Y;
    
            if (tiltEffect === "reverse") {
                X = ((offsetX - (w / 2)) / 3) / 3;
                Y = (-(offsetY - (h / 2)) / 3) / 3;
            } else {
                X = (-(offsetX - (w / 2)) / 3) / 3;
                Y = ((offsetY - (h / 2)) / 3) / 3;
            }
    
            setProperty('--rY', X.toFixed(2));
            setProperty('--rX', Y.toFixed(2));
            setProperty('--bY', (80 - (X / 4).toFixed(2)) + '%');
            setProperty('--bX', (50 - (Y / 4).toFixed(2)) + '%');
        };
    
        const handleMouseEnter = () => {
            container.classList.add("container--active");
        };
    
        const handleMouseLeave = () => {
            container.classList.remove("container--active");
            setProperty('--rY', 0);
            setProperty('--rX', 0);
            setProperty('--bY', '80%');
            setProperty('--bX', '50%');
        };
    
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
    
        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    };


    useEffect(() => {
        containerRefs.current.forEach((container, index) => {
            const tiltEffect = index % 2 === 0 ? "reverse" : "normal";
            parallaxEffect(container, tiltEffect);
        });
    }, []);
    
    
    
    return (
        <StyledEquipment id={propsId}>
            <SectionTitle
                title={t('equipment.title')}
                titleItem={titleItem}
                titleItem1InView={titleItem1InView}
            />
            <ul className="equipment-list" ref={refItem}>
                {equipmentData.map((data, index) => {
                    const images = renderMob
                        ? [data.equipment1Mob, data.equipment2Mob]
                        : [data.equipment1Pc, data.equipment2Pc];

                    return (
                        <li key={index} 
                            className={`equipment-item ${refItemInView ? "active-equipment-item" : ""}`}
                            style={{ '--i': index + 1}}
                        >
                            {images.map((src, i) => {
                                const globalIndex = index * 2 + i + 1;

                                return (
                                    <div key={i}
                                        className="equipment-img-cont"
                                        ref={(el) => el && (containerRefs.current[globalIndex - 1] = el)}
                                        style={{ '--i': globalIndex }}
                                    >
                                        <img className="equipment-img"
                                            src={src}
                                            alt="Equipment Image"
                                            width={renderMob ? 177 : 302}
                                            height={renderMob ? 190 : 327}
                                            loading="lazy"
                                        />
                                    </div>
                                );
                            })}
                        </li>
                    );
                })}
            </ul>
        </StyledEquipment>
    )
};