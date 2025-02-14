import {useState} from "react"
import styled from "styled-components"

const Ajastin = () => {
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0)


  const breadMakingSteps = [
    {name: "Jauho&Vesi", duration: 1 * 60},
    {name: "Juuri&Taikina + venytys ja taittelu ", duration: 1* 60},
    {name: "Coil fold 1 kerta", duration: 1*60},
    {name: "Coil fold 2 kerta", duration: 1*60},
    {name: "Coil fold 3 kerta", duration: 1*60},
    {name: "Coil fold 4 kerta", duration: 1*60},
    {name: "Taikinan kohotus", duration: 1*60},
    {name: "Esimuotoilu ja kylmäkohotus", duration: 1*60},
    {name: "Taikinan viilto ja paistaminen", duration: 1*60}
]

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

  return (
<Container>
    <Information>
    <h2>Leivänteko aikataulu</h2>
    <p>{breadMakingSteps[currentStepIndex].name}</p>
    <TotalSteps>
            Step {currentStepIndex + 1} of {breadMakingSteps.length}
          </TotalSteps>
    </Information>

    <StepsProgress>
        {breadMakingSteps.map((step, index) => (
          <StepRow key={index}>
            <Step active={index === currentStepIndex}>
              {step.name} ({formatTime(step.duration)})
            </Step>
          </StepRow>
        ))}
      </StepsProgress>
</Container>

  )
}

export default Ajastin


const Container = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  width: 80%
  margin: 0 auto
  padding: 2rem 0
  gap: 2rem
`

const Information = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  gap: 1.5rem
  color: rgb(148, 142, 89)
  
  h2 {
    font-size: 2.5rem
    font-weight: 600
  }
  
  p {
    font-size: 1.5rem
    font-weight: 600
  }
`

const TotalSteps = styled.div`
  font-size: 1.2rem
  color: rgb(148, 142, 89)
  display: flex
  align-items: center
`

const StepsProgress = styled.div`
  width: 100%
  display: flex
  flex-direction: column
  gap: 0.5rem
`
const StepRow = styled.div`
  display: flex
  gap: 1rem
  align-items: center
`

const Step = styled.div`
  flex: 1
  padding: 0.8rem
  background-color: ${props => 
    props.active 
      ? 'rgba(148, 142, 89, 0.3)' 
      : 'rgba(148, 142, 89, 0.1)'}
  border-radius: 4px
  color: rgb(148, 142, 89)
  font-size: 1rem
  cursor: pointer
  transition: background-color 0.3s
  
  &:hover {
    background-color: rgba(148, 142, 89, 0.2)
  }
`