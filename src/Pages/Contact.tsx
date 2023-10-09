import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
export const socialMediaLink = {
    website: 'https://www.nimesh11.com.np/',
    github: 'https://github.com/X-nimesh',
    linkedin: 'https://www.linkedin.com/in/x-nimesh/',
    twitter: 'https://twitter.com/xrestanimesh07',
    instagram: 'https://www.instagram.com/xresta_nimesh/',
    facebook: 'https://www.facebook.com/xresta.nimesh',
    email: 'mailto:xnimesh7@gmail.com'

}
const Contact = () => {
    const socials = [
        {
            socialmedia: "website",
            link: 'https://www.nimesh11.com.np/'
        },
        {
            socialmedia: "github",
            link: 'https://github.com/X-nimesh'
        },
        {
            socialmedia: "linkedin",
            link: 'https://www.linkedin.com/in/x-nimesh/'
        },
        {
            socialmedia: "twitter",
            link: 'https://twitter.com/xrestanimesh07'
        },
        {
            socialmedia: "instagram",
            link: 'https://www.instagram.com/xresta_nimesh/'
        },
        {
            socialmedia: "facebook",
            link: 'https://www.facebook.com/xresta.nimesh'
        },
        {
            socialmedia: "email",
            link: 'mailto:xnimesh7@gmail.com'
        },
    ]
    return (
        <Flex color='white' gap={'20px'} padding={'20px 50px'} flexDirection='column' >

            <Heading as='h1' size='2xl'>Contact me :</Heading>
            <Flex flexDirection={'column'} gap={'10px'}>

                <Text as='span' color={'#dcc60a'}>
                    {` {`}
                </Text>
                <Text as='pre' marginLeft={'15px'} fontSize='xl'>
                    <Text as='pre' color={'#beacff'}>
                        {`socials:`}
                        <Text as='span' color={'#dcc60a'}>
                            {` {`}
                        </Text>
                    </Text>
                    <Text as='pre' marginLeft={'20px'}>
                        <>

                            {socials.map((social, index) => {
                                if (social.socialmedia === 'email') {
                                    return <Text as='pre' marginLeft={'20px'} marginBottom="5px">
                                        <Text color={'#7fdbca'} as='span'>
                                            {`${social.socialmedia} :`}
                                        </Text>
                                        <Link color={"#f0b0ff"} href={social.link}>
                                            {` ' xnimesh7@gmail.com',`}
                                        </Link>
                                    </Text>
                                }
                                return <Text as='pre' marginLeft={'20px'} marginBottom="5px">
                                    <Text color={'#7fdbca'} as='span'>
                                        {`${social.socialmedia} :`}
                                    </Text>
                                    <Link color={"#f0b0ff"} href={social.link} isExternal>
                                        {` ' ${social.link} ',`}
                                    </Link>
                                </Text>
                            })
                            }
                        </>
                    </Text>
                    <Text as='span' color={'#dcc60a'}>
                        {` }`}
                    </Text>
                </Text>
                <Text as='span' color={'#dcc60a'}>
                    {` }`}
                </Text>
            </Flex>

        </Flex >

    )
}

export default Contact
