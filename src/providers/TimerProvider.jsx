import { useState, useEffect } from 'react'
import { TimerContext } from '../contexts/TimerContext'

export const TimerProvider = ({ children }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState([])
  const [estimatedEndTime, setEstimatedEndTime] = useState(null)

  useEffect(() => {
    let interval
    if (isRunning && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev - 1)
      }, 1000)
    } else if (currentTime === 0) {
      setIsRunning(false)
      if (Notification.permission === 'granted') {
        new Notification('Vaihe valmis!', {
          body: 'Nykyinen vaihe on valmis!',
        })
      }
    }
    return () => clearInterval(interval)
  }, [isRunning, currentTime])

  const value = {
    currentStepIndex,
    setCurrentStepIndex,
    currentTime,
    setCurrentTime,
    isRunning,
    setIsRunning,
    completedSteps,
    setCompletedSteps,
    estimatedEndTime,
    setEstimatedEndTime,
  }

  return (
    <TimerContext.Provider value={value}>
      {children}
    </TimerContext.Provider>
  )
}