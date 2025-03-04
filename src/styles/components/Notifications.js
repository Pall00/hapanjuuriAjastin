import styled from 'styled-components'

export const ErrorMessage = styled.div`
  background-color: #fdecea;
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
`

export const SuccessMessage = styled.div`
  background-color: #e8f5e9;
  color: ${({ theme }) => theme.colors.success};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  font-weight: 500;
  text-align: center;
`
