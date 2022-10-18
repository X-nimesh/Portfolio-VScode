import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Explorer = () => {
    return (
        <Flex w='15vw' maxW='210px'
            minW='150px'>
            <Flex p='5px 10px'>
                <Text color='textC' fontSize='14px'>Explorer</Text>
            </Flex>
        </Flex>
    )
}

export default Explorer