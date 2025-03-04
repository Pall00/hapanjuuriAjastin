import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

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

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 80px;
  }
`

const AuthCard = styled.div`
  background-color: #fff8e8;
  border: 1px solid #faecd0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled.h2`
  color: #8b7d5b;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #8b7d5b;
  font-weight: 600;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e7dfc6;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #8b7d5b;
  }
`

const SubmitButton = styled.button`
  background-color: #8b7d5b;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #756a4e;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  background-color: #fdecea;
  color: #b71c1c;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 500;
`

const ToggleText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #8b7d5b;
`

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #8b7d5b;
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

const SuccessMessage = styled.div`
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 500;
  text-align: center;
`
