import {useState, useEffect} from "react"
import styled from "styled-components"

const Ajastin = () => {
  
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  



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

useEffect(()=> {
  let interval;
  if (isRunning && currentTime > 0) {
    interval = setInterval(() => {
      setCurrentTime(prev => prev -1);
  },1000);
  }else if (currentTime === 0) {
    setIsRunning(false);
  }
  return () => clearInterval(interval);
},[isRunning,currentTime]);


const startTimer = () => {
  if (currentTime > 0) {
    setIsRunning(true);
  }
}

const stopTimer = () => {
  setIsRunning(false)
}

const resetTimer = () => {
  setIsRunning(false)
  setCurrentTime(breadMakingSteps[currentStepIndex].duration)
}

  return (
<Container>
    <Information>
    
    <h2>Leivänteko aikataulu</h2>
    <p>{breadMakingSteps[currentStepIndex].name}</p>
    <TimerDisplay>
    {formatTime(currentTime)}
    </TimerDisplay>
    <TotalSteps>
            Vaihe {currentStepIndex + 1} / {breadMakingSteps.length}
    </TotalSteps>
    
    </Information>

    <ButtonContainer>
      {isRunning ? (
        <>
        <StopButton onClick={stopTimer}>Stop</StopButton>
        <ResetButton onClick={resetTimer}>Reset</ResetButton>
        </>
      ) : (
        <>
            <StartButton onClick={startTimer} disable={currentTime === 0}>Start</StartButton>        
            <ResetButton onClick={resetTimer}>Reset</ResetButton>
        </>
      )}
    </ButtonContainer>
      

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

  );
};

export default Ajastin;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 2rem;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  color: rgb(148, 142, 89);
  
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const TotalSteps = styled.div`
  font-size: 1.2rem;
  color: rgb(148, 142, 89);
  display: flex;
  align-items: center;
`;

const StepsProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StepRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Step = styled.div`
  flex: 1;
  padding: 0.8rem;
  background-color: ${props => 
    props.active 
      ? 'rgba(148, 142, 89, 0.3)' 
      : 'rgba(148, 142, 89, 0.1)'};
  border-radius: 4px;
  color: rgb(148, 142, 89);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(148, 142, 89, 0.2);
  }
`;

const TimerDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
  background-color: rgba(148, 142, 89, 0.2);
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StopButton = styled.button`
  background-color:rgb(244, 67, 54);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color:rgb(158, 45, 11);
  }
`;

const StartButton = styled.button `
background-color:rgb(75, 165, 23);
color:rgb(255,255,255);
padding: 0.8rem 1.2rem;
border-radius:4px;
cursor: pointer;

&:hover{
  background-color:rgb(54, 119, 17);

}
`

const ResetButton = styled.button `
background-color:rgb(148, 142, 89);
color: rgb(255, 255, 255);
padding: 0.8rem 1.2rem;
border-radius:4px;
cursor: pointer;

&:hover{
  background-color:rgb(114, 109, 60);
}
`;

