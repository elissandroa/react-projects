import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PomodoroTimer } from './components/PomodoroTimer'
import { ChakraProvider, CSSReset, Box, Text } from '@chakra-ui/react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
        <PomodoroTimer />
      </Box>
    </ChakraProvider>
  )
}

export default App
