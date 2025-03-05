import { useState, useCallback, useMemo } from 'react'
import {
  Section,
  SectionTitle,
  InputContainer,
  InputGroup,
  Label,
  RiseInputWrapper,
  Input,
  Select,
  ResultCard,
  ResultTitle,
  ResultsGrid,
  ResultItem,
  ResultLabel,
  ResultValue,
  NotesCard,
  NotesTitle,
  NotesList,
  NotesItem,
  ErrorMessage,
} from '../../styles/pages/calculator'

const RiseCalculator = () => {
  const [temperature, setTemperature] = useState('23')
  const [unit, setUnit] = useState('C')

  const tempData = useMemo(
    () => [
      { fahrenheit: 80, celsius: 27, timing: 5.5, rise: 30 },
      { fahrenheit: 79, celsius: 26, timing: 5.5, rise: 30 },
      { fahrenheit: 78, celsius: 25.5, timing: 6, rise: 40 },
      { fahrenheit: 77, celsius: 25, timing: 6, rise: 40 },
      { fahrenheit: 76, celsius: 24.5, timing: 7, rise: 50 },
      { fahrenheit: 75, celsius: 24, timing: 7, rise: 50 },
      { fahrenheit: 74, celsius: 23, timing: 8, rise: 55 },
      { fahrenheit: 73, celsius: 22.5, timing: 9, rise: 60 },
      { fahrenheit: 72, celsius: 22, timing: 10, rise: 65 },
      { fahrenheit: 71, celsius: 21.5, timing: 11, rise: 70 },
      { fahrenheit: 70, celsius: 21, timing: 12, rise: 75 },
      { fahrenheit: 69, celsius: 20.5, timing: 13, rise: 80 },
      { fahrenheit: 68, celsius: 20, timing: 14, rise: 85 },
      { fahrenheit: 67, celsius: 19.5, timing: 15, rise: 90 },
      { fahrenheit: 66, celsius: 19, timing: 16, rise: 95 },
      { fahrenheit: 65, celsius: 18, timing: 16, rise: 100 },
    ],
    [],
  )

  const convertToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9

  const calculateRiseTime = useCallback(() => {
    if (!temperature) return null

    const tempNum = parseFloat(temperature)
    const tempInC = unit === 'F' ? convertToCelsius(tempNum) : tempNum

    let closestTemp = tempData[0]
    let smallestDiff = Math.abs(tempInC - tempData[0].celsius)

    tempData.forEach(data => {
      const diff = Math.abs(tempInC - data.celsius)
      if (diff < smallestDiff) {
        smallestDiff = diff
        closestTemp = data
      }
    })

    return closestTemp
  }, [temperature, unit, tempData])

  const result = calculateRiseTime()

  return (
    <Section>
      <SectionTitle>Kohotusajan laskuri</SectionTitle>

      <InputContainer>
        <InputGroup>
          <Label>Taikinan lämpötila</Label>
          <RiseInputWrapper>
            <Input
              type="number"
              value={temperature}
              onChange={e => setTemperature(e.target.value)}
              placeholder="Syötä lämpötila"
            />
          </RiseInputWrapper>
        </InputGroup>

        <InputGroup>
          <Label>Yksikkö</Label>
          <Select value={unit} onChange={e => setUnit(e.target.value)}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </Select>
        </InputGroup>
      </InputContainer>

      {result && temperature && (
        <ResultCard>
          <ResultTitle>Arvioitu kohotusaika:</ResultTitle>
          <ResultsGrid>
            <ResultItem>
              <ResultLabel>Aika:</ResultLabel>
              <ResultValue>{result.timing} tuntia</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Tavoite nousu:</ResultLabel>
              <ResultValue>{result.rise}%</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Lämpötila:</ResultLabel>
              <ResultValue>
                {result.celsius}°C / {result.fahrenheit}°F
              </ResultValue>
            </ResultItem>
          </ResultsGrid>

          <NotesCard>
            <NotesTitle>Huomioi:</NotesTitle>
            <NotesList>
              <NotesItem>Ajat ovat arvioita ja voivat vaihdella</NotesItem>
              <NotesItem>Juuren vahvuus vaikuttaa kohotusaikaan</NotesItem>
              <NotesItem>Jauhojen tyyppi voi vaikuttaa kohotusaikaan</NotesItem>
              <NotesItem>Tarkkaile taikinaa kohotuksen aikana</NotesItem>
            </NotesList>
          </NotesCard>
        </ResultCard>
      )}

      {temperature && !result && (
        <ErrorMessage>
          Syötä kelvollinen lämpötila väliltä {unit === 'C' ? '18-27°C' : '65-80°F'}
        </ErrorMessage>
      )}
    </Section>
  )
}

export default RiseCalculator
