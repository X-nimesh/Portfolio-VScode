import { Box, Flex, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { ReactComponent as ReactLogo } from '../assets/react.svg'

const HomePage = () => {
    const skills =
        `'React', 'Node', 'Git', 'MongoDB', 'Express',
'JavaScript', 'TypeScript', 'Chakra UI'`;

    return (
        <Flex color='white' alignItems={'flex-end'} w='100%' h="100%" overflow='hidden' >
            <Flex my='auto' direction='column' ml={['0', '3%']} alignItems={['flex-start', 'center']} gap='50px'>
                <Image src='https://raw.githubusercontent.com/X-nimesh/X-nimesh/main/new%20nimesh.png' mb='auto' w={['290px', '30vw']} />
                <Text fontSize={['0.9em', '1.2em']} w={['', '80%']} color={'#beacff'} as='pre'>
                    {`const `}
                    <Text as={'span'} color={'#6191ff'}>
                        {`Intro `}
                        <Text as={'span'} color={'#beacff'}>
                            {`= {`}
                        </Text>
                    </Text>
                    <br />
                    <Text ml={'20px'} color={'#d9c980'} as='pre'>
                        <Text as={'span'} color={'#beacff'}>
                            {`FName: `}
                        </Text>
                        {`'Nimesh',`} <br />
                        <Text as={'span'} color={'#beacff'}>
                            {`LName:`}
                        </Text>
                        {` 'Shrestha',`} <br />
                        <Text as={'span'} color={'#beacff'}>
                            {`Skills: [`}
                        </Text>
                        <br />
                        <Text as='pre'>
                            {skills} <br />
                        </Text>
                    </Text>
                    &emsp;{`] };`}
                </Text>
            </Flex>
            <Flex >
                {/* <Show above='lg'> */}
                <Image src='https://raw.githubusercontent.com/X-nimesh/Portfolio-VScode/main/public/image/man.png' w='50vw' minW='700px' />
                {/* <Box zIndex='2' position='relative' left='200px' bottom='200px' > */}
                {/* <ReactLogo width='300px' /> */}
                {/* </Box> */}
                {/* </Show> */}
            </Flex >
        </Flex >
    )
}

export default HomePage
