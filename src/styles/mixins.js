import { css } from 'styled-components'

export const media = {
  mobile: styles => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: styles => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
}

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const transition = css`
  transition: all 0.2s ease;
`

export const hoverElevation = css`
  ${transition}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`
