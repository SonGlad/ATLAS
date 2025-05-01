import { StyledContacts } from "./ContactSection.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useTranslation } from 'react-i18next';
import { GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
import { useInView } from 'react-intersection-observer';


  
const center = {
    lat: 44.43390,
    lng: 26.05418,
};


export const Contacts = ({propsId}) => {
    const { t } = useTranslation();
    const [titleItem, titleItem1InView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.5,
    }); 
    const [refItem, refItemInView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    });
    const [refItemAdress, refItemAdressInView] = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    });


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });

    const phoneNumber = `${t('header.contactUsNumber')}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}`;


    return(
        <StyledContacts id={propsId}>
            <SectionTitle
                title={t('contacts.title')}
                titleItem={titleItem}
                titleItem1InView={titleItem1InView}
            />
            <div className="adress-block" ref={refItem}>
                {isLoaded && (
                    <div className={`google-map-cont ${refItemInView ? "active-google-map-cont" : ""}`}>
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={center}
                            zoom={19}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </div>
                )}
                <address className="adress-cont">
                    <ul className="adress-list"  ref={refItemAdress}>
                        <li className={`adress-item ${refItemAdressInView ? "active-adress-item" : ""}`} style={{ '--i': 1}}>
                            <a className="address-link" 
                                href={whatsappUrl}
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="WhatsApp Contact Link"
                            >
                                WhatsApp: <span>{t('header.contactNumberText')}</span>
                            </a>
                        </li>
                        <li className={`adress-item ${refItemAdressInView ? "active-adress-item" : ""}`} style={{ '--i': 2}}>
                            <p className="ours-text">{t('contacts.working')}: <br/>09:00-21:00</p>
                        </li>
                        <li className={`adress-item ${refItemAdressInView ? "active-adress-item" : ""}`} style={{ '--i': 3}}>
                            <a className="address-link" 
                                href="https://www.google.com/maps/place/Bulevardul+Iuliu+Maniu+7,+Bucure%C8%99ti+061072,+%D0%A0%D1%83%D0%BC%D1%8B%D0%BD%D0%B8%D1%8F/@44.4339192,26.0536511,19.5z/data=!4m15!1m8!3m7!1s0x40b201d2d5fce701:0x8bb0e1dbc9622a7c!2zVU0gMDIyOTYsIEJ1bGV2YXJkdWwgSXVsaXUgTWFuaXUgNywgQnVjdXJlyJl0aSAwNjEwNzIsINCg0YPQvNGL0L3QuNGP!3b1!8m2!3d44.4342227!4d26.050958!16s%2Fg%2F11y4s209kv!3m5!1s0x40b201c4d5b88945:0x44a8b2d9102af2fc!8m2!3d44.4338717!4d26.0541737!16s%2Fg%2F11hhsz7lyy?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D" 
                                target="_blank" 
                                rel="noreferrer noopener"
                                aria-label="Google Map Link"
                            > 
                                {t('contacts.adress')}: Luliu Maniu 7, Bucharest, Romania
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </StyledContacts>
    )
};