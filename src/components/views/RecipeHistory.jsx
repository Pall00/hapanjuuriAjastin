import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'

const RecipeHistory = () => {
  const [dateFilter, setDateFilter] = useState('all') // 'all', 'week', 'month', 'year'
  const { user } = useAuth()

  return (
    <Container>
      <Header>
        <Title>Leipomishistoria</Title>
        <SubTitle>Seuraa ja analysoi aiempia leipomuksiasi</SubTitle>
      </Header>

      <MainContent>
        <ControlPanel>
          <FilterSection>
            <FilterLabel>Näytä:</FilterLabel>
            <FilterButtons>
              <FilterButton
                $active={dateFilter === 'all'}
                onClick={() => setDateFilter('all')}
              >
                Kaikki
              </FilterButton>
              <FilterButton
                $active={dateFilter === 'week'}
                onClick={() => setDateFilter('week')}
              >
                Viikko
              </FilterButton>
              <FilterButton
                $active={dateFilter === 'month'}
                onClick={() => setDateFilter('month')}
              >
                Kuukausi
              </FilterButton>
              <FilterButton
                $active={dateFilter === 'year'}
                onClick={() => setDateFilter('year')}
              >
                Vuosi
              </FilterButton>
            </FilterButtons>
          </FilterSection>

          <AddRecipeButton>
            + Lisää uusi leipomus
          </AddRecipeButton>
        </ControlPanel>

        {!user ? (
          <LoginPrompt>
            <LoginIcon>🔐</LoginIcon>
            <LoginMessage>
              Kirjaudu sisään nähdäksesi leipomishistoriasi
            </LoginMessage>
          </LoginPrompt>
        ) : (
          <RecipeGrid>
            <EmptyState>
              <EmptyIcon>📝</EmptyIcon>
              <EmptyMessage>
                Ei vielä reseptejä. Aloita lisäämällä ensimmäinen resepti!
              </EmptyMessage>
            </EmptyState>
          </RecipeGrid>
        )}
      </MainContent>
    </Container>
  )
}

export default RecipeHistory

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: rgb(251, 249, 244);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 80px;
    border-radius: 8px;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgb(231, 223, 198);
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
`

const Title = styled.h2`
  color: rgb(139, 125, 91);
  font-size: 2.2rem;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const SubTitle = styled.p`
  color: rgb(139, 125, 91);
  font-size: 1.1rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`

const FilterLabel = styled.span`
  color: rgb(139, 125, 91);
  font-weight: 600;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid rgb(139, 125, 91);
  border-radius: 6px;
  background-color: ${props => props.$active ? 'rgb(139, 125, 91)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'rgb(139, 125, 91)'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background-color: ${props => props.$active ? 'rgb(117, 106, 78)' : 'rgba(139, 125, 91, 0.1)'};
  }

  @media (max-width: 768px) {
    flex: 1;
    text-align: center;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`

const AddRecipeButton = styled.button`
  background-color: rgb(139, 125, 91);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(117, 106, 78);
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem 1rem;
  }
`

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  min-height: 300px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`

const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: rgb(139, 125, 91);
`

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const EmptyMessage = styled.p`
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const LoginPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  color: rgb(139, 125, 91);
`

const LoginIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const LoginMessage = styled.p`
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`