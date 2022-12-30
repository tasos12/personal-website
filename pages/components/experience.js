import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineSeparator, TimelineContent } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocationOn from '@mui/icons-material/LocationOn';
import ComputerSharp from "@mui/icons-material/ComputerSharp";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Title from './shared/Title';
import Image from 'next/image';

export default function Experience() {
    const titleContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        padding: "20px",
        background: "rgb(10, 20, 50)",
        boxShadow: "0px 0px 8px 0px rgb(10, 80, 200)",
        borderRadius: "10px",
    };
    const companyContainerStyle = {
        display: "flex",
        flex: 0.9,
        alignItems: "center",
    };
    const dateContainerStyle = { 
        display: "flex", 
        alignItems: "center"
    };

    const contentContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
        padding: "10px 20px",
        background: "rgb(10, 20, 100)",
        borderRadius: "10px",
    };
    const contentTextStyle = {
        flex: 0.8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };
    const imageContainerStyle = { 
        display: "flex",
        justifyContent: "center",
        position: "relative" 
    };
    const imageStyle = {
        objectFit: "contain",
        width: "100%",
        maxWidth: "160px",
    };    

    return (
        <Container id="experience" maxWidth={false}>
            <Title text="My developer experience"></Title>
            <Container maxWidth={"md"}>
                <div>
                    <div
                        className="responsive-flex"
                        style={titleContainerStyle}
                    >
                        <div style={companyContainerStyle}>
                            <ComputerSharp
                                className="header2-text"
                                style={{ margin: "6px" }}
                            />
                            <Typography
                                className="header3-text"
                                component={"h2"}
                            >
                                Full Stack Developer @ CERTH
                            </Typography>
                        </div>
                        <div style={dateContainerStyle}>
                            <CalendarMonth
                                className="header2-text"
                                style={{ margin: "6px" }}
                            />
                            <Typography
                                className="header3-text"
                                component={"h2"}
                            >
                                Sept 2021 - Present
                            </Typography>
                        </div>
                    </div>
                    <div
                        className="responsive-flex-reverse"
                        style={contentContainerStyle}
                    >
                        <div style={contentTextStyle}>
                            <div style={{ margin: 4 }}>
                                <LocationOn />
                                <Link href="https://www.certh.gr/root.en.aspx">
                                    certh.gr
                                </Link>
                            </div>
                            <div style={{ margin: 8 }}>
                                Dedscription about my job here.
                            </div>
                            <div style={{ margin: 8 }}>
                                <Chip
                                    style={{
                                        background: "black",
                                        color: "white",
                                    }}
                                    label="React"
                                />
                            </div>
                        </div>
                        <div style={imageContainerStyle}>
                            <img
                                alt="cert-logo"
                                src="/images/home/certh.png"
                                fill
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="responsive-flex"
                        style={titleContainerStyle}
                    >
                        <div style={companyContainerStyle}>
                            <ComputerSharp
                                className="header2-text"
                                style={{ margin: "6px" }}
                            />
                            <Typography
                                className="header3-text"
                                component={"h2"}
                            >
                                Unity Developer @ Greek Army (Research &
                                Development)
                            </Typography>
                        </div>
                        <div style={dateContainerStyle}>
                            <CalendarMonth
                                className="header2-text"
                                style={{ margin: "6px" }}
                            />
                            <Typography
                                className="header3-text"
                                component={"h2"}
                            >
                                Sept 2020 - May 2021
                            </Typography>
                        </div>
                    </div>
                    <div
                        className="responsive-flex-reverse"
                        style={contentContainerStyle}
                    >
                        <div style={contentTextStyle}>
                            {/* <div style={{ margin: 4 }}>
                                <LocationOn />
                                <Link href="https://www.certh.gr/root.en.aspx">
                                    certh.gr
                                </Link>
                            </div> */}
                            <div style={{ margin: 8 }}>
                                Dedscription about my job here.
                            </div>
                            <div style={{ margin: 8 }}>
                                <Chip
                                    style={{
                                        background: "black",
                                        color: "white",
                                    }}
                                    label="React"
                                />
                            </div>
                        </div>
                        <div style={imageContainerStyle}>
                            <img
                                alt="cert-logo"
                                src="/images/home/certh.png"
                                fill
                                style={imageStyle}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
}