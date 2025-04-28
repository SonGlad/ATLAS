import { StyledTitle } from "./SectionTitle.styled";


export const SectionTitle = ({title}) => {


    return(
        <StyledTitle>
            <h2 className="section-title">{title}</h2>
            <span className="title-undescore"/>
        </StyledTitle>
    )
};