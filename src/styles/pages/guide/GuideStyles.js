import styled from 'styled-components'

export const RecipeBanner = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(8)};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing(4)};
    flex-direction: column;
    align-items: center;
  }
`

export const BannerItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`

export const BannerIcon = styled.span`
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`

export const BannerText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const Strong = styled.span`
  font-weight: 700;
`

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  padding: 0 ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
    padding: 0 ${({ theme }) => theme.spacing(2)};
  }
`

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

export const IngredientGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  background-color: white;
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`

export const GroupTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`

export const IngredientList = styled.ul`
  list-style-type: none;
  padding-left: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: ${({ theme }) => theme.spacing(2)};
  }
`

export const IngredientItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  position: relative;
  padding-left: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.text.secondary};

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    padding-left: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  }
`

export const InstructionSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`

export const StepItem = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(6)};
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`

export const StepNumber = styled.div`
  background-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 1.75rem;
    width: 1.75rem;
    font-size: 0.9rem;
  }
`

export const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`

export const StepContent = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`

export const TipBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing(4)};
    margin-top: ${({ theme }) => theme.spacing(6)};
  }
`

export const TipHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`

export const TipIcon = styled.span`
  font-size: 1.5rem;
  margin-right: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`

export const TipTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`

export const TipContent = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`
