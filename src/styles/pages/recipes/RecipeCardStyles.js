import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.background.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`

export const HeaderContent = styled.div`
  flex: 1;
`

export const DateLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const Rating = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`

export const Star = styled.span`
  color: ${({ theme, $filled }) => ($filled ? '#FFD700' : theme.colors.border)};
  font-size: 1.2rem;
`

export const ActionsButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.spacing(2)};

  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`

export const ActionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.small};
  z-index: 1;
  overflow: hidden;
`

export const ActionButton = styled.button`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${({ theme, $delete }) => ($delete ? theme.colors.error : theme.colors.text.primary)};
  font-weight: ${({ $delete }) => ($delete ? '600' : '500')};

  &:hover {
    background-color: ${({ theme, $delete }) =>
      $delete ? '#FDE8E8' : theme.colors.background.card};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
`

export const IngredientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

export const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

export const IngredientIcon = styled.span`
  font-size: 1.2rem;
`

export const IngredientLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
`

export const IngredientValue = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  margin-left: auto;
`

export const NotesSection = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

export const NotesLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const Notes = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
  white-space: pre-wrap;
`
