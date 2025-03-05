import { useEffect, useCallback, useMemo } from 'react'
import { useTimer } from '../../hooks/useTimer'
import { Container, Header, Title } from '../../styles/components'
import {
  MainTimer,
  TimerSection,
  TimerDisplay,
  EstimatedTime,
  TotalSteps,
  ButtonContainer,
  StartButton,
  StopButton,
  ResetButton,
  StepsProgress,
  StepCard,
  StepInfo,
  StepIconWrapper,
  StepDetails,
  StepTitle,
  StepDuration,
  CurrentStep,
  StepIcon,
  StepName,
  CompleteButton,
} from '../../styles/pages/timer'

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
