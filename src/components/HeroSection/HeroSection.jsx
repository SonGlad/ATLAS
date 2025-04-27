import { StyledHero } from "./HeroSection.styled";


export const Hero = ({propsId}) => {


    return (
        <StyledHero id={propsId}>
            <h2>ITS A HERO SECTION</h2>
        </StyledHero>
    )
};