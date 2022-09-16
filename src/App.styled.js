import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{ margin:0;
    padding: 0;
    box-sizing: border-box;
    ;}

`;

export const AppContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: #000;
  min-height: 100vh;
`;

export const FormStyled = styled.form`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 100px;
  @media (min-width: 300px) and (max-width: 800px) {
    width: 95vw;
  }
`;

export const FormInput = styled.input`
  width: 40vw;
  height: 40px;
  padding-left: 10px;
  border-radius: 4px 0px 0px 4px;
  border: none;
  background: #fff;
  &:focus {
    outline: none;
  }
  @media (min-width: 300px) and (max-width: 800px) {
    width: 80vw;
  }
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  width: 60px;
  height: 40px;
  background: #fff;
  border-radius: 0px 4px 4px 0px;
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    background: #d3d3d3;
  }
`;

export const ResultBlock = styled.div`
  width: 44vw;
  margin: 50px auto 0px auto;
  @media (min-width: 300px) and (max-width: 800px) {
    width: 90vw;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  border: 1px solid #fff;
  padding: 10px;
`;

export const ResultListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultListItemBlock = styled.div`
  width: 20vw;
  border: 1px solid #fff;
  border-radius: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #fff;
  box-shadow: 3px 3px 3px #fff;
  @media (min-width: 300px) and (max-width: 800px) {
    width: 40vw;
  }
`;

export const ErrorBlock = styled.div`
  color: red;
  width: 43vw;
  margin: 0 auto;
`;

export const LoadingIamge = styled.img`
  width: 50vw;
  position: absolute;
  top: 15%;
  left: 25%;
`;
