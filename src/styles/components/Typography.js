import styled from 'styled-components'

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2.2rem;
  margin: 0 0 ${({ theme }) => theme.spacing(6)} 0;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
    margin: 0 0 ${({ theme }) => theme.spacing(4)} 0;
  }
`

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.1rem;
  margin: ${({ theme }) => theme.spacing(2)} 0 0 0;
  opacity: 0.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`
