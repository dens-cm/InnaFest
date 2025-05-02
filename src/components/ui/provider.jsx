'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Provider({ children, theme }) {
  return (
    <ChakraProvider value={theme}>
      {children}
    </ChakraProvider>
  )
}