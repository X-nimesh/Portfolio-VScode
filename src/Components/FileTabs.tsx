import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
                <Button variant='fileTabs'> Home.ts</Button>
            </NavLink>
            <NavLink to='/about' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Button variant='fileTabs' >About.scss</Button>
            </NavLink>
            <NavLink to='/github' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Button variant='fileTabs' >GitHub.md</Button>
            </NavLink>
            <NavLink to='/projects' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Button variant='fileTabs' >Projects.js</Button>
            </NavLink>
            <NavLink to='/contact' style={({ isActive }) => ({
                background: isActive ? '#0B2941' : '#01111e00',
            })}>
                <Button variant='fileTabs' >Contact.json</Button >
            </NavLink>
        </Flex >
    )
}

export default FileTabs