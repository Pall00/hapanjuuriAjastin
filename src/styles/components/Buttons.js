import styled, { css } from 'styled-components'

const buttonBase = css`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(4)};
  }
`

export const PrimaryButton = styled.button`
  ${buttonBase}
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;
  border: none;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }
`

export const SecondaryButton = styled.button`
  ${buttonBase}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};

  &:hover:not(:disabled) {
    background-color: rgba(139, 125, 91, 0.1);
  }
`
