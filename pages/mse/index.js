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
import Html5Original from "devicons-react/lib/icons/Html5Original";
import Css3Original from "devicons-react/lib/icons/Css3Original";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import PhpOriginal from "devicons-react/lib/icons/PhpOriginal";
import MongodbOriginal from "devicons-react/lib/icons/MongodbOriginal";
import DockerOriginal from "devicons-react/lib/icons/DockerOriginal";

import LeafletJS from "/public/images/shared/leafletjs.ico";
import overviewImage from "/public/images/mse/overview.png";

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

    return (
        <>
            <Head>
                <title>Tasos Gkagkas - Multimodal Search Engine</title>
                <meta
                    name="description"
                    content="Multimodal Search Engine project overview"
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
                        <span>Multimodal Search Engine</span>
                        <Button
                            sx={{
                                py: 1,
                            }}
                        >
                            <a
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                target="_blank"
                                rel="noreferrer"
                                href="https://itigr.callisto.csgroup.space/MSE"
                            >
                                <span>Visit the site</span>
                                <ArrowCircleRightOutlined sx={{ ml: 1 }} />
                            </a>
                        </Button>
                    </Typography>
                    <Slide indicators={true} arrows={false}>
                        <Image
                            alt="overview"
                            quality={100}
                            src={overviewImage}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </Slide>
                </section>
                <section id="about" style={sectionStyle}>
                    <Typography className="header1-alt-text" component={"h2"}>
                        About the project
                    </Typography>
                    <Typography className="normal-text" component={"section"}>
                        MSE is a web application developed for CALLISTO a
                        HORIZON 2020 program that allows the end user: 1. To
                        search and retrieve UAV images from a vast range of
                        datasets 2. To design a fly area for a UAV and generate
                        a mission path
                    </Typography>
                </section>
                <section id="technologies" style={sectionStyle}>
                    <Typography className="header1-alt-text" component={"h2"}>
                        Technologies
                    </Typography>
                    <Container className="responsive-grid" sx={{ gap: "20px" }}>
                        <Paper elevation={2} sx={technologyContainerStyle}>
                            <List disablePadding={true}>
                                <ListSubheader
                                    sx={{
                                        background: "rgb(30, 30, 80)",
                                        color: "white",
                                        fontWeight: "700",
                                    }}
                                >
                                    Front-end
                                </ListSubheader>
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <Html5Original size="24" />
                                    </ListItemIcon>
                                    <ListItemText>HTML</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <Css3Original size="24" />
                                    </ListItemIcon>
                                    <ListItemText>CSS</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <JavascriptOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>Javascript</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <Image
                                            src={LeafletJS}
                                            alt="leafletjs"
                                            width="24"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>LeafletJs</ListItemText>
                                </ListItem>
                            </List>
                        </Paper>

                        <Paper sx={technologyContainerStyle}>
                            <List disablePadding={true}>
                                <ListSubheader
                                    sx={{
                                        background: "rgb(30, 30, 80)",
                                        color: "white",
                                        fontWeight: "700",
                                    }}
                                >
                                    Back-end
                                </ListSubheader>
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <PhpOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>PHP</ListItemText>
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
                                <Divider />
                                <ListItem>
                                    <ListItemIcon
                                        sx={{ justifyContent: "center" }}
                                    >
                                        <DockerOriginal size="24" />
                                    </ListItemIcon>
                                    <ListItemText>Docker</ListItemText>
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
