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
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';


export const App= () => {
  const [isModal, setModal] = useState(false);
  const { i18n } = useTranslation();
  const savedLang = localStorage.getItem('language');
  const initialLang = savedLang || i18n.language.split('-')[0].toUpperCase();
  const [langValue, setLangValue] = useState(initialLang);
  const [langToShow, setLangToShow] = useState(initialLang);

  const openModal = () => {
    setModal(true)
  };

  const closeModal = () => {
    setModal(false);
  }

  const langArray = [
    {'lang': 'RO'},
    {'lang': 'EN'},
    {'lang': 'UA'},
    {'lang': 'RU'},
  ];
  

  useEffect(() => {
      localStorage.setItem('language', langValue);
      i18n.changeLanguage(langValue.toLowerCase());
  },[i18n, langValue]);


  useEffect(() => {
      const languageCode = langValue.split('-')[0];
      setLangToShow(languageCode);
  },[langValue]);


  return (
    <>
      <Header
        langArray={langArray}
        setLangValue={setLangValue}
        langToShow={langToShow}
        i18n={i18n}
      />
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
      <Section>
        <Container>
          <Contacts propsId={'ContactsSection'}/>
        </Container>
      </Section>
      <Footer/>
      {isModal && (
        <Modal
          isModal={isModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};


