import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'

export const useTimer = () => useContext(TimerContext)
