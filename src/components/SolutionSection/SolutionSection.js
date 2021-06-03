import React from 'react';
import {ContainerWrapper} from "../HeroSection/Hero.elements";
import {H3, IconIllustr, Paragraphe, Title2, Vide, VoirIcon} from "../globalStyles";
import {ButtonContainer, SolutionBox, SolutionWrapper} from "./Solution.elements";
import {CheckIcon} from "../WhySection/Why.elements";
import {PackCheck} from "../PackSection/Pack.elements";
import {Link} from "react-router-dom";
import solution from "../../images/soustitre.png";
import {NavBtn2, NavBtnLink} from "../Navbar/Navbar.elements";
import Fade from "react-reveal/Fade";

const SolutionSection = () => {

    return (
        <>
            <Fade bottom>
                <Title2 center>
                    Une solution technique performante et une équipe d’experts à votre service
                    <Fade top>
                        <IconIllustr src={solution}/>
                    </Fade>
                </Title2>
            </Fade>

            <ContainerWrapper id="offres">
                 <SolutionWrapper>
                    <SolutionBox>
                        <H3>Une solution technique performante et riche en fonctionnalités</H3>
                        <Paragraphe>
                            La plateforme « Votre Forum En ligne ® », entièrement conçue et développée par nos équipes internes, est pensée pour vous apporter toutes les fonctionnalités dont vous avez besoin pour la préparation et le déroulement de votre événement
                        </Paragraphe>
                        <p>Une plateforme très accessible et hautement personnalisable : </p>
                        <PackCheck>
                            <CheckIcon />Une plateforme accessible aux normes handicap, et responsive pour une utilisation sur ordinateur, tablette et mobile
                            <CheckIcon />La mise à disposition de la plateforme exclusivement pour votre événement, sur un nom de domaine dédié (site Internet dédié, au nom de votre événement)
                            <CheckIcon />La personnalisation de la plateforme pour votre événement
                            <CheckIcon />La création des stands virtuels 3D pour vos exposants
                        </PackCheck>
                        <Vide />
                    </SolutionBox>
                    <SolutionBox>
                        <H3>Une équipe d’experts à votre service</H3>
                        <Paragraphe>
                            Pour garantir la réussite de votre événement digital, « Votre Forum En ligne ® » fait de l’accompagnement humain une priorité.
                            Notre offre clé en main intègre systématiquement un support exposants et candidats impliqué et efficace
                        </Paragraphe>
                        <PackCheck>
                            <CheckIcon />Formation des organisateurs : plusieurs sessions de formation au fonctionnement de la plateforme sont mises en place pour une parfaite compréhension et prise en main
                            <CheckIcon />Formation des exposants : formation au fonctionnement de la plateforme pour une prise en main rapide et une participation efficace
                            <CheckIcon />Support exposants et candidats : durant tout votre événement, y compris durant la phase de préparation pour vos exposants, une équipe dédiée est joignable pour assurer la réponse aux questions et la résolution rapide des éventuels problèmes.
                        </PackCheck>
                        <Vide />
                    </SolutionBox>
                </SolutionWrapper>
                  <ButtonContainer>
                      <NavBtn2>
                          <NavBtnLink>
                              <Link to="/options"><VoirIcon /> Voir toutes les fonctionnalités</Link>
                          </NavBtnLink>
                      </NavBtn2>
                  </ButtonContainer>
            </ContainerWrapper>
        </>
    );
}

export default SolutionSection;