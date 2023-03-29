import Image from "next/image";
import Head from "next/head";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import SkillList from "/components/shared/SkillList";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined";
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

    return (
        <>
            <Head>
                <title>Tasos Gkagkas - Multimodal Search Engine</title>
                <meta
                    name="description"
                    content="Multimodal Search Engine project is a web application 
                    developed for CALLISTO a HORIZON 2020 program that allows the 
                    end user to search and retrieve UAV images from a vast range of 
                    datasets and to design a fly area for a UAV and generate a mission path"
                />
                <meta 
                    name="keywords" 
                    content="Tasos Gkagkas, Tasos, Gkagkas, Gagas, Multimodal, Search, Engine, CALLISTO, HORIZON, 2020, Full Stack, Developer, Programmer, Web Developer, Web Programmer, Web"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
                        <SkillList
                            title="Front-end"
                            skills={[
                                {
                                    name: "HTML",
                                    icon: <Html5Original size="24px" />,
                                },
                                {
                                    name: "CSS",
                                    icon: <Css3Original size="24px" />,
                                },
                                {
                                    name: "Javascript",
                                    icon: <JavascriptOriginal size="24px" />,
                                },
                                {
                                    name: "LeafletJS",
                                    icon: (
                                        <Image
                                            src={LeafletJS}
                                            alt="leafletjs"
                                            width="24"
                                        />
                                    ),
                                },
                            ]}
                        />
                        <SkillList
                            title="Back-end"
                            skills={[
                                {
                                    name: "PHP",
                                    icon: <PhpOriginal size="24px" />,
                                },
                                {
                                    name: "MongoDB",
                                    icon: <MongodbOriginal size="24px" />,
                                },
                                {
                                    name: "Docker",
                                    icon: <DockerOriginal size="24px" />,
                                },
                            ]}
                        />
                    </Container>
                </section>
                <Footer />
            </Container>
        </>
    );
}
