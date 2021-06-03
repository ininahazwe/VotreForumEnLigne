import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/md";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 850px;
  position: relative;
  z-index: 1;
  
  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px){
    padding: 0 50px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  
  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;


export const ContainerWrapper = styled.div`
  background: ${({ background }) => (background ? 'radial-gradient(circle, rgba(241,241,241,1) 0%, rgba(255,255,255,1) 100%)' : 'none')};
  padding: ${({Nopadding}) => (Nopadding ? 'none' : '80px 160px')};
  
  @media screen and (max-width: 768px){
    padding: ${({Nopadding}) => (Nopadding ? 'none' : '40px 30px')};
  }
  @media screen and (min-width: 960px){  
    padding: 40px 80px;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: ${({padding}) => (padding ? '0 250px' : 'none')};

  @media screen and (max-width: 768px){
    grid-template-columns: ${({partition}) => (partition ? '1fr 2fr' : '1fr')};
    padding: ${({padding}) => (padding ? '0' : 'none')};
    min-height: 360px;
    justify-content: space-around;
  }


`;

export const Illustration = styled.div`
  
`;
export const Description = styled.div`
  z-index: 1;
`;

export const Presentation = styled.div`
  
`;