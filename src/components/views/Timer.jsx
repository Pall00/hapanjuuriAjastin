import { useEffect, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { useTimer } from '../../hooks/useTimer'

const Timer = () => {
  const breadMakingSteps = useMemo(
    () => [
      { name: 'Jauho&Vesi', duration: 45 * 60, icon: '🌾' },
      { name: 'Juuri&Taikina + venytys ja taittelu ', duration: 30 * 60, icon: '🥖' },
      { name: 'Coil fold 1 kerta', duration: 30 * 60, icon: '🔄' },
      { name: 'Coil fold 2 kerta', duration: 30 * 60, icon: '🔄' },
      { name: 'Coil fold 3 kerta', duration: 30 * 60, icon: '🔄' },
      { name: 'Coil fold 4 kerta', duration: 30 * 60, icon: '🔄' },
      { name: 'Taikinan kohotus', duration: 240 * 60, icon: '⏳' },
      { name: 'Esimuotoilu ja kylmäkohotus', duration: 480 * 60, icon: '❄️' },
      { name: 'Taikinan viilto ja paistaminen', duration: 20 * 60, icon: '🔥' },
    ],
    [],
  )

  const {
    currentStepIndex,
    setCurrentStepIndex,
    currentTime,
    setCurrentTime,
    isRunning,
    setIsRunning,
    completedSteps,
    setCompletedSteps,
    estimatedEndTime,
    setEstimatedEndTime,
  } = useTimer()

  useEffect(() => {
    if (currentTime === null) {
      setCurrentTime(breadMakingSteps[currentStepIndex].duration)
      setCompletedSteps(new Array(breadMakingSteps.length).fill(false))
    }
  }, [currentTime, currentStepIndex, setCurrentTime, setCompletedSteps, breadMakingSteps])

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const updateEstimatedEndTime = useCallback(() => {
    const endTime = new Date()
    endTime.setSeconds(endTime.getSeconds() + currentTime)
    setEstimatedEndTime(endTime)
  }, [currentTime, setEstimatedEndTime])

  useEffect(() => {
    if (isRunning) {
      updateEstimatedEndTime()
    }
  }, [isRunning, updateEstimatedEndTime])

  useEffect(() => {
    if (!completedSteps || completedSteps.length === 0) {
      setCompletedSteps(new Array(breadMakingSteps.length).fill(false))
    }
  }, [completedSteps, setCompletedSteps, breadMakingSteps])

  const startTimer = () => {
    if (currentTime > 0) {
      setIsRunning(true)
      updateEstimatedEndTime()
      Notification.requestPermission()
    }
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCurrentTime(breadMakingSteps[currentStepIndex].duration)
    setEstimatedEndTime(null)
  }

  const handleStepSelect = index => {
    setIsRunning(false)
    setCurrentStepIndex(index)
    setCurrentTime(breadMakingSteps[index].duration)
    setEstimatedEndTime(null)
  }

  const toggleStepCompletion = index => {
    const newCompletedSteps = [...completedSteps]
    newCompletedSteps[index] = !newCompletedSteps[index]
    setCompletedSteps(newCompletedSteps)
  }

  return (
    <Container>
      <MainTimer>
        <Header>
          <Title>Leivänteko aikataulu</Title>
          <CurrentStep>
            <StepIcon>{breadMakingSteps[currentStepIndex].icon}</StepIcon>
            <StepName>
              {' '}
              <p>{breadMakingSteps[currentStepIndex].name}</p>
            </StepName>
          </CurrentStep>
        </Header>

        <TimerSection>
          <TimerDisplay $isRunning={isRunning}>{formatTime(currentTime)}</TimerDisplay>
          {estimatedEndTime && (
            <EstimatedTime>Valmis: {estimatedEndTime.toLocaleTimeString()}</EstimatedTime>
          )}
          <TotalSteps>
            Vaihe {currentStepIndex + 1} / {breadMakingSteps.length}
          </TotalSteps>
        </TimerSection>

        <ButtonContainer>
          {isRunning ? (
            <>
              <StopButton onClick={stopTimer}>Stop</StopButton>
              <ResetButton onClick={resetTimer}>Reset</ResetButton>
            </>
          ) : (
            <>
              <StartButton onClick={startTimer} disabled={currentTime === 0}>
                Aloita
              </StartButton>
              <ResetButton onClick={resetTimer}>Nollaa</ResetButton>
            </>
          )}
        </ButtonContainer>
      </MainTimer>

      <StepsProgress>
        {breadMakingSteps.map((step, index) => (
          <StepCard
            key={index}
            $active={index === currentStepIndex}
            $completed={completedSteps[index]}
          >
            <StepInfo onClick={() => handleStepSelect(index)}>
              <StepIconWrapper>{step.icon}</StepIconWrapper>
              <StepDetails>
                <StepTitle>{step.name}</StepTitle>
                <StepDuration>{formatTime(step.duration)}</StepDuration>
              </StepDetails>
            </StepInfo>
            <CompleteButton
              onClick={() => toggleStepCompletion(index)}
              $completed={completedSteps[index]}
            >
              {completedSteps[index] ? '✓' : 'Valmis'}
            </CompleteButton>
          </StepCard>
        ))}
      </StepsProgress>
    </Container>
  )
}

export default Timer

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

const MainTimer = styled.div`
  background-color: #fff8e8;
  border: 1px solid #faecd0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 8px;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e7dfc6;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`

const Title = styled.h2`
  color: #8b7d5b;
  font-size: 2.2rem;
  margin: 0 0 1.5rem 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
  }
`

const CurrentStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #8b7d5b;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const StepCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${props => (props.$active ? '#FFF8E8' : '#F5F1E3')};
  border: 1px solid ${props => (props.$active ? '#FAECD0' : '#E7DFC6')};
  border-radius: 8px;
  transition: all 0.2s ease;

  ${props =>
    props.$completed &&
    `
    border-color: #A5D6A7;
    background-color: #F1F8F1;
  `}

  @media (max-width: 768px) {
    padding: 0.75rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`

const StepInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StepIconWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
  }
`

const StepDetails = styled.div`
  flex: 1;
`

const StepTitle = styled.div`
  color: rgb(139, 125, 91);
  font-weight: 600;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const TotalSteps = styled.div`
  font-size: 1.1rem;
  color: #8b7d5b;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const StepsProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

const StepIcon = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgb(245, 241, 227);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`

const StepName = styled.div`
  color: rgb(139, 125, 91);
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const StepDuration = styled.div`
  font-size: 0.9rem;
  color: rgb(139, 125, 91);
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

const TimerDisplay = styled.div`
  font-size: 4rem;
  font-weight: bold;
  background-color: white;
  padding: 1.5rem 2.5rem;
  border-radius: 12px;
  color: ${props => (props.$isRunning ? '#4CAF50' : '#8B7D5B')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding: 1rem 1.5rem;
    border-radius: 8px;
  }
`

const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    min-width: 100px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const EstimatedTime = styled.div`
  font-size: 1.2rem;
  color: #8b7d5b;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const StopButton = styled(Button)`
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #e53935;
  }
`

const StartButton = styled(Button)`
  background-color: #4caf50;
  color: white;

  &:hover:not(:disabled) {
    background-color: #43a047;
  }
`

const ResetButton = styled(Button)`
  background-color: #8b7d5b;
  color: white;

  &:hover {
    background-color: #756a4e;
  }
`

const CompleteButton = styled(Button)`
  padding: 0.6rem 1rem;
  background-color: ${props => (props.$completed ? '#4CAF50' : 'white')};
  color: ${props => (props.$completed ? 'white' : '#4CAF50')};
  border: 2px solid rgb(76, 175, 80);
  min-width: auto;

  &:hover {
    background-color: ${props => (props.$completed ? '#43A047' : '#F1F8F1')};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`
