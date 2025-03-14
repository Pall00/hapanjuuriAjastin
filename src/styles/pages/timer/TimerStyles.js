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
  background-color: ${({ theme }) => theme.colors.background.paper};
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
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.background.paper : theme.colors.background.card};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.primary.light : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all 0.2s ease;
  box-shadow: ${({ theme, $active }) => ($active ? theme.shadows.small : 'none')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.small};
    transform: ${({ $active }) => ($active ? 'none' : 'translateY(-2px)')};
  }

  ${props =>
    props.$completed &&
    `
    border-color: ${props.theme.colors.success};
    background-color: ${props.theme.isDarkMode ? 'rgba(76, 175, 80, 0.2)' : '#F1F8F1'};
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`

export const StepInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  cursor: pointer;
  flex: 1;
  width: 100%;
  position: relative;

  &:hover {
    &::after {
      opacity: 0.1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: -${({ theme }) => theme.spacing(2)};
    bottom: -${({ theme }) => theme.spacing(2)};
    left: -${({ theme }) => theme.spacing(2)};
    right: -${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.colors.primary.main};
    opacity: 0;
    transition: opacity 0.2s ease;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    z-index: 0;
    pointer-events: none;
  }

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
  background: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(139, 125, 91, 0.1)'};
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.2s ease;

  ${StepInfo}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
  }
`

export const StepDetails = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: 1;
  padding-left: ${({ theme }) => theme.spacing(1)};
`

export const StepTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  flex: 1;
  font-size: 1.05rem;
  transition: color 0.2s ease;

  ${StepInfo}:hover & {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
  }
`

export const StepDuration = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.primary};
  opacity: 0.7;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;

  &::before {
    content: '⏱';
    margin-right: ${({ theme }) => theme.spacing(1)};
    font-size: 0.8rem;
  }

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
  background-color: ${({ theme, $completed }) =>
    $completed ? theme.colors.success : theme.colors.background.paper};
  color: ${({ theme, $completed }) => ($completed ? 'white' : theme.colors.success)};
  border: 2px solid ${({ theme }) => theme.colors.success};
  min-width: auto;

  &:hover {
    background-color: ${({ $completed, theme }) =>
      $completed ? '#43A047' : theme.colors.background.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    font-size: 0.9rem;
  }
`

export const ExpandToggle = styled.button`
  background-color: ${({ theme, $expanded }) =>
    $expanded ? theme.colors.primary.hover : 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 0.85rem;
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  margin-left: auto;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 24px;
    width: 24px;
    padding: ${({ theme }) => theme.spacing(0.5)};
  }
`

export const InstructionsSection = styled.div`
  max-height: ${({ $expanded }) => ($expanded ? '500px' : '0')};
  opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0;
  margin-top: ${({ $expanded, theme }) => ($expanded ? theme.spacing(3) : '0')};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    height: ${({ $expanded }) => ($expanded ? '1px' : '0')};
    background-color: ${({ theme }) => theme.colors.border};
    opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};
    transition: opacity 0.3s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: ${({ $expanded }) => ($expanded ? '600px' : '0')};
  }
`

export const InstructionsText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing(3)} 0 0;
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
  background-color: ${({ theme }) =>
    theme.isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(139, 125, 91, 0.04)'};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border-left: 3px solid ${({ theme }) => theme.colors.primary.main};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
    line-height: 1.5;
    padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
    margin: ${({ theme }) => theme.spacing(2)} 0 0;
  }
`

export const StepActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing(3)};
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing(2)};
    padding-top: ${({ theme }) => theme.spacing(2)};
  }
`
