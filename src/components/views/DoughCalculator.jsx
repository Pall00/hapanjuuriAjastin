import { useState } from 'react'
import styled from 'styled-components'
import RiseCalculator from '../calculator/RiseCalculator'

const DoughCalculator = () => {
  const [flourAmount, setFlourAmount] = useState(350)
  const [waterAmount, setWaterAmount] = useState(274)
  const [starterAmount, setStarterAmount] = useState(70)
  const [activeHydration, setActiveHydration] = useState(null)

  const hydrationLevels = [
    {
      percent: 60,
      description: 'Erittäin matala hydraatio: Jäykkä taikina, erittäin helppo käsitellä. Tuottaa tiiviin, tasaisen ja hieman kuivemman leivän. Sopii hyvin aloittelijoille ja täysjyväjauhoille.',
    },
    {
      percent: 65,
      description: 'Matala hydraatio: Helpompi käsitellä, tiiviimpi rakenne. Sopii aloittelijoille ja tuottaa tiiviin ja tasaisen leivän rakenteen. Hyvä valinta ensimmäisille leiville.',
    },
    {
      percent: 70,
      description: 'Keskitason hydraatio: Hyvä tasapaino käsiteltävyyden ja ilmavuuden välillä. Tuottaa klassisen hapanjuurileivän rakenteen. Suosittu valinta päivittäiseen leipomiseen.',
    },
    {
      percent: 75,
      description: 'Korkea hydraatio: Ilmavampi rakenne, isommat reiät. Vaatii enemmän taitoa käsittelyssä mutta tuottaa mehevän leivän. Sopii kokeneemmille leipojille.',
    },
    {
      percent: 80,
      description: 'Erittäin korkea hydraatio: Maksimaalinen ilmavuus, suuret reiät. Haastava käsitellä, tarkoitettu kokeneille leipojille. Tuottaa erittäin mehevän leivän avoimella huokosrakenteella.',
    },
    {
      percent: 85,
      description: 'Superhydraatio: Erittäin märkä taikina, vaatii erityistekniikkaa käsittelyssä. Tuottaa erittäin ilmavan ja kostean leivän. Suositellaan vain erittäin kokeneille leipojille.',
    },
    {
      percent: 90,
      description: 'Ultrahydraatio: Äärimmäisen märkä taikina, erittäin vaikea käsitellä. Vaatii erikoistekniikoita ja paljon kokemusta. Tuottaa poikkeuksellisen ilmavan ja kostean leivän.',
    },
    {
      percent: 95,
      description: 'Äärimmäinen hydraatio: Lähes nestemäinen taikina. Vaatii erityisiä käsittelytekniikoita ja astioita. Vain kokeilunhaluisille eksperteille. Tuottaa hyvin kostean ja erikoisrakenteisen leivän.',
    },
  ]

  const setHydrationLevel = (percent) => {
    setActiveHydration(percent)
    const newWaterAmount = Math.round((flourAmount * percent) / 100)
    setWaterAmount(newWaterAmount)
  }

  const resetSliders = () => {
    setFlourAmount(350)
    setWaterAmount(274)
    setStarterAmount(70)
  }

  const saltAmount = () => {
    return (flourAmount * 0.015).toFixed(1)
  }

  const calculateTotalDough = () => {
    return (flourAmount + waterAmount + starterAmount + parseFloat(saltAmount())).toFixed(1)
  }

  const calculateWaterPersent = () => {
    return (waterAmount / flourAmount * 100).toFixed(1)
  }

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
            <InputSliderWrapper>
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
              <InputWrapper>
                <NumberInput
                  type="number"
                  min="100"
                  max="2000"
                  value={flourAmount}
                  onChange={(e) => setFlourAmount(Number(e.target.value))}
                />
                <Unit>g</Unit>
              </InputWrapper>
            </InputSliderWrapper>
          </SliderCard>

          <SliderCard>
            <LabelContainer>
              <LabelIcon>💧</LabelIcon>
              <LabelText>Vesi (g)</LabelText>
            </LabelContainer>
            <InputSliderWrapper>
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
              <InputWrapper>
                <NumberInput
                  type="number"
                  min={Math.floor(flourAmount * 0.5)}
                  max={Math.ceil(flourAmount * 0.9)}
                  value={waterAmount}
                  onChange={(e) => setWaterAmount(Number(e.target.value))}
                />
                <Unit>g</Unit>
              </InputWrapper>
            </InputSliderWrapper>
          </SliderCard>

          <SliderCard>
            <LabelContainer>
              <LabelIcon>🍞</LabelIcon>
              <LabelText>Juuri (g)</LabelText>
            </LabelContainer>
            <InputSliderWrapper>
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
              <InputWrapper>
                <NumberInput
                  type="number"
                  min={Math.floor(flourAmount * 0.1)}
                  max={Math.ceil(flourAmount * 0.5)}
                  value={starterAmount}
                  onChange={(e) => setStarterAmount(Number(e.target.value))}
                />
                <Unit>g</Unit>
              </InputWrapper>
            </InputSliderWrapper>
          </SliderCard>
        </SliderSection>

        <HydrationSection>
          <HydrationTitle>Valitse hydraatiotaso</HydrationTitle>
          <HydrationButtons>
            {hydrationLevels.map((level) => (
              <HydrationButton
                key={level.percent}
                onClick={() => setHydrationLevel(level.percent)}
                $active={activeHydration === level.percent}
              >
                {level.percent}%
              </HydrationButton>
            ))}
          </HydrationButtons>
          {activeHydration && (
            <HydrationDescription>
              {hydrationLevels.find(level => level.percent === activeHydration)?.description}
            </HydrationDescription>
          )}
        </HydrationSection>

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
        <RiseCalculator />
      </MainContent>
    </Container>
  )
}

export default DoughCalculator

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
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgb(231, 223, 198);
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
`

const Title = styled.h2`
  color: rgb(139, 125, 91);
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const SliderCard = styled.div`
  padding: 1.5rem;
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const LabelIcon = styled.span`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const LabelText = styled.label`
  color: rgb(139, 125, 91);
  font-weight: 600;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const SliderWrapper = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0.5rem 0;
`

const StyledSlider = styled.input.attrs(props => ({
  style: {
    background: `linear-gradient(to right, rgb(231, 197, 124) ${(props.value - props.min) / (props.max - props.min) * 100}%,
                rgb(224, 224, 224) ${(props.value - props.min) / (props.max - props.min) * 100}%)`,
  },
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
`

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
`

const ResultsCard = styled.div`
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const ResultsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
`

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
`

const ResultLabel = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  color: rgb(139, 125, 91);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const ResultValue = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  color: rgb(139, 125, 91);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

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
`

const InputSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const NumberInput = styled.input`
  width: 80px;
  padding: 0.5rem;
  border: 1px solid #E7DFC6;
  border-radius: 6px;
  font-size: 1rem;
  color: #8B7D5B;
  text-align: right;
  
  &:focus {
    outline: none;
    border-color: #8B7D5B;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Unit = styled.span`
  color: #8B7D5B;
  font-weight: 600;
  min-width: 20px;
`

const HydrationSection = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const HydrationTitle = styled.h3`
  color: rgb(139, 125, 91);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`

const HydrationButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const HydrationButton = styled.button`
  background-color: ${props => props.$active ? 'rgb(139, 125, 91)' : 'white'};
  color: ${props => props.$active ? 'white' : 'rgb(139, 125, 91)'};
  border: 2px solid rgb(139, 125, 91);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`

const HydrationDescription = styled.p`
  color: rgb(139, 125, 91);
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
`
