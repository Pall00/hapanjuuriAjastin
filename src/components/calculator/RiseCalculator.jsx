import { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

const RiseCalculator = () => {
  const [temperature, setTemperature] = useState('23')
  const [unit, setUnit] = useState('C')

  const tempData = useMemo(() => [
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
  ], [])

  const convertToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9

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
          <InputWrapper>
            <Input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Syötä lämpötila"
            />
          </InputWrapper>
        </InputGroup>

        <InputGroup>
          <Label>Yksikkö</Label>
          <Select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </Select>
        </InputGroup>
      </InputContainer>

      {result && temperature && (
        <ResultCard>
          <ResultTitle>Arvioitu kohotusaika:</ResultTitle>
          <ResultGrid>
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
              <ResultValue>{result.celsius}°C / {result.fahrenheit}°F</ResultValue>
            </ResultItem>
          </ResultGrid>

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

const Section = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgb(245, 239, 217);
  border: 1px solid rgb(231, 223, 198);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const SectionTitle = styled.h2`
  color: rgb(139, 125, 91);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const InputContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const InputGroup = styled.div`
  flex: 1;
`

const Label = styled.label`
  display: block;
  color: rgb(139, 125, 91);
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #E7DFC6;
  border-radius: 6px;
  font-size: 1rem;
  color: rgb(139, 125, 91);
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: rgb(139, 125, 91);
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #E7DFC6;
  border-radius: 6px;
  font-size: 1rem;
  color: rgb(139, 125, 91);
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: rgb(139, 125, 91);
  }
`

const ResultCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #E7DFC6;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const ResultTitle = styled.h3`
  color: rgb(139, 125, 91);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const ResultGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E7DFC6;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const ResultLabel = styled.span`
  font-weight: 600;
  color: rgb(139, 125, 91);
`

const ResultValue = styled.span`
  color: rgb(139, 125, 91);
`

const NotesCard = styled.div`
  background-color: rgb(255, 248, 232);
  border: 1px solid #E7DFC6;
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1rem;
`

const NotesTitle = styled.h4`
  color: rgb(139, 125, 91);
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const NotesList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: rgb(139, 125, 91);
`

const NotesItem = styled.li`
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
`

const ErrorMessage = styled.div`
  color: #B71C1C;
  text-align: center;
  padding: 1rem;
  background-color: #FDECEA;
  border-radius: 6px;
  margin-top: 1rem;
`