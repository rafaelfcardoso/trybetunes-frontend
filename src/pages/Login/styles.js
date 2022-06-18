import styled from 'styled-components';
// import lightTheme from '../../assets/themes/default';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  margin: auto;
  height: 80vh;
  border-radius: 20px 20px 20px 20px;
  display: flex;
  flex-direction: row;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary.background};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const Aside = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: 20px 0px 0px 20px;
  min-width: 500px;
  padding: 25px;
  /* width: 550px; */
  /* height: 80vh; */
  align-self: stretch;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Aside2 = styled.div`
  background-color: ${(props) => props.theme.colors.primary.highlight};
  border-radius: 0px 20px 20px 0px;
  /* height: 80vh; */
  display: block;
  align-self: stretch;
  align-items: stretch;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  height: 300px;
`;

export const Logo = styled.img`
  background-color: transparent;
  max-height: 200px;
  max-width: 250px;
  /* margin-left: 0px; */
`;

export const TrybeTunes = styled.h1`
  /* width: 400px; */
  /* top: 60px; */
  height: 300px;
  left: 130px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 61px;
  color: white;
`;

export const PC = styled.img`
  align-self: stretch;
  border-radius: 0px 20px 20px 0px;
  max-height: 80vh;
  /* width: 1440px;
  height: 1020px; */
`;

export const Content = styled.div``;

export const LoginInput = styled.input`
  height: 60px;
  width: 400px;
  margin-left: 0px;
  margin-bottom: 20px;
  display: flex;

  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 20px;

  border-color: ${(props) => props.theme.colors.primary.lighter};
  border: 1px solid;
  border-radius: 5px;
  background-color: transparent;


  :hover {
    border-color: ${(props) => props.theme.colors.primary.dark};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.lighter};
    display: flex;
    align-self: center;
    justify-self: center;
    align-items: center;
    font-size: 18px;
    margin-left: 25px;
    margin-top: 20px;
    position: absolute;
  }

`;

export const LoginLabel = styled.label`
  stroke: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  height: 220px;
  margin-bottom: 25px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.highlight};
  height: 60px;
  width: 350px;
  left: 70px;
  border-radius: 5px;

  :disabled {

  }

  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
`;

export const TextBtn = styled.p`
  color: white;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  /* position: absolute; */
  width: 83px;
  height: 34px;
  left: 190px;
  top: 15px;

`;
