import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  margin-top: 100px;
  padding: 50px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const ProfileCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border: 0.5px solid ${(props) => props.theme.colors.secondary.background};
  border-radius: 20px 20px 20px 20px;
  padding: 50px;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Picture = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  margin: auto;
  margin-bottom: 50px;
`;

export const EditButtom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin: auto;

  border:solid 1px;
  border-color: ${(props) => props.theme.colors.primary.highlight};
  border-width: 2px;
  border-radius: 5px;
  background-color: transparent;

  a {
      color: ${(props) => props.theme.colors.primary.highlight};
      font-weight: bold;
      text-decoration: none;
    }

  :hover {
    background-color: ${(props) => props.theme.colors.primary.highlight};
    a {
      color: white;
    }
  }
`;

export const ProfileInfo = styled.p`
  color: ${(props) => props.theme.colors.primary.lighter};
  font-weight: bold;
`;
