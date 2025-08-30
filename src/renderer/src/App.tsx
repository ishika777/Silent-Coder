import React, { useCallback, useState } from 'react'
import { Button } from './components/ui/button'
import { toast } from 'sonner'
import { WelcomeScreen } from './components/welcome-screen'

function App(): React.JSX.Element {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const handleSettingsOpen = useCallback(() => {
      setIsSettingsOpen(true)
    }, [])

  return (
    <>
        <WelcomeScreen onOpenSettings={handleSettingsOpen} />
    </>
  )
}

export default App
