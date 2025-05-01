import { StyledTitle } from "./SectionTitle.styled";
import { forwardRef } from "react";


export const SectionTitle = forwardRef(({title, titleItem, titleItem1InView}, ref) => {


    return(
        <StyledTitle ref={titleItem}>
            <h2 className={`section-title ${titleItem1InView ? "active-section-title" : ""}`}  ref={ref}>{title}</h2>
            <span className={`title-undescore ${titleItem1InView ? "active-title-underscore" : ""}`}/>
        </StyledTitle>
    )
});