import React from 'react';
import {ContainerWrapper} from "../HeroSection/Hero.elements";
import {ButtonContainer, PackWrapper} from "../SolutionSection/Solution.elements";
import vallee from "../../images/captures/vallée.PNG";
import cci from "../../images/captures/cci.PNG";
import sarclay from "../../images/captures/sarclay.png";
import loire from "../../images/captures/loire.png";
import hub from "../../images/captures/hub.PNG";
import handissup from "../../images/captures/handissup.PNG"
import {IconIllustr, Paragraphe, Title2, VoirIcon} from "../globalStyles";
import {Img} from "../InfoSection/Info.elements";
import {Real, RealWrapper} from "./Real.elements";
import coupe from "../../images/soustitre.png"
import {NavBtn2, NavBtnLink} from "../Navbar/Navbar.elements";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";


const RealSection = () => {
    return (
        <>
            <Fade bottom>
                <Title2 center>
                    Parmi nos réalisations
                    <Fade top>
                        <IconIllustr src={coupe}/>
                    </Fade>
                </Title2>
            </Fade>
            <ContainerWrapper id="realisations">
                <PackWrapper>
                    <RealWrapper>
                        <Real>
                            <Img src={sarclay}/>
                            <Paragraphe center>Le forum de l’apprentissage de l’apprentissage de l’Université Paris-Saclay</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                        </Real>
                        <Real>
                            <Img src={cci}/>
                            <Paragraphe center>Le forum de l’alternance de la CCI de Paris Il-de-France</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                        </Real>
                        <Real>
                            <Img src={handissup}/>
                            <Paragraphe center>Le forum régional emploi handicap Handisup Auvergne-Rhône-Alpes</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                        </Real>
                        <Real>
                            <Img src={vallee}/>
                            <Paragraphe center>Les rencontres de l’alternance de Vallée Sud Grand Paris Emploi</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                        </Real>
                        <Real>
                            <Img src={loire}/>
                            <Paragraphe center>Les e-rencontres de la mobilité en Pays de la Loire</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                        </Real>
                        <Real>
                            <Img src={sarclay}/>
                            <Paragraphe center>Notre forum en ligne Talents Handicap :</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                         </Real>
                        <Real>
                            <Img src={hub}/>
                            <Paragraphe center>Le hub de l’alternance</Paragraphe>
                            <ButtonContainer>
                                <NavBtn2>
                                    <NavBtnLink>
                                        <Link to="/options"><VoirIcon /> Voir</Link>
                                    </NavBtnLink>
                                </NavBtn2>
                            </ButtonContainer>
                        </Real>
                    </RealWrapper>
                </PackWrapper>
            </ContainerWrapper>
        </>
    );
}

export default RealSection;