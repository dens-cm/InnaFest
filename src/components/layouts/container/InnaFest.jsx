import React from 'react'
import * as Chakra from '@chakra-ui/react'
import Header from '../../layouts/header/Header'

export default function InnaFest() {
    return (
        <Chakra.Box w='100%' h='100%' display='flex' flexDirection='column' overflow='auto'>
            {/* header */}
            <Header/>

            {/* other components */}
        </Chakra.Box>
    )
}
