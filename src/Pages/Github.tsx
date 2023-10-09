import { Box, Circle, Divider, Flex, HStack, Heading, Image, Link, ScaleFade, Skeleton, SkeletonCircle, SkeletonText, Stack, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'

const Github = () => {
    const languageColors: any = {
        sass: '#a53b70',
        javascript: '#f1e05a',
        typescript: '#2b7489',
        html: '#e34c26',
        css: '#563d7c',
        python: '#3572a5',
        java: '#b07219',
        ruby: '#701516',
        c: '#555555',
        csharp: '#178600',
        php: '#4F5D95',
    }
    const [gitdata, setGitData] = React.useState<any>({});
    const [repos, setRepos] = React.useState<any>([]);
    const getuserDetails = async () => {
        const { data } = await axios.get('https://api.github.com/users/X-nimesh');
        setGitData(data);
        console.log(data);
        const repos = await axios.get(data.repos_url);
        console.log(repos);
        repos.data.sort((a: any, b: any) => {
            // sort by date  not time
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        })
        setRepos(repos.data);

    }
    // getuserDetails();
    useEffect(() => {
        getuserDetails();
    }, [])
    console.log(repos)

    return (
        <>
            {repos.length === 0 ?
                <Stack w='100%' marginTop={'100px'} alignItems={'center'} gap='20px' >
                    <SkeletonCircle size='100px' />
                    <HStack w='100%' justifyContent={'center'} >
                        <SkeletonText noOfLines={1} spacing='4' w='10%' />
                        <SkeletonText noOfLines={1} spacing='4' w='10%' />
                    </HStack>
                    <HStack w='100%'>
                        <Skeleton height='100px' w='50%' />
                        <Skeleton height='100px' w='50%' />
                        <Skeleton height='100px' w='50%' />
                        <Skeleton height='100px' w='50% ' />
                    </HStack>
                    <HStack w='100%'>
                        <Skeleton height='100px' w='50%' />
                        <Skeleton height='100px' w='50%' />
                        <Skeleton height='100px' w='50%' />
                        <Skeleton height='100px' w='50% ' />
                    </HStack>
                    <Skeleton height='20px' />
                </Stack > :
                (<Flex color='white' flexDirection={'column'} gap='30px' margin={'30px 50px'} minW='80%' >
                    <Heading as='h1' size='2xl'>GitHub</Heading>
                    <Flex>
                        <Flex backgroundColor='#001e35' w='100%'
                            alignItems={'center'} justifyContent={'center'}
                            padding={'10px'} borderRadius={'10px'}
                            boxShadow={'3px 5px 10px -2px #000'}
                            flexDirection={'column'} gap={'10px'}
                        >
                            <Flex flexDirection={'column'}
                                alignItems={'center'} justifyContent={'center'} gap='10px' background={'NightOwbg'} padding={'30px 80px'} borderRadius={'20px'}>

                                <Link href={gitdata.html_url} isExternal>
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
                                    <Text fontSize='lg'>{gitdata?.public_repos} Repos</Text>
                                    <Box h='60%' background={'white'} w='2px'></Box>
                                    <Text fontSize='lg'>{gitdata?.followers} Followers </Text>
                                    <Box h='60%' background={'white'} w='2px'></Box>
                                </Flex>
                            </Flex>
                            <Flex wrap={'wrap'} gap='20px'>
                                {repos.map((repo: any) => {
                                    return (

                                        <Flex minHeight={'150px'} minW={'300px'} p='20px' flex={'1'} background={'NightOwbg'} direction={'column'}
                                            justifyContent={'space-between'}
                                            transition={'all 0.4s ease-in-out'}
                                            _hover={{
                                                transform: "scale(1.1)",
                                            }}>
                                            <a href={repo.clone_url}>
                                                <Text fontSize='xl' _hover={{ color: 'blue' }} >
                                                    {repo.name}
                                                </Text>
                                                <Flex alignItems={'center'} gap='10px'>
                                                    <Circle size='15px' bg={languageColors[repo?.language?.toLowerCase()]} color='white'></Circle>
                                                    <Text fontSize='sm' >
                                                        {repo.language}
                                                    </Text>
                                                </Flex>
                                            </a>
                                            <Text fontSize={'sm'} color={'gray'}>Updated on: {repo.updated_at.split('T')[0]}</Text>
                                        </Flex>
                                    )
                                })
                                }
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex >)
            }
        </>

    )
}

export default Github
