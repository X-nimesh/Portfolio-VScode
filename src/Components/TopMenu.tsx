import { Box, Button, Circle, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as CrossLogo } from '../assets/crossIcon.svg'
import { ReactComponent as MinusIcon } from '../assets/minusIcon.svg'

const TopMenu = () => {
    return (
        <>
            <Flex justify='space-between' align='center' p='0px' position='sticky' flexWrap='wrap'>
                <Flex align='center' p='2px 0' color='textC' >
                    <Image src='image/icon.png' w='16px' ml='7px' />
                    <Flex ml='8px' color='white' >
                        <Button variant={"topMenu"}>File</Button>
                        <Button variant={"topMenu"} >Edit</Button>
                        <Button variant={"topMenu"} >Selection</Button>
                        <Button variant={"topMenu"} >View</Button>
                        <Button variant={"topMenu"} >Go</Button>
                        <Button variant={"topMenu"} >Run</Button>
                        <Button variant={"topMenu"} >Terminal</Button>
                        <Button variant={"topMenu"} >Help</Button>
                    </Flex>
                </Flex>
                <Text ml='30px' fontSize='15px' color='white'>Nimesh Shrestha | Visual Studio Code</Text>
                <Flex w='20vw' justify='flex-end' pr='10px'>

                    <Flex gap='10px'>
                        <Circle size='15px' p='4px' bg='#6CD056' fill='#EB5E5A' cursor='pointer'>

                        </Circle>
                        <Circle size='15px' p='4px' bg='#FBBB36' fill='#FBBB36' _hover={{ fill: 'black', cursor: 'pointer' }}>
                            <MinusIcon />
                        </Circle>
                        <Circle size='15px' p='4px' bg='#EB5E5A' fill='#EB5E5A' _hover={{ fill: 'black', cursor: 'pointer' }}>
                            <CrossLogo />
                        </Circle>
                    </Flex>
                </Flex>

            </Flex >
        </>
    )
}

export default TopMenu