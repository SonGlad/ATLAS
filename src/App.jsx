import {Container} from "./components/Container/Container";
import {Section} from "./components/Section/Section";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/HeroSection/HeroSection";
import { About } from "./components/AboutSection/AboutSection";
import { Locations } from "./components/LocationsSection/LocationSection";
import { Equipment } from "./components/EquipmentSection/EquipmentSection";
import { Contacts } from "./components/ContactsSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";



export const App= () => {
  const [isModal, setModal] = useState(false);

  const openModal = () => {
    setModal(true)
  };

  const closeModal = () => {
    setModal(false);
  }

  return (
    <>
      <Header/>
      <Section>
        <Container>
          <Hero 
            propsId={'HeroSection'}
            openModal={openModal}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <About propsId={'AboutSection'}/>
        </Container>
      </Section>
      <Section>
        <Container>
          <Locations propsId={'LocationSection'}/>
        </Container>
      </Section>
      <Section>
        <Container>
          <Equipment propsId={'EquipmentSection'}/>
        </Container>
      </Section>
      {/* <Section>
        <Container>
          <Contacts propsId={'ContactsSection'}/>
        </Container>
      </Section> */}
      {/* <Footer/> */}
      {isModal && (
        <Modal
          isModal={isModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};


