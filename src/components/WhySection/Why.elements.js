import styled from 'styled-components';
import {FaCheck} from "react-icons/all";

export const ImgFort = styled.img`
  width: 25%;
  display: block;
  margin: auto;
`;

export const ImgFort2 = styled.img`
  width: 90%;
`;
export const ChoiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 120px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  flex-wrap: wrap;

  :before{
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    //background: #e5e9f0;
    border-radius: 10px;
    z-index: 2;
  }

  @media screen and (max-width: 768px){
   
  }
`;

export const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  height: auto;
  width: auto;
  background: white;
  border: 1px solid whitesmoke;
  margin: 5px;
  z-index: 9;
  border-radius: 10px;
  transition: all 200ms ease;
  color: #666;
  font-weight: bold;
  
  &:hover{
    border: 1px solid whitesmoke;
    box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 768px){
    justify-content: center;
    padding: 25px;
    flex-direction: row;
    gap: 10px;
  }
`;

export const CheckIcon = styled(FaCheck)`
  font-size: 20px;
  margin-bottom: 10px;
  color: #86d38e;
  font-weight: 900;
`;

