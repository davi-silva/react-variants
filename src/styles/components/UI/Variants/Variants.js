import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const VariantsDiv = styled.div`
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  padding: 10px 15px;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const OptionNameInput = styled.input`
  background: rgba(0, 0, 0, 0.15);
  border: none;
  font-size: 14px;
  padding: 7px 7px;
  width: 150px;
  border: 1px solid transparent;
  color: #18840f;
  font-weight: 900;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid #18840f;
    outline: none;
  }
`;

export const OptionValuesInput = styled.input`
  background: rgba(0, 0, 0, 0.15);
  border: none;
  font-size: 14px;
  padding: 7px 7px;
  border: 1px solid transparent;
  width: 100%;
  color: #18840f;
  font-weight: 900;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid #18840f;
    outline: none;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70px;
`;

export const AddFieldButton = styled.button`
  background: #18840f33;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
  &:focus {
    outline: none;
  }
  svg {
    color: #18840f;
    font-size: 14px;
  }
`;

export const RemoveFieldButton = styled.button`
  color: #ff0000;
  background: #ff00002b;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: #ff000040;
  }
  &:active {
    background: #ff000054;
  }
  &:focus {
    outline: none;
  }
  svg {
    color: #ff0000;
    font-size: 14px;
  }
`;

export const VariantsFieldsDiv = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr;
  grid-gap: 8px; */
  width: 100%:
`;

export const VariantsH2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #18840f;
  margin-bottom: 1rem;
`;
