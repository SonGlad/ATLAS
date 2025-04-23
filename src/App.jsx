import {Container} from "./components/Container/Container";
import {Section} from "./components/Section/Section";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/HeroSection/HeroSection";
import { About } from "./components/AboutSection/AboutSection";
import { Locations } from "./components/LocationsSection/LocationSection";
import { Equipment } from "./components/EquipmentSection/EquipmentSection";
import { Contacts } from "./components/ContactsSection/ContactSection";
import { Footer } from "./components/Footer/Footer";



export const App= () => {
  return (
    <>
      <Header/>
      <Section>
        <Container>
          <Hero/>
        </Container>
      </Section>
      <Section>
        <Container>
          <About/>
        </Container>
      </Section>
      <Section>
        <Container>
          <Locations/>
        </Container>
      </Section>
      <Section>
        <Container>
          <Equipment/>
        </Container>
      </Section>
      <Section>
        <Container>
          <Contacts/>
        </Container>
      </Section>
      <Footer/>
    </>
  );
};


