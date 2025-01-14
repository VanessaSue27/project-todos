import styled, { css } from 'styled-components';

export const ListContainer = styled.section`
  background-color: #f7f7f7;
  padding: 20px 20px 0 20px;

  ${props => props.white && css`
    background-color: white;
  `}

  ${props => props.borderbottom && css`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  `}
`;

export const ListTitle = styled.h3`
  font-size: 25px;
  color: #5395b0;
  margin-top: 0;
  text-align: center;

  @media (max-width: 375px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const SingleTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid #efefef;
`;

export const CheckboxTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TaskText = styled.p`
  margin: 0 20px 2px 8px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const RemoveButton = styled.button`
  background-color: #5395b0;
  border: none;
  color: white;
  padding: 4px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 150ms;

  &:hover {
    background-color: #808080;
  }
`;
