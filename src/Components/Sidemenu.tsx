import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as Explorer } from '../assets/Explorer.svg'
import { ReactComponent as Github } from '../assets/github-outline.svg'
import { ReactComponent as Code } from '../assets/code.svg'
// import { ReactComponent as Tool } from '../assets/tools.svg'
import { ReactComponent as Mail } from '../assets/mail.svg'
import { ReactComponent as Account } from '../assets/account.svg'
import { NavLink } from 'react-router-dom'

const Sidemenu = () => {
    let activeStyle = {
        background: '#0B2941',
        'borderLeft': '2px solid #627991'
    }
    return (
        <Flex direction='column' minHeight='96vh' maxW='50px'
            position='sticky'
            justifyContent="space-between">
            <Flex direction='column'  >
                <NavLink to="/" style={({ isActive }) => (
                    isActive ? activeStyle : {}
                )}>
                    <Button variant="sideMenu" >
                        <Explorer fill='#627991' width='30px' />
                    </Button>
                </NavLink>
                <NavLink to="/github" style={({ isActive }) => (
                    isActive ? activeStyle : {}
                )}>
                    <Button variant="sideMenu">
                        <Github fill='#627991' width='30px' />
                    </Button>
                </NavLink>
                <NavLink to="/projects" style={({ isActive }) => (
                    isActive ? activeStyle : {}
                )}>

                    <Button variant="sideMenu">
                        <Code fill='#627991' width='30px' />
                    </Button>
                </NavLink>
                {/* <NavLink to="/projects" style={({ isActive }) => ({
                    background: isActive ? '#0B2941' : '#01111e00',
                })}>

                    <Button variant="sideMenu">
                        <Tool fill='#627991' width='30px' />
                    </Button>
                </NavLink> */}
                <NavLink to="/contact" style={({ isActive }) => (
                    isActive ? activeStyle : {}
                )}>
                    <Button variant="sideMenu" >
                        <Mail fill='#627991' width='30px' />
                    </Button>
                </NavLink>
            </Flex >
            <Flex direction='column'>
                <NavLink to="/about" style={({ isActive }) => (
                    isActive ? activeStyle : {}
                )}>
                    <Button variant="sideMenu">
                        <Account fill='#627991' width='30px' />
                    </Button>
                </NavLink>
                <NavLink to="/contact" style={({ isActive }) => (
                    isActive ? activeStyle : {}
                )}>

                    <Button variant="sideMenu">
                        <Github fill='#627991' width='30px' />
                    </Button>
                </NavLink>
            </Flex>
        </Flex >
    )
}

export default Sidemenu