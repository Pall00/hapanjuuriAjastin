import styled from 'styled-components'
import { PrimaryButton } from '../../components/Buttons'

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing(4)};
`

export const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  padding: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(6)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(2)};
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`

export const FormSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  margin: 0 0 ${({ theme }) => theme.spacing(4)} 0;
  font-weight: 600;
`

export const RatingContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

export const RatingButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(2)};
`

export const RatingButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${props => (props.$active ? props.theme.colors.primary.main : 'transparent')};
  color: ${props => (props.$active ? 'white' : props.theme.colors.primary.main)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props =>
      props.$active ? props.theme.colors.primary.dark : props.theme.colors.primary.hover};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(8)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`

export const Button = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const SubmitButton = styled(PrimaryButton)`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const CancelButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }
`
