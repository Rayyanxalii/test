import { useState, useEffect } from 'react'
import './App.css'
import ValentineCard from './components/ValentineCard'
import WelcomeScreen from './components/WelcomeScreen'
import FloatingHearts from './components/FloatingHearts'
import ProgressTracker from './components/ProgressTracker'
import CompletionCelebration from './components/CompletionCelebration'
import MusicPlayer from './components/MusicPlayer'
import ParticleBackground from './components/ParticleBackground'


function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [viewedDays, setViewedDays] = useState(new Set())
  const [showCelebration, setShowCelebration] = useState(false)

  // Track when a day's special feature is viewed
  const handleDayViewed = (dayIndex) => {
    setViewedDays(prev => {
      const newSet = new Set(prev)
      newSet.add(dayIndex)

      // Check if all 8 days are viewed
      if (newSet.size === 8 && !showCelebration) {
        setTimeout(() => setShowCelebration(true), 1000)
      }

      return newSet
    })
  }

  return (
    <>
      {/* Welcome screen on first load */}
      {showWelcome && <WelcomeScreen onClose={() => setShowWelcome(false)} />}

      {/* Particle background */}
      {!showWelcome && <ParticleBackground />}

      {/* Floating hearts background */}
      {!showWelcome && <FloatingHearts />}

      {/* Music player */}
      {!showWelcome && <MusicPlayer />}

      {/* Main Valentine's card */}
      {!showWelcome && <ValentineCard onDayViewed={handleDayViewed} />}


      {/* Progress tracker */}
      {!showWelcome && <ProgressTracker viewedDays={viewedDays} />}

      {/* Completion celebration */}
      {showCelebration && (
        <CompletionCelebration
          isComplete={viewedDays.size === 8}
          onClose={() => setShowCelebration(false)}
        />
      )}
    </>
  )
}

export default App
