import { useState } from 'react'
import {
  Card,
  CardHeader,
  HeaderContent,
  DateLabel,
  Rating,
  Star,
  ActionsButton,
  ActionsMenu,
  ActionButton,
  CardContent,
  IngredientGrid,
  IngredientItem,
  IngredientIcon,
  IngredientLabel,
  IngredientValue,
  NotesSection,
  NotesLabel,
  Notes,
} from '../../styles/pages/recipes/RecipeCardStyles'

const RecipeCard = ({ recipe, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false)

  const formatDate = timestamp => {
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
              <Star key={index} $filled={index < recipe.rating}>
                ★
              </Star>
            ))}
          </Rating>
        </HeaderContent>
        <ActionsButton onClick={() => setShowActions(!showActions)}>⋮</ActionsButton>
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

          <IngredientItem>
            <IngredientIcon>💦</IngredientIcon>
            <IngredientLabel>Hydraatio</IngredientLabel>
            <IngredientValue>{calculateHydration()}%</IngredientValue>
          </IngredientItem>

          <IngredientItem>
            <IngredientIcon>⌚️</IngredientIcon>
            <IngredientLabel>Kohotus aika</IngredientLabel>
            <IngredientValue>{recipe.riseTime} h</IngredientValue>
          </IngredientItem>
        </IngredientGrid>

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
