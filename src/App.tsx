import React, { useState } from 'react'
import { Button, ChakraProvider, Flex, Textarea, useClipboard } from '@chakra-ui/react'
import './App.css'

function App() {
  const [original, setOriginal] = useState<string>('')
  const { onCopy, setValue, hasCopied } = useClipboard('')

  const removeLines = (text: string) => {
    return text.replace(/(\r\n|\n|\r)/gm, '')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOriginal(e.target.value)
    setValue(removeLines(e.target.value))
  }

  return (
    <>
      <ChakraProvider>
        <Flex direction={"column"} gap={5}>
          <Textarea onChange={handleChange}  value={original} rows={8} />
          <Button variant={'outline'} colorScheme='blue'onClick={() => setOriginal('')}>Reset</Button>
          <Textarea onChange={handleChange} value={removeLines(original)} rows={8} />
          <Button variant={'outline'} colorScheme='blue' onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</Button>
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default App
