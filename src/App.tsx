import { Flex, Hide, Show, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Explorer from './Components/Explorer';
import FileTabs from './Components/FileTabs';
import Sidemenu from './Components/Sidemenu';
import TopMenu from './Components/TopMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Github from './Pages/Github';
import HomePage from './Pages/HomePage';
import Projects from './Pages/Projects';
import Settings from './Pages/Settings';
import HomeMobile from './Pages/HomeMobile';

function App() {
    return (
        <>
            <Hide below='sm'>
                <Flex direction='column' bg="NightOwbg" w='100%' h='100vh' overflow={'hidden'} >
                    < TopMenu />
                    <Flex>
                        <Sidemenu />
                        <Explorer />
                        <Flex direction='column' w='100%'>
                            <FileTabs />
                            <Flex w='100%' h='100%' bg='NightOwbg' height='90vh' overflowY={'scroll'}>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/projects" element={<Projects />} />
                                    <Route path="/github" element={<Github />} />
                                    <Route path="/settings" element={<Settings />} />
                                </Routes>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex >
            </Hide>
            <Show below='sm' >
                <HomeMobile />
            </Show>
        </>

    );
}
export default App;
