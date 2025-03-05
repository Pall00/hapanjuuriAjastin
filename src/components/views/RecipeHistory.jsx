import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import RecipeForm from '../recipes/RecipeForm'
import RecipeCard from '../recipes/RecipeCard'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Notification from '../common/Notification'
import { Container, Header, Title, SubTitle } from '../../styles/components'
import {
  MainContent,
  ControlPanel,
  FilterSection,
  FilterLabel,
  FilterButtons,
  FilterButton,
  AddRecipeButton,
  RecipeGrid,
  StateContainer,
  StateIcon,
  StateMessage,
  LoadingIcon,
} from '../../styles/pages/recipes'

const RecipeHistory = () => {
  const [dateFilter, setDateFilter] = useState('all')
  const { user } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('success')

  const fetchRecipes = useCallback(async () => {
    try {
      setLoading(true)
      const recipesRef = collection(db, 'recipes')

      let q = query(recipesRef, where('userId', '==', user.uid))

      const querySnapshot = await getDocs(q)
      const fetchedRecipes = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))

      const sortedRecipes = fetchedRecipes.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0
        return b.createdAt.seconds - a.createdAt.seconds
      })

      setRecipes(sortedRecipes)
    } catch (error) {
      console.error('Error fetching recipes:', error)
      setNotificationMessage('Virhe haettaessa reseptejä')
      setNotificationType('error')
      setShowNotification(true)
    } finally {
      setLoading(false)
    }
  }, [user, setNotificationMessage, setNotificationType, setShowNotification])

  const handleDelete = async recipeId => {
    try {
      await deleteDoc(doc(db, 'recipes', recipeId))
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId))
      setNotificationMessage('Resepti poistettu')
      setNotificationType('success')
      setShowNotification(true)
    } catch (error) {
      console.error('Error deleting recipe:', error)
      setNotificationMessage('Virhe poistettaessa reseptiä')
      setNotificationType('error')
      setShowNotification(true)
    }
  }

  const handleEdit = recipe => {
    setSelectedRecipe(recipe)
    setShowForm(true)
  }

  useEffect(() => {
    if (user) {
      fetchRecipes()
    } else {
      setRecipes([])
      setLoading(false)
    }
  }, [user, dateFilter, fetchRecipes])

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
              <FilterButton $active={dateFilter === 'all'} onClick={() => setDateFilter('all')}>
                Kaikki
              </FilterButton>
              <FilterButton $active={dateFilter === 'week'} onClick={() => setDateFilter('week')}>
                Viikko
              </FilterButton>
              <FilterButton $active={dateFilter === 'month'} onClick={() => setDateFilter('month')}>
                Kuukausi
              </FilterButton>
              <FilterButton $active={dateFilter === 'year'} onClick={() => setDateFilter('year')}>
                Vuosi
              </FilterButton>
            </FilterButtons>
          </FilterSection>

          <AddRecipeButton onClick={() => setShowForm(true)}>+ Lisää uusi resepti</AddRecipeButton>
        </ControlPanel>

        {!user ? (
          <RecipeGrid>
            <StateContainer>
              <StateIcon>🔐</StateIcon>
              <StateMessage>Kirjaudu sisään nähdäksesi leipomishistoriasi</StateMessage>
            </StateContainer>
          </RecipeGrid>
        ) : (
          <RecipeGrid>
            {loading ? (
              <StateContainer>
                <LoadingIcon>🔄</LoadingIcon>
                <StateMessage>Ladataan reseptejä...</StateMessage>
              </StateContainer>
            ) : recipes.length === 0 ? (
              <StateContainer>
                <StateIcon>📝</StateIcon>
                <StateMessage>
                  Ei vielä reseptejä. Aloita lisäämällä ensimmäinen resepti!
                </StateMessage>
              </StateContainer>
            ) : (
              recipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            )}
          </RecipeGrid>
        )}
      </MainContent>
      {showForm && (
        <RecipeForm
          onClose={() => {
            setShowForm(false)
            setSelectedRecipe(null)
          }}
          recipe={selectedRecipe}
          onSave={fetchRecipes}
        />
      )}

      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
    </Container>
  )
}

export default RecipeHistory
