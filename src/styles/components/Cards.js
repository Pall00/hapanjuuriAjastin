import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing(8)};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(6)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`
