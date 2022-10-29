import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { SiTypescript, SiJavascript } from "react-icons/si";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

import { ReactComponent as Scss } from '../assets/scss.svg'
import { NavLink } from 'react-router-dom';

const EXplorerFiles = () => {
    return (

        <Flex flexDirection='column' color='white' gap='5px' w='100%'>
            <NavLink to="/" style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems='center' pl='20px' py='2px' w='100%'>
                    <SiTypescript color='#0074C9' size='16px' />
                    <Text variant='explorerText'>Home.ts</Text>
                </Flex>
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems='center' pl='20px'>
                    {/* <SiSass color='#C36291' size='12px' /> */}
                    <Scss width='17px' />

                    <Text variant='explorerText'>About.scss</Text>
                </Flex>
            </NavLink>
            <NavLink to="/github" style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems='center' pl='20px' >
                    <AiFillInfoCircle color='#0074C9' size='17px' />
                    <Text variant='explorerText'>GitHub.md</Text>
                </Flex></NavLink>
            <NavLink to="/projects" style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems='center' pl='20px'>
                    <SiJavascript color='#EFD81D' size='17px' />
                    <Text variant='explorerText'>Projects.js</Text>
                </Flex></NavLink>
            <NavLink to="/contact" style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Flex alignItems='center' pl='20px'>
                    <FaNodeJs color='#689F63' size='17px' />
                    <Text variant='explorerText'>Contact.json</Text>
                </Flex>
            </NavLink>
        </Flex >

    )
}

export default EXplorerFiles