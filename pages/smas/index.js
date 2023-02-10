import Image from "next/image";
import Head from "next/head";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import LaravelOriginal from "devicons-react/lib/icons/LaravelOriginal";
import JavaOriginal from "devicons-react/lib/icons/JavaOriginal";
import MongodbOriginal from "devicons-react/lib/icons/MongodbOriginal";
import DockerOriginal from "devicons-react/lib/icons/DockerOriginal";

import LeafletJS from "/public/images/shared/leafletjs.ico";
import ChartJS from "/public/images/shared/chartjs.ico";
import overviewImage from "/public/images/smas/overview.png";
import overview2Image from "/public/images/smas/overview2.png";
import overview3Image from "/public/images/smas/overview3.png";

export default function Home() {
    const pages = ["overview", "about", "technologies"];
    const sectionStyle = { margin: "20px 0" };
    const technologyContainerStyle = {
        background: "rgb(30, 30, 80)",
        paddingTop: "5px",
        color: "white",
        display: "flex",
        flexDirection: "column",
    };
    const listSubheaderStyle = {
        background: "rgb(30, 30, 80)",
        color: "white",
        fontWeight: "700",
    };
    const imageStyle = { maxWidth: "100%", height: "auto", objectFit: "cover" };

    return (
        <>
            <Head>
                <title>Tasos Gkagkas - Social Media Analytics Suite</title>
                <meta
                    name="description"
                    content="Social media analytics suite project overview"
                />
            </Head>
            <Navbar pages={pages} />
            <Container
                maxWidth="md"
                sx={{
                    marginTop: "40px",
                    display: "flex",
                    flexDirection: "column",
                    background: "#101820",
                }}
            >
                <section id="overview" style={sectionStyle}>
                    <Typography
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                        className="header1-alt-text"
                        component={"h2"}
                    >
                        <span>Social Media Analytics Suite</span>
                        <Button>
                            <a
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                href="https://itigr.callisto.csgroup.space/SMAS/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Visit the site</span>
                                <ArrowCircleRightOutlined sx={{ ml: 1 }} />
                            </a>
                        </Button>
                    </Typography>
                    <Slide
                        style={{ display: "flex", justifyContent: "center" }}
                        indicators={true}
                        arrows={false}
                    >
                        <Image
                            alt="overview"
                            quality={100}
                            src={overviewImage}
                            style={imageStyle}
                        />
                        <Image
                            alt="overview"
                            quality={100}
                            src={overview2Image}
                            style={imageStyle}
                        />
                        <Image
                            alt="overview"
                            quality={100}
                            src={overview3Image}
                            style={imageStyle}
                        />
                    </Slide>
                </section>
                <section id="about" style={sectionStyle}>
                    <Typography className="header1-alt-text" component={"h2"}>
                        About the project
                    </Typography>
                    <Typography className="normal-text" component={"p"}>
                        SMAS is a social media data monitoring and retrieval app
                        that allows the end user to retrieve filtered data and
                        analytics from various social media platforms and
                        visulize them in a dashboard environment.
                    </Typography>
                    <Typography className="normal-text" component={"p"}>
                        I was responsible for the design and development of the
                        frontend and backend of the project using ReactJS and
                        Laravel respectively. I also developed the database
                        schema in MongoDB and implemented the Twitter and
                        Instagram API consumer that collects and stores the data
                        using Java.
                    </Typography>
                </section>
                <section id="technologies" style={sectionStyle}>
                    <Typography className="header1-alt-text" component={"h2"}>
                        Technologies
                    </Typography>
                    <Container className="responsive-grid" sx={{ gap: "20px" }}>
                        <Paper elevation={2} sx={technologyContainerStyle}>
                            <List disablePadding={true}>
                                <ListSubheader sx={listSubheaderStyle}>
                                    Front-end
                                </ListSubheader>
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <ReactOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>ReactJS</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <Image src={LeafletJS} alt="leafletjs" width="24"/>
                                    </ListItemIcon>
                                    <ListItemText>LeafletJS</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <Image src={ChartJS} alt="chartjs" width="24"/>
                                    </ListItemIcon>
                                    <ListItemText>Chart.js</ListItemText>
                                </ListItem>
                            </List>
                        </Paper>

                        <Paper sx={technologyContainerStyle}>
                            <List disablePadding={true}>
                                <ListSubheader sx={listSubheaderStyle}>
                                    Back-end
                                </ListSubheader>
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <LaravelOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>Laravel</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <JavaOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>Java</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <DockerOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>Docker</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <MongodbOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>MongoDB</ListItemText>
                                </ListItem>
                            </List>
                        </Paper>
                    </Container>
                </section>
                <Footer />
            </Container>
        </>
    );
}
