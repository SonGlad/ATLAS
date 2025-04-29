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
import Equipment5Pc from "../../assets/images/equipment5-pc.jpg";
import Equipment6Pc from "../../assets/images/equipment6-pc.jpg";



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
    
    
    
    return (
        <StyledEquipment id={propsId}>
            <SectionTitle
                title={t('equipment.title')}
            />
            <ul className="equipment-list">
                {equipmentData && equipmentData.map(({equipment1Mob, equipment1Pc, equipment2Mob, equipment2Pc}, index) => (
                    <li key={index} className="equipment-item">
                        <div className="equipment-img-cont">
                            {renderMob ? (
                                <img className="equipment-img" src={equipment1Mob} alt="Equipment Image"width={177} height={190} loading="lazy"/>
                            ) : (
                                <img className="equipment-img" src={equipment1Pc} alt="Equipment Image"width={302} height={327} loading="lazy"/>
                            )}
                        </div>
                        <div className="equipment-img-cont">
                            {renderMob ? (
                                <img className="equipment-img" src={equipment2Mob} alt="Equipment Image"width={177} height={190} loading="lazy"/>
                            ) : (
                                <img className="equipment-img" src={equipment2Pc} alt="Equipment Image"width={302} height={327} loading="lazy"/>
                            )}
                        </div>
                    </li> 
                ))}
            </ul>
        </StyledEquipment>
    )
};