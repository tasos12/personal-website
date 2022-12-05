import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Box from '@mui/material/Box';
import Social from './components/social';

export default function Home() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Navbar/>   
      <About/>
      <Experience/>       
      <Projects/>
      <Contact/>
      <Social/>
    </Box>
  )
}
