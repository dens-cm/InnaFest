import React from 'react'
import * as Chakra from '@chakra-ui/react'
import Header from '../../layouts/header/Header'

export default function InnaFest() {
    return (
        <Chakra.Box w='100%' h='100%' display='flex' flexDirection='column' overflow='auto'>
            {/* header */}
            <Header />

            {/* other components */}


            {/* sample usage */}
            <Chakra.Box w='100%' mt='1vw' display='flex' flexDirection='column' alignItems='center'>
                <Chakra.Button w='30%'>Default</Chakra.Button>
                <Chakra.Button w='30%' variant='outlined'>outlined</Chakra.Button>
                <Chakra.Button w='30%' variant='selected_left'>selected_left</Chakra.Button>
                <Chakra.Button w='30%' variant='unselected_left'>unselected_left</Chakra.Button>
                <Chakra.Button w='30%' variant='unselected_center'>unselected_center</Chakra.Button>
                <Chakra.Button w='30%' variant='neutral'>neutral</Chakra.Button>
                <Chakra.Button w='30%' variant='warning'>warning</Chakra.Button>
            </Chakra.Box>
        </Chakra.Box>
    )
}
