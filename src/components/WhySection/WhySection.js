import React from 'react';
import {ContainerWrapper, Description, HeroWrapper, Illustration, Presentation} from "../HeroSection/Hero.elements";
import {Bleu, IconIllustr, Liste, ListeLi, Paragraphe, Title2, Vert, Vide} from "../globalStyles";
import pk1 from "../../images/illustration-19.svg";
import pk2 from "../../images/illustration-15.svg";
import {CheckIcon, Choice, ChoiceContainer, ChoiceWrapper, ImgFort} from "./Why.elements";
import why from "../../images/soustitre.png";
import {Subtitle} from "../InfoSection/Info.elements";
import Fade from "react-reveal/Fade";

const WhySection = () => {
    return (
        <>
            <Fade bottom>
                <Title2 center right>
                    Pourquoi choisir « <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ® » pour votre événement digital ?
                    <Fade top>
                        <IconIllustr src={why}/>
                    </Fade>
                </Title2>
            </Fade>
            <ContainerWrapper id="nouschoisir">
              <Subtitle>Avec notre double-expertise d’opérateur de plateforme et d’organisateur de salons et forums en ligne depuis plus de 10 ans, nous sommes votre meilleur partenaire pour organiser votre événement en ligne. </Subtitle>
                <Vide />
                <HeroWrapper padding partition>
                    <Illustration>
                        <ImgFort src={pk1} />
                    </Illustration>
                    <Description>
                        <Paragraphe><b>Nos priorités</b> : vous apporter des solutions techniques fiables et bien adaptées à vos besoins et vous assurer un accompagnement constant et efficace,  avant, pendant et après votre événement.</Paragraphe>
                    </Description>
                    <Illustration>
                        <ImgFort src={pk2} />
                    </Illustration>
                    <Description>
                        <Presentation>
                            Avec 100% de réussite pour 100% des événements organisés, nos clients partenaires sont très satisfaits de :
                            <Liste>
                                <ListeLi>La performance de nos solutions</ListeLi>
                                <ListeLi>La qualité de notre accompagnement</ListeLi>
                                <ListeLi>Notre capacité à nous adapter à vos besoins</ListeLi>
                            </Liste>
                        </Presentation>
                    </Description>
                </HeroWrapper>
                <Vide />
                <Paragraphe center>Choisir « <Bleu>Votre</Bleu><Vert> forum</Vert><Bleu> en ligne</Bleu> ® » pour vous accompagner dans l’organisation de votre salon virtuel ou forum en ligne, c’est choisir </Paragraphe>
                <Vide />
                <ChoiceContainer>
                    <ChoiceWrapper>
                        <Choice><CheckIcon />L'engagement d’une équipe motivée et disponible</Choice>
                        <Choice><CheckIcon />10 ans d’expertise et d’expérience</Choice>
                        <Choice><CheckIcon />Le souci constant de la qualité</Choice>
                        <Choice><CheckIcon />La responsabilité au service d’un objectif commun</Choice>
                        <Choice><CheckIcon />Le respect des délais, des budgets, de la relation humaine</Choice>
                        <Choice><CheckIcon />Le sens du service client</Choice>
                        <Choice><CheckIcon />L'innovation au service des utilisateurs</Choice>
                    </ChoiceWrapper>
                </ChoiceContainer>
            </ContainerWrapper>
        </>
    );
}

export default WhySection;