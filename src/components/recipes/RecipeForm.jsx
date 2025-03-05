import { useState } from 'react'
import { db } from '../../config/firebase'
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '../../contexts/AuthContext'
import Notification from '../common/Notification'
import { Form, InputGroup, Label, Input, TextArea } from '../../styles/components'
import {
  FormContainer,
  FormWrapper,
  FormHeader,
  FormTitle,
  CloseButton,
  FormSection,
  SectionTitle,
  RatingContainer,
  RatingButtons,
  RatingButton,
  ButtonContainer,
  SubmitButton,
  CancelButton,
} from '../../styles/pages/recipes/RecipeFormStyles'

const RecipeForm = ({ onClose, recipe, onSave }) => {
  const { user } = useAuth()
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('success')

  const [formData, setFormData] = useState(
    recipe
      ? {
          flourAmount: recipe.ingredients.flour,
          waterAmount: recipe.ingredients.water,
          starterAmount: recipe.ingredients.starter,
          saltAmount: recipe.ingredients.salt,
          hydrationLevel:
            recipe.hydrationLevel ||
            Math.round((recipe.ingredients.water / recipe.ingredients.flour) * 100),
          riseTime: recipe.riseTime,
          rating: recipe.rating,
          notes: recipe.notes || '',
        }
      : {
          flourAmount: 350,
          waterAmount: 274,
          starterAmount: 70,
          saltAmount: 7,
          hydrationLevel: 78,
          riseTime: 8,
          rating: 3,
          notes: '',
        },
  )

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'notes' ? value : Number(value),
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!user) {
      setNotificationMessage('Kirjaudu sisään tallentaaksesi reseptin')
      setNotificationType('error')
      setShowNotification(true)
      return
    }

    try {
      const recipeData = {
        ...formData,
        userId: user.uid,
        ingredients: {
          flour: formData.flourAmount,
          water: formData.waterAmount,
          starter: formData.starterAmount,
          salt: formData.saltAmount,
          riseTime: formData.riseTime,
        },
      }

      if (recipe) {
        await updateDoc(doc(db, 'recipes', recipe.id), recipeData)
        setNotificationMessage('Resepti päivitetty onnistuneesti!')
      } else {
        recipeData.createdAt = serverTimestamp()
        await addDoc(collection(db, 'recipes'), recipeData)
        setNotificationMessage('Resepti tallennettu onnistuneesti!')
      }

      setNotificationType('success')
      setShowNotification(true)

      if (onSave) {
        onSave()
      }

      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error saving recipe:', error)
      setNotificationMessage('Virhe tallennettaessa reseptiä')
      setNotificationType('error')
      setShowNotification(true)
    }
  }

  return (
    <FormContainer>
      <FormWrapper>
        <FormHeader>
          <FormTitle>{recipe ? 'Muokkaa reseptiä' : 'Lisää uusi resepti'}</FormTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </FormHeader>

        <Form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Ainekset</SectionTitle>

            <InputGroup>
              <Label>Jauhot (g)</Label>
              <Input
                type="number"
                name="flourAmount"
                value={formData.flourAmount}
                onChange={handleChange}
                min="0"
              />
            </InputGroup>

            <InputGroup>
              <Label>Vesi (g)</Label>
              <Input
                type="number"
                name="waterAmount"
                value={formData.waterAmount}
                onChange={handleChange}
                min="0"
              />
            </InputGroup>

            <InputGroup>
              <Label>Hapanjuuri (g)</Label>
              <Input
                type="number"
                name="starterAmount"
                value={formData.starterAmount}
                onChange={handleChange}
                min="0"
              />
            </InputGroup>

            <InputGroup>
              <Label>Suola (g)</Label>
              <Input
                type="number"
                name="saltAmount"
                value={formData.saltAmount}
                onChange={handleChange}
                min="0"
              />
            </InputGroup>

            <InputGroup>
              <Label>Hydraatiotaso (%)</Label>
              <Input
                type="number"
                name="hydrationLevel"
                value={formData.hydrationLevel}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </InputGroup>

            <InputGroup>
              <Label>Kohotus aika (h)</Label>
              <Input
                type="number"
                name="riseTime"
                value={formData.riseTime}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </InputGroup>
          </FormSection>

          <FormSection>
            <SectionTitle>Arviointi</SectionTitle>

            <RatingContainer>
              <Label>Onnistuminen (1-5)</Label>
              <RatingButtons>
                {[1, 2, 3, 4, 5].map(rating => (
                  <RatingButton
                    key={rating}
                    type="button"
                    $active={formData.rating === rating}
                    onClick={() => setFormData(prev => ({ ...prev, rating }))}
                  >
                    {rating}
                  </RatingButton>
                ))}
              </RatingButtons>
            </RatingContainer>
          </FormSection>

          <FormSection>
            <SectionTitle>Muistiinpanot</SectionTitle>
            <TextArea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Kirjoita huomioita reseptistäsi..."
              rows="4"
            />
          </FormSection>

          <ButtonContainer>
            <CancelButton type="button" onClick={onClose}>
              Peruuta
            </CancelButton>
            <SubmitButton type="submit">
              {recipe ? 'Päivitä resepti' : 'Tallenna resepti'}
            </SubmitButton>
          </ButtonContainer>
        </Form>
      </FormWrapper>

      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
    </FormContainer>
  )
}

export default RecipeForm
