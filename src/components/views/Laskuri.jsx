import {useState} from "react";
import styled from "styled-components"
import { GiSlicedBread, GiWaterDrop, GiWheat } from "react-icons/gi";

const Laskuri = () => {
const [flourAmount, setFlourAmount] = useState(350);
const [waterAmount, setWaterAmount] = useState(274);
const [starterAmount, setStarterAmount] = useState(70);

const resetSliders = () => {
  setFlourAmount(350);
  setWaterAmount(274);
  setStarterAmount(70);
};

const saltAmmount = () => {
  return (flourAmount* 0.015).toFixed(1);
};

const calculateTotalDough = () => {
  return flourAmount + waterAmount + starterAmount;
};

const calculateWaterPersent = () => {
  return (waterAmount/flourAmount * 100).toFixed(1);
};

  return (
    <Container>
      <Information>
        <h2>Hapanjuuri ainesten laskuri</h2>
      </Information>

      <SliderContainer>
        <SliderStyle>
          <LabelContainer>
            <GiWheat size={24}/>
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
            <GiWaterDrop size={24}/>
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
          <GiSlicedBread size ={24}/>
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
          <p>{saltAmmount()} g</p>
        </ResultRow>
        <ResetButton onClick={resetSliders}>Nollaa asetukset</ResetButton>
      </ResultsCard>
    </SliderContainer>
  </Container>
  );
};

export default Laskuri;

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
  padding: 1.5rem 0;
  min-width: 320px;
  margin-top: calc(80px + ${window.innerHeight > 667 ? '0' : '2rem'});
`;

const SliderContainer = styled.div`
  width: 80%;
  margin: 0.5rem auto;      
`;

const LabelContainer = styled.div`
  display:flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgb(148, 142, 89);
`;

const SliderStyle = styled.div`
  padding: 1.5rem;
  background-color: rgb(238, 224, 165);
  border: 1px solid rgb(248, 209, 81);
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
    background: rgb(148, 142, 89);
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
    background: rgb(148, 142, 89);
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
`;

  const Information = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    
    h2{
        font-weight: 600;
        font-size: 2.5rem;
        color:rgb(148, 142, 89);
        margin: 0;
    }
`;

const Value = styled.span`
  position: absolute;
  right: 0;
  top: -1.5rem;
  color: rgb(148, 142, 89);
  font-weigt: 600;
`;

const SliderWrapper = styled.div`
  position: relative;
  padding: 0.5rem 0;

`;

const ResetButton = styled.button`
  background-color:rgb(148, 142, 89);
  color: rgb(255, 255, 255);
  padding: .8rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background-color:rgb(114, 109, 60);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ResultsCard = styled.div`
  background-color: rgb(238,224,165);
  border: 1px solid rgb(248,209,81);
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

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    color: rgb(148, 142, 89);
    margin: 0;
  }

  p {
    font-weight: 600;
    font-size: 1.5rem;
    color: rgb(148,142,89);
    margin: 0;
  }

`;