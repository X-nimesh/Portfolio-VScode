import { Flex } from '@chakra-ui/react';
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

function App() {
  return (
    <Flex direction='column' bg="NightOwbg" w='100%' h='100vh'>
      < TopMenu />
      <Flex>
        <Sidemenu />
        <Explorer />
        <Flex direction='column' w='100%'>
          <FileTabs />
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

    </Flex >
  );
}
export default App;