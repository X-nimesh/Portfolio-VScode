import { Button, Collapse, Flex, Menu, MenuButton, MenuItem, MenuList, Slide, Text } from '@chakra-ui/react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import React, { useState } from 'react'
import EXplorerFiles from './ExplorerFiles';


const Explorer = () => {
    // let isOPen = true;

    const [isOPen, setisOPen] = useState(true);
    return (
        <Flex w='15vw'
            maxW='210px'
            minW='150px'
            direction='column'>
            <Flex p='5px 10px'>
                <Text color='textC' fontSize='14px'>Explorer</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='flex-start' >
                <Flex as={Button} gap='5px' p='0px' pl='20px' _hover={{ bg: 'none' }}
                    bg='none'
                    align='center' color='white'
                    onClick={() => { setisOPen(!isOPen) }}>
                    {isOPen ? <FiChevronUp /> : <FiChevronDown />}

                    <Text fontWeight={'bold'} color='textC'>
                        Portfolio
                    </Text>
                </Flex>
                <Collapse in={isOPen} animateOpacity>
                    <EXplorerFiles />
                </Collapse>
            </Flex>
            {/* <Menu>
                <MenuButton as={Button} gap='5px' p='5px 10px'
                    _hover={{ bg: 'none' }}
                    _expanded={{ bg: 'none' }}
                    _focus={{ bg: 'none' }}
                    bg='none'
                    align='center' color='white'
                    onClick={() => { setisOPen(!isOPen) }}>

                    <Flex gap='5px' p='5px 10px' _hover={{ bg: 'none' }}
                        align='center'>
                        {isOPen ? <FiChevronUp /> : <FiChevronDown />}
                        <Text fontWeight={'bold'} color='textC'>
                            Portfolio
                        </Text>
                    </Flex>
                </MenuButton>
                <MenuList w='100%' bg='none' outline='red'
                    color={'textC'}
                    _expanded={{ bg: 'red' }}
                >
                    <Flex flexDirection='column'>

                        <Text>Home.tsx</Text>
                        <Text>About.scss</Text>
                        <Text>GitHub.md</Text>
                        <Text>Projects.js</Text>
                        <Text>Contact.json</Text>
                    </Flex>
                </MenuList>
            </Menu> */}
        </Flex >
    )
}

export default Explorer