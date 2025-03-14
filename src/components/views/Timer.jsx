import { useEffect, useCallback, useMemo, useState } from 'react'
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
  ExpandToggle,
  InstructionsSection,
  InstructionsText,
  StepActions,
} from '../../styles/pages/timer'

const Timer = () => {
  const breadMakingSteps = useMemo(
    () => [
      {
        name: 'Jauho&Vesi',
        duration: 45 * 60,
        icon: '🌾',
        instructions:
          'Sekoita jauhot ja vesi tasaiseksi massaksi. Anna levätä (autolyse-vaihe) 45 minuuttia. Tämä auttaa jauhojen hydratoitumisessa ja gluteenin kehittymisessä. Vältä ylityöstämistä tässä vaiheessa. Peitä kulho pyyheliinalla, jotta taikina ei kuivu pinnasta.',
      },
      {
        name: 'Juuri&Taikina + venytys ja taittelu',
        duration: 30 * 60,
        icon: '🥖',
        instructions:
          'Lisää hapanjuuri taikinaan ja sekoita se tasaisesti. Tee ensimmäinen venytys ja taittelu. Nosta taikinan reunaa, venytä sitä ylöspäin ja taita keskelle. Kierrä kulhoa ja toista joka puolelta. Tämä vahvistaa gluteeniverkostoa ja kehittää taikinan rakennetta.',
      },
      {
        name: 'Coil fold 1 kerta',
        duration: 30 * 60,
        icon: '🔄',
        instructions:
          'Tee ensimmäinen coil fold -taittelu. Ota taikinasta kiinni molemmilta sivuilta, nosta ylös ja taita keskelle. Käännä kulhoa 90° ja toista. Taikinan pitäisi alkaa tuntua vahvemmalta ja vähemmän tahmealta. Peitä ja anna levätä.',
      },
      {
        name: 'Coil fold 2 kerta',
        duration: 30 * 60,
        icon: '🔄',
        instructions:
          'Toista coil fold toisen kerran. Nyt taikinan pitäisi jo osoittaa vahvistumisen merkkejä. Se on vähemmän tarttuvaa ja pitää muotonsa paremmin. Nostettaessa sen pitäisi venyä ilman repeämistä. Peitä ja anna levätä.',
      },
      {
        name: 'Coil fold 3 kerta',
        duration: 30 * 60,
        icon: '🔄',
        instructions:
          'Tee kolmas coil fold. Taikinassa pitäisi näkyä jo ilmakuplia ja sen tekstuurin pitäisi olla sileä ja elastinen. Varo, ettet poista liikaa ilmaa taikinasta. Käsittele taikinaa hellävaroen. Peitä ja anna levätä.',
      },
      {
        name: 'Coil fold 4 kerta',
        duration: 30 * 60,
        icon: '🔄',
        instructions:
          'Viimeinen coil fold. Taikina on nyt lähes valmis pitkään kohotukseen. Taikinan pitäisi olla ilmava, vahva ja joustava. Sen pitäisi pitää muotonsa hyvin ja osoittaa selviä käymisen merkkejä (kuplia, kasvua). Peitä huolellisesti.',
      },
      {
        name: 'Taikinan kohotus',
        duration: 240 * 60,
        icon: '⏳',
        instructions:
          'Anna taikinan kohota huoneenlämmössä 3-5 tuntia tai kunnes se on kasvanut noin 50%. Taikinan pitäisi olla ilmava ja täynnä kuplia. Peitä kulho tiiviisti, jotta pinta ei kuivu. Kohotusaika voi vaihdella huoneen lämpötilan ja juuren aktiivisuuden mukaan.',
      },
      {
        name: 'Esimuotoilu ja kylmäkohotus',
        duration: 480 * 60,
        icon: '❄️',
        instructions:
          'Kaada taikina jauhotetulle alustalle ja muotoile se hellävaroen. Älä työstä taikinaa liikaa. Tarkoitus on luoda pintajännitys. Muotoile leipä ja siirrä se koriin tai kulhoon, joka on vuorattu jauhoisella liinalla. Peitä ja siirrä jääkaappiin 8-12 tunniksi.',
      },
      {
        name: 'Taikinan viilto ja paistaminen',
        duration: 20 * 60,
        icon: '🔥',
        instructions:
          'Esilämmitä uuni ja valurautapata 260°C:seen. Ota leipä jääkaapista, käännä se paistopinnalle. Tee viillot terävällä veitsellä. Nosta leipä pataan, laita kansi päälle. Paista 20 min kannellisena, poista kansi, ja paista vielä 20-25 min kunnes leipä on kullanruskea.',
      },
    ],
    [],
  )

  const [expandedSteps, setExpandedSteps] = useState({})

  const toggleStepExpansion = (index, event) => {
    event.stopPropagation()
    setExpandedSteps(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

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
                <ExpandToggle
                  onClick={e => toggleStepExpansion(index, e)}
                  $expanded={expandedSteps[index]}
                  aria-label={expandedSteps[index] ? 'Piilota ohjeet' : 'Näytä ohjeet'}
                  title={expandedSteps[index] ? 'Piilota ohjeet' : 'Näytä ohjeet'}
                >
                  {expandedSteps[index] ? '−' : '+'}
                </ExpandToggle>
              </StepDetails>
            </StepInfo>

            <StepActions>
              <CompleteButton
                onClick={() => toggleStepCompletion(index)}
                $completed={completedSteps[index]}
              >
                {completedSteps[index] ? '✓' : 'Valmis'}
              </CompleteButton>
            </StepActions>
            <InstructionsSection $expanded={expandedSteps[index]}>
              <InstructionsText>{step.instructions}</InstructionsText>
            </InstructionsSection>
          </StepCard>
        ))}
      </StepsProgress>
    </Container>
  )
}

export default Timer
