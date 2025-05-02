import React from 'react'
import * as Chakra from '@chakra-ui/react'

export default function Header() {
  return (
    <Chakra.Box w='100%' p='1vw' bg='rgba(255, 255, 255, 0.57)' boxShadow='0 .1vw .5vw 0 rgba(153, 153, 153, 0.18)' backdropFilter='blur(1vw)'>
        <Chakra.Heading>InnaFest</Chakra.Heading>
    </Chakra.Box>
  )
}
