import styled from 'styled-components';

export const PackWrapper = styled.div`

`;

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 0 120px;
  //box-shadow: -2px 1px 29px -5px rgba(227,227,227,0.69);
  //-webkit-box-shadow: -2px 1px 29px -5px rgba(227,227,227,0.69);
  //-moz-box-shadow: -2px 1px 29px -5px rgba(227,227,227,0.69);

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 40px 60px;
  width: 100%;
  gap: 10px;
  border-radius: 10px;
  transition: all 200ms ease;
  box-shadow: 0 6px 10px rgba(0,0,0,.08);
  
  &:hover{
    transform: translate(0px, -10px);
  }
  @media screen and (max-width: 768px){
    padding: 25px;
  }
`;

export const OptionIcon = styled.img`
  height:100px;
  width: 100px;
  margin-bottom: 10px;
`;

export const SolutionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 120px;
  
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const SolutionBox = styled.div`
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;


