import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Experience() {
    const timelineTitleStyle = { fontWeight: 700, fontSize: '3rem' };
    const timelineContentStyle = { fontWeight: 500, fontSize: '1.5rem' };
    const timelineDateStyle = { fontWeight: 700, fontSize: '2.5rem', color: 'gray' };
    const timelineDotStyle = { width: '50px', height: '50px' };

    return(
        <Container id='experience' width='xl'>
        <Container sx={{ mx: 0, my: 10, color: 'rgb(20, 120, 255)', height: '80vh'}}>
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
                <Typography sx={timelineContentStyle}> Centre for Research & Technology HELLAS (CERTH) </Typography>
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
                <Typography sx={timelineContentStyle}> Greek Army (Research & Information Department) </Typography> 
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
                <Typography sx={timelineContentStyle}> University of Macedonia Robotics Academy </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </Container>
    );
}