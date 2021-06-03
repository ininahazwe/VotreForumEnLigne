import styled from 'styled-components';
import {BsInfo} from "react-icons/all";

export const PackWrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  padding: 0 120px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const PackBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 0 50px 0 0;
  box-shadow: 0 6px 31px -2px rgba(0, 0, 0, 0.1);
  background: #f2f2f2;
  color: #333;
  font-weight: 600;
`;

export const PackIcon = styled(BsInfo)`
  font-size: 8rem;
  color: #86d38e;
`;

export const PackCheck = styled.div`
  display: grid;
  grid-template-columns: 5% auto;
  gap: 5px;

  @media screen and (max-width: 768px){
    grid-template-columns: 10% auto;
    padding: 0 30px;
  }
`;