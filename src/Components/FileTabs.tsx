import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiTypescript, SiJavascript } from "react-icons/si";
import { AiFillInfoCircle } from "react-icons/ai";
import { ReactComponent as Scss } from '../assets/scss.svg'
import { FaNodeJs } from "react-icons/fa";

const FileTabs = () => {
    const activeStyle = {
        color: 'white',
        backgroundColor: 'white',
    }
    return (
        <Flex color={'white'} borderBottom='2px' borderColor='#3B4B69' w='100%'>
            <NavLink to="/" style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems={'center'}>
                    <Box paddingLeft='10px'>
                        <SiTypescript color='#0074C9' size='15px' />
                    </Box>
                    <Button variant='fileTabs'> Home.ts</Button>
                </Flex>
            </NavLink >
            <NavLink to='/about' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems={'center'}>
                    <Box paddingLeft='10px'>
                        <Scss width='17px' />
                    </Box>
                    <Button variant='fileTabs' >About.scss</Button>
                </Flex>
            </NavLink>
            <NavLink to='/github' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}><Flex alignItems={'center'}>
                    <Box paddingLeft='10px'>
                        <AiFillInfoCircle color='#0074C9' size='17px' />
                    </Box>
                    <Button variant='fileTabs' >GitHub.md</Button>
                </Flex>
            </NavLink>
            <NavLink to='/projects' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems={'center'}>
                    <Box paddingLeft='10px'>
                        <SiJavascript color='#EFD81D' size='17px' />
                    </Box>
                    <Button variant='fileTabs' >Projects.js</Button>
                </Flex>
            </NavLink>
            <NavLink to='/contact' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}><Flex alignItems={'center'}>
                    <Box paddingLeft='10px'>
                        <FaNodeJs color='#689F63' size='17px' />
                    </Box>
                    <Button variant='fileTabs' >Contact.json</Button >
                </Flex>
            </NavLink>
        </Flex >
    )
}

export default FileTabs
