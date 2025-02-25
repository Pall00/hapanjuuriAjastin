import { useState } from 'react'
import styled from 'styled-components'

const RecipeCard = ({ recipe, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false)

  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    try {
      const date = timestamp.toDate()
      return date.toLocaleDateString('fi-FI', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch (error) {
      console.error('Date error:', error)
      return 'Virheellinen päivämäärä'
    }
  }

  const calculateHydration = () => {
    const { water, flour } = recipe.ingredients
    return ((water / flour) * 100).toFixed(1)
  }

  return (
    <Card>
      <CardHeader>
        <HeaderContent>
          <DateLabel>{formatDate(recipe.createdAt)}</DateLabel>
          <Rating>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                $filled={index < recipe.rating}
              >
                ★
              </Star>
            ))}
          </Rating>
        </HeaderContent>
        <ActionsButton onClick={() => setShowActions(!showActions)}>
          ⋮
        </ActionsButton>
        {showActions && (
          <ActionsMenu>
            <ActionButton
              onClick={() => {
                onEdit(recipe)
                setShowActions(false)
              }}
            >
              Muokkaa
            </ActionButton>
            <ActionButton
              $delete
              onClick={() => {
                onDelete(recipe.id)
                setShowActions(false)
              }}
            >
              Poista
            </ActionButton>
          </ActionsMenu>
        )}
      </CardHeader>

      <CardContent>
        <IngredientGrid>
          <IngredientItem>
            <IngredientIcon>🌾</IngredientIcon>
            <IngredientLabel>Jauhot</IngredientLabel>
            <IngredientValue>{recipe.ingredients.flour}g</IngredientValue>
          </IngredientItem>

          <IngredientItem>
            <IngredientIcon>💧</IngredientIcon>
            <IngredientLabel>Vesi</IngredientLabel>
            <IngredientValue>{recipe.ingredients.water}g</IngredientValue>
          </IngredientItem>

          <IngredientItem>
            <IngredientIcon>🍞</IngredientIcon>
            <IngredientLabel>Juuri</IngredientLabel>
            <IngredientValue>{recipe.ingredients.starter}g</IngredientValue>
          </IngredientItem>

          <IngredientItem>
            <IngredientIcon>🧂</IngredientIcon>
            <IngredientLabel>Suola</IngredientLabel>
            <IngredientValue>{recipe.ingredients.salt}g</IngredientValue>
          </IngredientItem>
        </IngredientGrid>

        <StatsSection>
          <StatItem>
            <StatLabel>Hydraatio</StatLabel>
            <StatValue>{calculateHydration()}%</StatValue>
          </StatItem>
        </StatsSection>

        {recipe.notes && (
          <NotesSection>
            <NotesLabel>Muistiinpanot:</NotesLabel>
            <Notes>{recipe.notes}</Notes>
          </NotesSection>
        )}
      </CardContent>
    </Card>
  )
}

export default RecipeCard

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const CardHeader = styled.div`
  padding: 1rem;
  background-color: rgb(245, 239, 217);
  border-bottom: 1px solid rgb(231, 223, 198);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`

const HeaderContent = styled.div`
  flex: 1;
`

const DateLabel = styled.div`
  color: rgb(139, 125, 91);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
`

const Star = styled.span`
  color: ${props => props.$filled ? '#FFD700' : '#E7DFC6'};
  font-size: 1.2rem;
`

const ActionsButton = styled.button`
  background: none;
  border: none;
  color: rgb(139, 125, 91);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0.5rem;
  
  &:hover {
    color: rgb(117, 106, 78);
  }
`

const ActionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid rgb(231, 223, 198);
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow: hidden;
`

const ActionButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${props => props.$delete ? '#DC3545' : 'rgb(139, 125, 91)'};
  font-weight: ${props => props.$delete ? '600' : '500'};
  
  &:hover {
    background-color: ${props => props.$delete ? '#FDE8E8' : 'rgb(245, 239, 217)'};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid rgb(231, 223, 198);
  }
`

const CardContent = styled.div`
  padding: 1rem;
`

const IngredientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`

const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: rgb(251, 249, 244);
  border-radius: 6px;
`

const IngredientIcon = styled.span`
  font-size: 1.2rem;
`

const IngredientLabel = styled.span`
  color: rgb(139, 125, 91);
  font-size: 0.9rem;
  font-weight: 500;
`

const IngredientValue = styled.span`
  color: rgb(139, 125, 91);
  font-weight: 600;
  margin-left: auto;
`

const StatsSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgb(251, 249, 244);
  border-radius: 6px;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const StatLabel = styled.span`
  color: rgb(139, 125, 91);
  font-size: 0.9rem;
  font-weight: 500;
`

const StatValue = styled.span`
  color: rgb(139, 125, 91);
  font-weight: 600;
`

const NotesSection = styled.div`
  padding: 0.75rem;
  background-color: rgb(251, 249, 244);
  border-radius: 6px;
`

const NotesLabel = styled.div`
  color: rgb(139, 125, 91);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Notes = styled.p`
  color: rgb(139, 125, 91);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
  white-space: pre-wrap;
`