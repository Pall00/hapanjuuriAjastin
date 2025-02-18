import {useState} from "react";
import styled from "styled-components"

const Laskuri = () => {
const [flourAmount, setFlourAmount] = useState(350);
const [waterAmount, setWaterAmount] = useState(274);
const [starterAmount, setStarterAmount] = useState(70);

const resetSliders = () => {
  setFlourAmount(350);
  setWaterAmount(274);
  setStarterAmount(70);
};

const saltAmount = () => {
  return (flourAmount* 0.015).toFixed(1);
};

const calculateTotalDough = () => {
  return (flourAmount + waterAmount + starterAmount + parseFloat(saltAmount())).toFixed(1);
};

const calculateWaterPersent = () => {
  return (waterAmount/flourAmount * 100).toFixed(1);
};

  return (
    <Container>
      <Header>
        <Title>Hapanjuuri ainesten laskuri</Title>
      </Header>

      <SliderContainer>
        <SliderStyle>
          <LabelContainer>
          <LabelIcon>🌾</LabelIcon>
            <label>Jauhot (g)</label>
          </LabelContainer>
          <SliderWrapper>
            <StyledSlider
              type="range"
              min="100"
              max="1000"
              value={flourAmount}
              onChange={(e) => setFlourAmount(Number(e.target.value))}
            />
            <Value>{flourAmount} g</Value>
          </SliderWrapper>
        </SliderStyle>
        
        <SliderStyle>
          <LabelContainer>
            <LabelIcon>💧</LabelIcon>
            <label>Vesi (g)</label>
          </LabelContainer>
          <SliderWrapper>
            <StyledSlider
              type="range"
              min={flourAmount * 0.5}
              max={flourAmount * 0.9}
              value={waterAmount}
              onChange={(e) => setWaterAmount(Number(e.target.value))}
            />
            <Value>{waterAmount} g</Value>
          </SliderWrapper>
        </SliderStyle>

      <SliderStyle>
        <LabelContainer>
          <LabelIcon>🍞</LabelIcon>
          <label>Juuri (g)</label>
        </LabelContainer>
        <SliderWrapper>
          <StyledSlider
            type="range"
            min={flourAmount * 0.1}
            max={flourAmount * 0.5}
            value={starterAmount}
            onChange={(e) => setStarterAmount(Number(e.target.value))}
          />
          <Value>{starterAmount} g</Value>
        </SliderWrapper>
      </SliderStyle>

      <ResultsCard>
        <ResultRow>
          <h3>Taikinan paino:</h3>
          <p>{calculateTotalDough()} g</p>
        </ResultRow>
        <ResultRow>
          <h3>Vesiprosentti:</h3>
          <p>{calculateWaterPersent()} %</p>
        </ResultRow>
        <ResultRow>
          <h3>Suolanmäärä:</h3>
          <p>{saltAmount()} g</p>
        </ResultRow>
        <ResetButton onClick={resetSliders}>Nollaa asetukset</ResetButton>
      </ResultsCard>
    </SliderContainer>
  </Container>
  );
};

export default Laskuri;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Helvetica Neue', sans-serif;
  background-color:rgb(251, 249, 244);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 100px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid rgb(231, 223, 198);
  padding-bottom: 1.5rem;
`;

const Title = styled.h2`
  color:rgb(139, 125, 91);
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;
`;

const SliderContainer = styled.div`
  width: 90%;
  margin: 0.5rem auto;      
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color:rgb(139, 125, 91);
  font-weight: 600;
  font-size: 1.1rem;
`;

const LabelIcon = styled.span`
  font-size: 1.5rem;
`;

const SliderStyle = styled.div`
  padding: 1.5rem;
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
  `
  const StyledSlider = styled.input.attrs(props => ({
    style:{
      background: `linear-gradient(to right, rgb(231, 197, 124) ${(props.value - props.min) / (props.max - props.min) * 100}%,rgb(224, 224, 224) ${(props.value - props.min) / (props.max - props.min) * 100}%)`
    }
  }))`
  width: 100%;
  height: 15px;
  outline: none;
  -webkit-appearance: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgb(139, 125, 91);
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    background: rgb(139, 125, 91);
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
`;


const Value = styled.span`
  position: absolute;
  right: 0;
  top: -1.5rem;
  color: rgb(139, 125, 91);
  font-weight: 600;
  font-size: 1.1rem;
`;

const SliderWrapper = styled.div`
  position: relative;
  padding: 0.5rem 0;

`;

const ResetButton = styled.button`
  background-color:rgb(139, 125, 91);
  color: rgb(255, 255, 255);
  padding: .8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  width: 100%;
  border: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    background-color:rgb(117, 106, 78);
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ResultsCard = styled.div`
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  padding:1.5rem;
  margin-top: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ResultRow = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgb(231, 223, 198);

  &:last-of-type {
    margin-bottom: 1.5rem;
    border-bottom: none;
  }

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    color:rgb(139, 125, 91);
    margin: 0;
  }

  p {
    font-weight: 600;
    font-size: 1.2rem;
    color:rgb(139, 125, 91);
    margin: 0;
  }
`;