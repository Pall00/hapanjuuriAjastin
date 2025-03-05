import styled from 'styled-components'

export const MainTimer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing(8)};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(4)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`

export const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`

export const TimerDisplay = styled.div`
  font-size: 4rem;
  font-weight: bold;
  background-color: white;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(10)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  color: ${({ theme, $isRunning }) =>
    $isRunning ? theme.colors.success : theme.colors.text.primary};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(6)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`

export const EstimatedTime = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const TotalSteps = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
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
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(6)};
    font-size: 1rem;
    min-width: 100px;
  }
`

export const StartButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.success};
  }
`

export const StopButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.error};
  color: white;

  &:hover {
    background-color: #e53935;
  }
`

export const ResetButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`

export const StepsProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`

export const StepCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.background.paper : '#F5F1E3'};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.border : '#E7DFC6')};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.2s ease;

  ${props =>
    props.$completed &&
    `
    border-color: #A5D6A7;
    background-color: #F1F8F1;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(3)};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`

export const StepInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  cursor: pointer;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const StepIconWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
  }
`

export const StepDetails = styled.div`
  flex: 1;
`

export const StepTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`

export const StepDuration = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.primary};
  opacity: 0.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`

export const CurrentStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`

export const StepIcon = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.card};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const StepName = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const CompleteButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, $completed }) => ($completed ? theme.colors.success : 'white')};
  color: ${({ theme, $completed }) => ($completed ? 'white' : theme.colors.success)};
  border: 2px solid ${({ theme }) => theme.colors.success};
  min-width: auto;

  &:hover {
    background-color: ${({ $completed }) => ($completed ? '#43A047' : '#F1F8F1')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    font-size: 0.9rem;
  }
`
