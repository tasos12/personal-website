import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Title from './shared/Title';

export default function Experience() {
    const timelineTitleStyle = { width: '45%', fontWeight: 700, fontSize: '1.5rem', color: 'rgb(120, 200, 255)', float: 'left' };
    const timelineCompanyStyle = { width: '55%', fontWeight: 500, fontSize: '1rem', color: 'rgb(20, 120, 255, 0.7)', float:'right' };
    const timelineDateStyle = { fontWeight: 700, fontSize: '1.5rem', color: 'gray' };
    const timelineDotStyle = { width: '25px', height: '25px' };
    const timelineConnector = { width: '6px', borderRadius: '10px' };
    const timelineListStyle = { fontSize: '1rem', color: 'lightgray' };

    return (
        <Container id="experience" sx={{ width: "xl", height: "100vh" }}>
            <Title text="My developer experience"></Title>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.4,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography sx={timelineDateStyle}>
                            Sept 2021 - Present
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={timelineDotStyle} />
                        <TimelineConnector sx={timelineConnector} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={{ display: "block", height: "50px" }}>
                            <Typography sx={timelineTitleStyle}>
                                Full stack developer
                            </Typography>
                            <Typography sx={timelineCompanyStyle}>
                                <LocationOnIcon sx={{ color: "white" }} />
                                Centre for Research & Technology HELLAS (CERTH)
                            </Typography>
                        </div>
                        <Typography sx={timelineListStyle}>
                            <ul style={{ listStyleType: "disc" }}>
                                <li>
                                    Helped maintain and extend an existing Java
                                    based automated application that consumes
                                    multiple social media APIs
                                </li>
                                <li>
                                    Designed developed and tested multiple REST
                                    APIs using PHP Laravel and MongoDB
                                </li>
                                <li>
                                    Designed developed and deployed front-end
                                    solutions for numerous projects using
                                    ReactJS
                                </li>
                                <li>
                                    Work closely with Project managers and
                                    collaborators for the development of new
                                    features
                                </li>
                                <li>
                                    Helped in the writing and reviewing process
                                    of academic papers
                                </li>
                                <li>
                                    Participated in academic talks and events
                                </li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography sx={timelineDateStyle}>
                            Sept 2020 - May 2021
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={timelineDotStyle} />
                        <TimelineConnector sx={timelineConnector} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div style={{ display: "block", height: "50px" }}>
                            <Typography sx={timelineTitleStyle}>
                                Unity developer
                            </Typography>
                            <Typography sx={timelineCompanyStyle}>
                                <LocationOnIcon sx={{ color: "white" }} /> Greek
                                Army (Research & Information Department)
                            </Typography>
                        </div>
                        <Typography sx={timelineListStyle}>
                            <ul style={{ listStyleType: "disc" }}>
                                <li>
                                    Maintained and developed a virtual reality
                                    simulation system using Unity and C#
                                </li>
                                <li>
                                    Designed and implemented the multiplayer
                                    protocol of the simulation using concurrent
                                    and distributed programming methods
                                </li>
                                <li>
                                    Coordinate the systems development and
                                    assign tasks using Trello
                                </li>
                            </ul>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
}