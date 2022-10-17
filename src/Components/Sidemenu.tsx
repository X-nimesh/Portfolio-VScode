import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Explorer } from '../assets/Explorer.svg'
import { ReactComponent as Github } from '../assets/github-outline.svg'
import { ReactComponent as Code } from '../assets/code.svg'
import { ReactComponent as Tool } from '../assets/tools.svg'
import { ReactComponent as Mail } from '../assets/mail.svg'
import { ReactComponent as Account } from '../assets/account.svg'

const Sidemenu = () => {
    return (
        <Flex direction='column' minHeight='96vh' maxW='50px'
            position='sticky'
            justifyContent="space-between">
            <Flex direction='column'  >
                <Button variant="sideMenu" borderLeftColor='#627991'>
                    <Explorer fill='#627991' width='30px' />
                </Button>
                <Button variant="sideMenu">
                    <Github fill='#627991' width='30px' />
                </Button>
                <Button variant="sideMenu">
                    <Code fill='#627991' width='30px' />
                </Button>
                <Button variant="sideMenu">
                    <Tool fill='#627991' width='30px' />
                </Button>
                <Button variant="sideMenu" >
                    <Mail fill='#627991' width='30px' />
                </Button>
            </Flex >
            <Flex direction='column'>
                <Button variant="sideMenu">
                    <Account fill='#627991' width='30px' />
                </Button>
                <Button variant="sideMenu">
                    <Github fill='#627991' width='30px' />
                </Button>
            </Flex>
        </Flex>
    )
}

export default Sidemenu