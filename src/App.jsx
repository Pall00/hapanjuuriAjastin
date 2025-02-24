import styled from 'styled-components'
import Header from './components/banner/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DoughCalculator from './components/views/DoughCalculator'
import Guide from './components/views/Guide'
import Timer from './components/views/Timer'
import Info from './components/views/Info'
import Auth from './components/auth/Auth'
import RecipeHistory from './components/views/RecipeHistory'
import { AuthProvider } from './contexts/AuthContext'
import { TimerProvider } from './providers/TimerProvider'

const App = () => {
  return (
    <AuthProvider>
      <TimerProvider>
        <Router>
          <Container>
            <Banner>
              <Header />
            </Banner>
            <Routes>
              <Route path="/laskuri" element={<DoughCalculator />} />
              <Route path="/reseptit" element={<RecipeHistory />} />
              <Route path="/ohje" element={<Guide />} />
              <Route path="/ajastin" element={<Timer />} />
              <Route path="/" element={<Info />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Container>
        </Router>
      </TimerProvider>
    </AuthProvider>
  )
}

export default App

const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(148, 142, 89) 0%, rgb(172, 148, 105) 100%);
`