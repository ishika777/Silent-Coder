import React, { useCallback, useState } from 'react'
import { Button } from './components/ui/button'
import { toast } from 'sonner'
import { WelcomeScreen } from './components/welcome-screen'
import { SettingsDialog } from './components/settings-dialog'

function App(): React.JSX.Element {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    const handleSettingsOpenClose = useCallback((open: boolean) => {
      setIsSettingsOpen(open)
    }, [])

  return (
    <>
        <WelcomeScreen onOpenSettings={() => handleSettingsOpenClose(true)} />
        <SettingsDialog open={isSettingsOpen} onOpenChange={handleSettingsOpenClose} />
    </>
  )
}

export default App
