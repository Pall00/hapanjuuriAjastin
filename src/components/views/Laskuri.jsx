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

      <MainContent>
      <SliderSection>
        <SliderCard>
          <LabelContainer>
          <LabelIcon>🌾</LabelIcon>
          <LabelText>Jauhot (g)</LabelText>
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
        </SliderCard>
        
        <SliderCard>
          <LabelContainer>
            <LabelIcon>💧</LabelIcon>
            <LabelText>Vesi (g)</LabelText>
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
        </SliderCard>

      <SliderCard>
        <LabelContainer>
          <LabelIcon>🍞</LabelIcon>
          <LabelText>Juuri (g)</LabelText>
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
      </SliderCard>
      </SliderSection>
      
      <ResultsCard>
      <ResultsGrid>
        <ResultItem>
          <ResultLabel>Taikinan paino:</ResultLabel>
          <ResultValue>{calculateTotalDough()} g</ResultValue>
        </ResultItem>
        <ResultItem>
          <ResultLabel>Vesiprosentti:</ResultLabel>
          <ResultValue>{calculateWaterPersent()} %</ResultValue>
        </ResultItem>
        <ResultItem>
          <ResultLabel>Suolanmäärä:</ResultLabel>
          <ResultValue>{saltAmount()} g</ResultValue>
        </ResultItem>
        </ResultsGrid>
        <ResetButton onClick={resetSliders}>Nollaa asetukset</ResetButton>
      </ResultsCard>
      </MainContent>
  </Container>
  );
};

export default Laskuri;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: rgb(251, 249, 244);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 80px;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgb(231, 223, 198);
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
`;

const Title = styled.h2`
  color: rgb(139, 125, 91);
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SliderCard = styled.div`
  padding: 1.5rem;
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const LabelIcon = styled.span`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const LabelText = styled.label`
  color: rgb(139, 125, 91);
  font-weight: 600;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  padding: 0.5rem 0;
  padding-top: 1.5rem;
`;

const StyledSlider = styled.input.attrs(props => ({
  style: {
    background: `linear-gradient(to right, rgb(231, 197, 124) ${(props.value - props.min) / (props.max - props.min) * 100}%,
                rgb(224, 224, 224) ${(props.value - props.min) / (props.max - props.min) * 100}%)`
  }
}))`
  width: 100%;
  height: 12px;
  outline: none;
  -webkit-appearance: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
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
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    background: rgb(139, 125, 91);
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    height: 10px;

    &::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
    }

    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
    }
  }
`;

const Value = styled.span`
  position: absolute;
  right: 0;
  top: -0.5rem;
  color: rgb(139, 125, 91);
  font-weight: 600;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ResultsCard = styled.div`
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgb(231, 223, 198);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const ResultLabel = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  color: rgb(139, 125, 91);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ResultValue = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: rgb(139, 125, 91);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ResetButton = styled.button`
  background-color: rgb(139, 125, 91);
  color: rgb(255, 255, 255);
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.3rem;
  width: 100%;
  border: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    background-color: rgb(117, 106, 78);
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0.6rem 1rem;
  }
`;