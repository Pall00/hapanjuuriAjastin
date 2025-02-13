import React, {useState} from "react";
import styled from "styled-components"

const Laskuri = () => {
const [flourAmount, setFlourAmount] = useState(350);
const [waterAmount, setWaterAmount] = useState(287);
const [starterAmount, setStarterAmount] = useState(70);

const resetSliders = () => {
  setFlourAmount(350);
  setWaterAmount(287);
  setStarterAmount(70);
}

const saltAmmount = () => {
  return flourAmount* 0.015
}

const calculateTotalDough = () => {
  return flourAmount + waterAmount + starterAmount;
}

const calculateWaterPersent = () => {
  return waterAmount/flourAmount * 100
}


  return (
    <Container>

      <Information>
      <h2>Hapanjuuri ainesten laskuri</h2>
      </Information>

      <SliderContainer>
        <Slider>
          <label>Jauhot (g)</label>
          <input
            type="range"
            min="100"
            max="1000"
            value={flourAmount}
            onChange={(e) => setFlourAmount(Number(e.target.value))}
      />
      <span>{flourAmount} g</span>
      </Slider>

      <Slider>
          <label>Vesi (g)</label>
          <input
            type="range"
            min={flourAmount * 0.5}
            max={flourAmount * 0.9}
            value={waterAmount}
            onChange={(e) => setWaterAmount(Number(e.target.value))}
      />
      <span>{waterAmount} g</span>
      </Slider>

      <Slider>
          <label>Juuri (g)</label>
          <input
            type="range"
            min={flourAmount * 0.1}
            max={flourAmount * 0.5}
            value={starterAmount}
            onChange={(e) => setStarterAmount(Number(e.target.value))}
      />
      <span>{starterAmount} g</span>
      </Slider>

      <Information>
        <div>
          <h3>Taikinan paino:</h3>
          <p>{calculateTotalDough()} g</p>
          <h3>Vesiprosentti:</h3>
          <p>{calculateWaterPersent()} %</p>
          <h3>Suolanmäärä:</h3>
          <p>{saltAmmount()} g</p>
          <ResetButton onClick={resetSliders}>Nollaa asetukset</ResetButton>
        </div>
      </Information>

</SliderContainer>
</Container>
  )
}

export default Laskuri;

const Container = styled.div`
    
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 0 auto;
    padding: 1.5rem 0;
    
    
  `
  const SliderContainer = styled.div`
      width: 80%;
      margin: 0.5rem auto;
      button{

      }
      
      
  `
  const Slider = styled.div`
    color:rgb(148, 142, 89);
    padding: 1.5rem;
  `

  const Information = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h2{
        font-weight: 600;
        font-size: 2.5rem;
        color:rgb(148, 142, 89);
    }
    h3{
      font-weight: 600;
        font-size: 2.5rem;
        color:rgb(148, 142, 89);

    }
    p{
        font-weight: 600;
        font-size: 1.5rem;
        color:rgb(148, 142, 89);
    }
`
const ResetButton = styled.button`
  background-color:rgb(148, 142, 89);
  color: rgb(255, 255, 255);
  padding: .8rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: 1rem;

  &:hover {
    background-color:rgb(114, 109, 60);
  }
`;