import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  PrimaryButton,
  ErrorMessage,
  SuccessMessage,
} from '../../styles/components'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const { signup, login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        await login(email, password)
        setSuccess('Kirjautuminen onnistui!')
      } else {
        await signup(email, password)
        setSuccess('Rekisteröityminen onnistui!')
      }

      setTimeout(() => {
        navigate('/laskuri')
      }, 1500)
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return (
    <Container>
      <AuthCard>
        <Title>{isLogin ? 'Kirjaudu sisään' : 'Luo tili'}</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Sähköposti</Label>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </InputGroup>

          <InputGroup>
            <Label>Salasana</Label>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={loading}>
            {isLogin ? 'Kirjaudu' : 'Rekisteröidy'}
          </SubmitButton>
        </Form>

        <ToggleText>
          {isLogin ? 'Eikö sinulla ole tiliä?' : 'Onko sinulla jo tili?'}
          <ToggleButton onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Rekisteröidy' : 'Kirjaudu sisään'}
          </ToggleButton>
        </ToggleText>
      </AuthCard>
    </Container>
  )
}

export default Auth

const AuthCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing(8)};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`

const SubmitButton = styled(PrimaryButton)`
  margin-top: ${({ theme }) => theme.spacing(4)};
`

const ToggleText = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.text.primary};
`

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 600;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing(2)};

  &:hover {
    text-decoration: underline;
  }
`
