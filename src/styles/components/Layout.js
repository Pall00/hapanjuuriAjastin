import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(4)};
    margin-top: 80px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
`
