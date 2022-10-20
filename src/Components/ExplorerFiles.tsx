import { Flex, Slide, Text } from '@chakra-ui/react'
import React from 'react'
import { SiTypescript, SiSass, SiJavascript } from "react-icons/si";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

import { ReactComponent as Scss } from '../assets/scss.svg'

const EXplorerFiles = () => {
    return (

        <Flex flexDirection='column' color='white' pl='20px' >
            <Flex alignItems='center' >
                <SiTypescript color='#0074C9' size='12px' />
                <Text variant='explorerText'>Home.ts</Text>
            </Flex>
            <Flex alignItems='center' >
                {/* <SiSass color='#C36291' size='12px' /> */}
                <Scss width='15px' />

                <Text variant='explorerText' p='0px 7px'>About.scss</Text>
            </Flex>
            <Flex alignItems='center' >
                <AiFillInfoCircle color='#0074C9' size='13px' />
                <Text variant='explorerText'>GitHub.md</Text>
            </Flex>
            <Flex alignItems='center' >
                <SiJavascript color='#EFD81D' size='12px' />
                <Text variant='explorerText'>Projects.js</Text>
            </Flex>
            <Flex alignItems='center' >
                <FaNodeJs color='#689F63' size='14px' />
                <Text variant='explorerText'>Contact.json</Text>
            </Flex>
        </Flex >

    )
}

export default EXplorerFiles