import styled from 'styled-components';

// header
const Head = styled.header`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 1%;
  margin: 0 0 20px 0;

  a{
    color: orange;

    &:hover{
      opacity: 0.8;
    }
  }
`;

// ***** welcome page
const Image = styled.img`
  width: 60%;
`;

const WelcomeSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeHeader = styled.header`
  width: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 2px 5px;
  border-radius: 5px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }

  a{
    text-decoration: none;
    color: orange;
  }
`;

// ******** Appp

const MainCont = styled.div`
  width: 85vw;
  min-height: 80vh;
  max-width: 1024px;
  margin: 35px auto;
  background: #fff;
  padding: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

// ******** CharacterCard
const Card = styled.div`
  border: 1px solid #333;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000;
  padding: 1%;
  opacity: 0;
  margin: 0 0 2%  0;
  text-align: center;
  background-color: darkGoldenRod;
`;

const Heading3 = styled.h3`
  font-size: 1.3rem;
  color: #555; 
  width: 100%;
  text-align: center;
`;

const Para = styled.p`
  color: #333;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
`;

const FormInput = styled.input`
  font-size: 1.2rem;
  padding: 2px;
  margin: 0 0 20px 10px;
`;
// *******************


export { 
  Card, 
  Heading3, 
  MainCont, 
  Head, 
  WelcomeSection, 
  WelcomeHeader, 
  Button, 
  Image, 
  FormLabel, 
  FormInput,
  Para };