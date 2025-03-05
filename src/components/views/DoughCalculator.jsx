import { useState } from 'react'
import { Container, Header, Title } from '../../styles/components'
import RiseCalculator from '../calculator/RiseCalculator'
import {
  MainContent,
  SliderSection,
  SliderCard,
  LabelContainer,
  LabelIcon,
  LabelText,
  InputSliderWrapper,
  SliderWrapper,
  StyledSlider,
  Value,
  InputWrapper,
  NumberInput,
  Unit,
  HydrationSection,
  HydrationTitle,
  HydrationButtons,
  HydrationButton,
  HydrationDescription,
  ResultsCard,
  ResultsGrid,
  ResultItem,
  ResultLabel,
  ResultValue,
  ResetButton,
} from '../../styles/pages/calculator'

const DoughCalculator = () => {
  const [flourAmount, setFlourAmount] = useState(350)
  const [waterAmount, setWaterAmount] = useState(274)
  const [starterAmount, setStarterAmount] = useState(70)
  const [activeHydration, setActiveHydration] = useState(null)

  const hydrationLevels = [
    {
      percent: 60,
      description:
        'Erittäin matala hydraatio: Jäykkä taikina, erittäin helppo käsitellä. Tuottaa tiiviin, tasaisen ja hieman kuivemman leivän. Sopii hyvin aloittelijoille ja täysjyväjauhoille.',
    },
    {
      percent: 65,
      description:
        'Matala hydraatio: Helpompi käsitellä, tiiviimpi rakenne. Sopii aloittelijoille ja tuottaa tiiviin ja tasaisen leivän rakenteen. Hyvä valinta ensimmäisille leiville.',
    },
    {
      percent: 70,
      description:
        'Keskitason hydraatio: Hyvä tasapaino käsiteltävyyden ja ilmavuuden välillä. Tuottaa klassisen hapanjuurileivän rakenteen. Suosittu valinta päivittäiseen leipomiseen.',
    },
    {
      percent: 75,
      description:
        'Korkea hydraatio: Ilmavampi rakenne, isommat reiät. Vaatii enemmän taitoa käsittelyssä mutta tuottaa mehevän leivän. Sopii kokeneemmille leipojille.',
    },
    {
      percent: 80,
      description:
        'Erittäin korkea hydraatio: Maksimaalinen ilmavuus, suuret reiät. Haastava käsitellä, tarkoitettu kokeneille leipojille. Tuottaa erittäin mehevän leivän avoimella huokosrakenteella.',
    },
    {
      percent: 85,
      description:
        'Superhydraatio: Erittäin märkä taikina, vaatii erityistekniikkaa käsittelyssä. Tuottaa erittäin ilmavan ja kostean leivän. Suositellaan vain erittäin kokeneille leipojille.',
    },
    {
      percent: 90,
      description:
        'Ultrahydraatio: Äärimmäisen märkä taikina, erittäin vaikea käsitellä. Vaatii erikoistekniikoita ja paljon kokemusta. Tuottaa poikkeuksellisen ilmavan ja kostean leivän.',
    },
    {
      percent: 95,
      description:
        'Äärimmäinen hydraatio: Lähes nestemäinen taikina. Vaatii erityisiä käsittelytekniikoita ja astioita. Vain kokeilunhaluisille eksperteille. Tuottaa hyvin kostean ja erikoisrakenteisen leivän.',
    },
  ]

  const setHydrationLevel = percent => {
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
    return ((waterAmount / flourAmount) * 100).toFixed(1)
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
                  onChange={e => setFlourAmount(Number(e.target.value))}
                />
                <Value>{flourAmount} g</Value>
              </SliderWrapper>
              <InputWrapper>
                <NumberInput
                  type="number"
                  min="100"
                  max="2000"
                  value={flourAmount}
                  onChange={e => setFlourAmount(Number(e.target.value))}
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
                  onChange={e => setWaterAmount(Number(e.target.value))}
                />
                <Value>{waterAmount} g</Value>
              </SliderWrapper>
              <InputWrapper>
                <NumberInput
                  type="number"
                  min={Math.floor(flourAmount * 0.5)}
                  max={Math.ceil(flourAmount * 0.9)}
                  value={waterAmount}
                  onChange={e => setWaterAmount(Number(e.target.value))}
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
                  onChange={e => setStarterAmount(Number(e.target.value))}
                />
                <Value>{starterAmount} g</Value>
              </SliderWrapper>
              <InputWrapper>
                <NumberInput
                  type="number"
                  min={Math.floor(flourAmount * 0.1)}
                  max={Math.ceil(flourAmount * 0.5)}
                  value={starterAmount}
                  onChange={e => setStarterAmount(Number(e.target.value))}
                />
                <Unit>g</Unit>
              </InputWrapper>
            </InputSliderWrapper>
          </SliderCard>
        </SliderSection>

        <HydrationSection>
          <HydrationTitle>Valitse hydraatiotaso</HydrationTitle>
          <HydrationButtons>
            {hydrationLevels.map(level => (
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
