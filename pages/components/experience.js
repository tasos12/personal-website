import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Experience() {
    const timelineTitleStyle = { fontWeight: 700, fontSize: '3rem', color: 'rgb(20, 120, 255)' };
    const timelineCompanyStyle = { fontWeight: 500, fontSize: '1rem', color: 'rgb(20, 120, 255, 0.7)' };
    const timelineDateStyle = { fontWeight: 700, fontSize: '2.8rem', color: 'gray' };
    const timelineDotStyle = { width: '50px', height: '50px' };

    return(
        <Container id='experience' sx={{width:'xl', height:'100vh'}} >
          <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {flex: 0.4}}}>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography sx={timelineDateStyle}> 2021-Present </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={timelineDotStyle}/>
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent > 
                <Typography sx={timelineTitleStyle}> Full stack developer </Typography>
                <Typography sx={timelineCompanyStyle}> <LocationOnIcon sx={{color: 'white'}}/> Centre for Research & Technology HELLAS (CERTH) </Typography>
                <Typography></Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography sx={timelineDateStyle}> 2020-2021 </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={timelineDotStyle}/>
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent>
                <Typography sx={timelineTitleStyle}> Unity developer </Typography>
                <Typography sx={timelineCompanyStyle}> <LocationOnIcon sx={{color: 'white'}}/> Greek Army (Research & Information Department) </Typography> 
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography sx={timelineDateStyle}> 2017-2020 </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={timelineDotStyle}/>
              </TimelineSeparator>
              <TimelineContent>                 
                <Typography sx={timelineTitleStyle}> Coding and Robotics Instructor </Typography>
                <Typography sx={timelineCompanyStyle}> <LocationOnIcon sx={{color: 'white'}}/> University of Macedonia Robotics Academy </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

      </Container>
    );
}