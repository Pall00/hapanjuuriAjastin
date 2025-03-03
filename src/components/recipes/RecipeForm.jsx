import { useState } from 'react'
import styled from 'styled-components'
import { db } from '../../config/firebase'
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '../../contexts/AuthContext'
import Notification from '../common/Notification'

const RecipeForm = ({ onClose, recipe, onSave }) => {
  const { user } = useAuth()
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState('success')

  const [formData, setFormData] = useState(
    recipe ? {
      flourAmount: recipe.ingredients.flour,
      waterAmount: recipe.ingredients.water,
      starterAmount: recipe.ingredients.starter,
      saltAmount: recipe.ingredients.salt,
      hydrationLevel: recipe.hydrationLevel || Math.round((recipe.ingredients.water / recipe.ingredients.flour) * 100),
      riseTime: recipe.riseTime,
      rating: recipe.rating,
      notes: recipe.notes || '',
    } : {
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'notes' ? value : Number(value),
    }))
  }

  const handleSubmit = async (e) => {
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
      <Form onSubmit={handleSubmit}>
        <Header>
          <Title>{recipe ? 'Muokkaa reseptiä' : 'Lisää uusi resepti'}</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>

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
              {[1, 2, 3, 4, 5].map((rating) => (
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

const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`

const Form = styled.form`
  background-color: rgb(251, 249, 244);
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 8px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgb(231, 223, 198);
`

const Title = styled.h2`
  color: rgb(139, 125, 91);
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: rgb(139, 125, 91);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;

  &:hover {
    color: rgb(117, 106, 78);
  }
`

const FormSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h3`
  color: rgb(139, 125, 91);
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
`

const InputGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  color: rgb(139, 125, 91);
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgb(231, 223, 198);
  border-radius: 6px;
  font-size: 1rem;
  color: rgb(139, 125, 91);
  
  &:focus {
    outline: none;
    border-color: rgb(139, 125, 91);
  }
`

const RatingContainer = styled.div`
  margin-bottom: 1rem;
`

const RatingButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const RatingButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid rgb(139, 125, 91);
  border-radius: 6px;
  background-color: ${props => props.$active ? 'rgb(139, 125, 91)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'rgb(139, 125, 91)'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.$active ? 'rgb(117, 106, 78)' : 'rgba(139, 125, 91, 0.1)'};
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgb(231, 223, 198);
  border-radius: 6px;
  font-size: 1rem;
  color: rgb(139, 125, 91);
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: rgb(139, 125, 91);
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const SubmitButton = styled(Button)`
  background-color: rgb(139, 125, 91);
  color: white;
  border: none;

  &:hover {
    background-color: rgb(117, 106, 78);
  }
`

const CancelButton = styled(Button)`
  background-color: transparent;
  color: rgb(139, 125, 91);
  border: 1px solid rgb(139, 125, 91);

  &:hover {
    background-color: rgba(139, 125, 91, 0.1);
  }
`