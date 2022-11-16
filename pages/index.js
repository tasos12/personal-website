import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Button, Card, CardContent, CardMedia, Chip, Container, Paper, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent } from '@mui/lab';
import { Link, animateScroll as scroll } from "react-scroll";

const pages = ['home', 'about', 'experience', 'projects', 'contact']

export default function Home() {
  return (
    <Box>
      <AppBar position="fixed"
      sx={{ background: '#101820FF' }}>
        <Container maxWidth='md'>
          <Box sx={{ 
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',  
          }}>
            {pages.map((page) => (
                <Button key={page} sx={{ mx:2, my: 1, display: 'block' }}>
                  <Link to={page} spy={true} smooth={true} offset={-100}>{page}</Link>
                </Button>
              ))}
          </Box>
        </Container>
      </AppBar>

      <Container id='home'>
        <Paper elevation={3} sx={{ my: 10, backgroundColor: 'black', height: '80vh'}}>
          ddsadadasd
        </Paper>
      </Container>

      <Container id='about'>
        <Paper elevation={3} sx={{ my: 10, backgroundColor: 'black', height: '80vh'}}>
          ddsadadasd
        </Paper>
      </Container>
        
      <Container id='experience' maxWidth='md'>
        <Paper elevation={3} sx={{ my: 10, backgroundColor: 'black', height: '80vh'}}>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent> 1 </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot/>
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent> 1 </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot/>
              </TimelineSeparator>
              <TimelineContent> 1 </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Paper>
      </Container>

      <Container id='projects' maxWidth='md'>
        <Paper elevation={3} sx={{ my: 10, backgroundColor: 'rgb(15, 20, 40)', height: '80vh', display: 'flex'}}>
          <Card sx={{ m: 5, maxWidth: 360, maxHeight: 400}}> 
            <CardMedia
              component="img" 
              height={300}
              image=""
              alt=''
            />
            <CardContent>
              <Typography fontSize={'18px'} fontWeight={'700'} component={'div'}>
                CALLISTO Social Media Analytics Suite
              </Typography>
              <Chip sx={{my:1, mx: 0.5}} label='MongoDB'/>
              <Chip sx={{my:1, mx: 0.5}} label='PHP'/>
              <Chip sx={{my:1, mx: 0.5}} label='Laravel'/>
              <Chip sx={{my:1, mx: 0.5}} label='ReactJs'/>
            </CardContent>
          </Card>
        </Paper>
      </Container>

      <Container id='contact'>
        <Paper elevation={3} sx={{ my: 10, backgroundColor: 'black', height: '80vh'}}>
          ddsadadasd
        </Paper>
      </Container>
    </Box>
  )
}
