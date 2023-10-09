import { Alert, AlertIcon, Flex, Image, Text, Link } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { CiFacebook } from 'react-icons/ci';
import { socialMediaLink } from './Contact';



const HomeMobile = () => {
    const skills =
        `   'Node JS ', 'Nest JS','Docker'
    ,'React JS ','Git', 'MongoDB',
    'Express','JavaScript',
    'TypeScript', 'Chakra UI'`;

    return (

        <Flex color='white' direction='column' alignItems={'center'} w='100%' h="95vh" overflow='hidden' bg="NightOwbg" py='20px' >
            <Alert status='warning' color={'black'}>
                <AlertIcon />
                Welcome to my  portfolio. For the best viewing experience, please switch to desktop mode. Thank you!
            </Alert>
            <Flex my='auto' direction='column' alignItems={'center'} gap='50px'>
                <Image src='https://raw.githubusercontent.com/X-nimesh/X-nimesh/main/new%20nimesh.png' mb='auto' w={['290px', '30vw']} />
                <Text fontSize={['0.9em', '1.2em']} w={'100%'} color={'#beacff'} as='pre'>
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
                            {`E-mail: `}
                        </Text>
                        {`'X.nimesh7@gmail.com',`} <br />
                        <Text as={'span'} color={'#beacff'}>
                            {`LinkedIn:`}
                        </Text>
                        <Text as={'a'} color={"#f0b0ff"} href={'https://www.linkedin.com/in/x-nimesh/'} >
                            {` 'https://www.linkedin.com/in/x-nimesh/',`}
                        </Text>
                        <br />
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
            <Flex width={'100%'} justifyContent={'center'} gap='15px' marginBottom={'20px'}>
                <Link href={socialMediaLink.github} >
                    <AiFillGithub href={socialMediaLink.github} size='20px' />
                </Link>
                <Link href={socialMediaLink.linkedin} >
                    <AiFillLinkedin size='20px' />
                </Link>
                <Link href={socialMediaLink.email} >
                    <BiLogoGmail size='20px' />
                </Link>
                <Link href={socialMediaLink.twitter} >
                    <FaTwitter size='20px' />
                </Link>
                <Link href={socialMediaLink.instagram} >
                    <BsInstagram size='20px' />
                </Link>
                <Link href={socialMediaLink.facebook} >
                    <CiFacebook size='20px' />
                </Link>
                {/* <Show above='lg'> */}
                {/* <Image src='https://raw.githubusercontent.com/X-nimesh/Portfolio-VScode/main/public/image/man.png' w='50%' minW='700px' /> */}
                {/* <Box zIndex='2' position='relative' left='200px' bottom='200px' > */}
                {/* <ReactLogo width='300px' /> */}
                {/* </Box> */}
                {/* </Show> */}
            </Flex >
        </Flex >
    )
}

export default HomeMobile
