import styled from "styled-components"
import Header from "./components/banner/Header"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Laskuri from "./components/views/Laskuri"
import Ohje from './components/views/Ohje'
import Ajastin from './components/views/Ajastin'
import Info from './components/views/Info'

const App = () => {
  return (
    <Router>
      <Container>
        <Banner>
          <Header/>
        </Banner>
        <Routes>
          <Route path="/laskuri" element={<Laskuri />} />
          <Route path="/ohje" element={<Ohje />} />
          <Route path="/ajastin" element={<Ajastin />} />
          <Route path="/" element={<Info />} />
        </Routes>
        
      </Container>
    </Router>
  )
}

export default App

const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(148, 142, 89) 0%, rgb(172, 148, 105) 100%);
`