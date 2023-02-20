import { Box, Divider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'

const Github = () => {
    const [gitdata, setGitData] = React.useState<any>({});
    const [repos, setRepos] = React.useState<any>([]);
    const getuserDetails = async () => {
        const { data } = await axios.get('https://api.github.com/users/X-nimesh');
        setGitData(data);
        console.log(data);
        const repos = await axios.get(data.repos_url);
        console.log(repos);
        setRepos(repos.data);

    }
    // getuserDetails();
    useEffect(() => {
        getuserDetails();
    }, [])


    return (
        <Flex color='white' flexDirection={'column'} gap='30px' margin={'30px 50px'}>
            <Heading as='h1' size='2xl'>GitHub</Heading>
            <Flex>
                <Flex backgroundColor='#001e35' w='100%'
                    alignItems={'center'} justifyContent={'center'}
                    padding={'10px'} borderRadius={'10px'}
                    boxShadow={'3px 5px 10px -2px #000'}
                    flexDirection={'column'} gap={'10px'}
                >
                    <Link href={'https://www.github.com/X-nimesh'} isExternal>
                        <Image src={gitdata.avatar_url} alt='Nimesh' height={'100px'} borderRadius='50%'
                            _hover={
                                {
                                    transform: 'scale(1.1)',
                                    transition: 'all 0.5s ease-in-out',
                                    boxShadow: '3px 5px 20px -6px #000'

                                }}
                        />
                    </Link>
                    <Text fontSize='xl'>{gitdata?.name}</Text>
                    <Flex gap='10px ' alignItems={'center'}>
                        <Text fontSize='xl'>{gitdata?.public_repos} Repos</Text>
                        <Box h='60%' background={'white'} w='2px'></Box>
                        <Text fontSize='xl'>{gitdata?.followers} Followers </Text>
                        <Box h='60%' background={'white'} w='2px'></Box>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default Github
