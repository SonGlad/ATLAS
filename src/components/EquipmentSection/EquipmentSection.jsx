import { StyledEquipment } from "./EquipmentSection.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useTranslation } from 'react-i18next';



export const Equipment = ({propsId}) => {
    const { t } = useTranslation();

    
    
    return (
        <StyledEquipment id={propsId}>
            <SectionTitle
                title={t('equipment.title')}
            />
        </StyledEquipment>
    )
};