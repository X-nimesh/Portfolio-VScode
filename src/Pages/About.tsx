import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    const aboutme = `Hello, I am Nimesh Shrestha, a highly skilled and passionate Full Stack Developer with a wide range of experience in React JS, Express, Chakra UI, Typescript, Node JS, and React Native. I am currently working as a Node Developer at InfoDevelopers, where I have been able to grow my skills and experience with the latest technologies.
        `;
    return (
        <Flex color='white' flexDirection={'column'} gap='30px' padding={'30px 50px'} w='100%'>
            <Heading as='h1' size='2xl' noOfLines={1}>About me</Heading>
            <Flex w='100%' justifyContent={'space-between'} gap='80px'>

                <TypeAnimation
                    sequence={[
                        aboutme
                    ]}
                    speed={70}
                    cursor={true}
                    // cursorStyle={'_'}
                    repeat={1}
                    style={{ fontSize: '1.1em', fontFamily: 'JetBrains Mono,monospace', marginTop: '20px' }}
                />
                <Image src='./image/nimesh_pic.jpg' alt='Nimesh' height={'500px'} borderRadius='10%'
                    _hover={
                        {
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease-in-out',
                            boxShadow: '3px 5px 20px -6px #000'
                        }}
                />
            </Flex>

            {/* <Text>
                Hello, I am Nimesh Shrestha, a highly skilled and passionate Full Stack Developer with a wide range of experience in React JS, Express, Chakra UI, Typescript, Node JS, and React Native. I am currently working as a Node Developer at InfoDevelopers, where I have been able to grow my skills and experience with the latest technologies.

                In addition to my work with InfoDevelopers, I have also completed several successful freelance projects, which have given me the opportunity to work on exciting and diverse projects. I am passionate about creating beautiful and functional user interfaces, and I always strive to deliver high-quality work that exceeds my clients' expectations.

                I am an enthusiastic learner and always stay up-to-date with the latest trends and best practices in the field of Full Stack Development. I believe that my commitment to lifelong learning and my ability to adapt quickly to new technologies will be a valuable asset to any team.

                My portfolio is a reflection of my skills and experience, showcasing the wide range of projects I have worked on, from mobile applications to web-based platforms. I am confident that my experience and skills make me a strong candidate for any Full Stack Development role, and I look forward to taking on new and exciting challenges.
            </Text> */}
        </Flex>
    )
}

export default About
