import Image from "next/image";
import Head from "next/head";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined";
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
import SkillList from "/components/shared/SkillList";

export default function Home() {
    const pages = ["overview", "about", "technologies"];
    const sectionStyle = { margin: "20px 0" };
    const imageStyle = { maxWidth: "100%", height: "auto", objectFit: "cover" };

    return (
        <>
            <Head>
                <title>Tasos Gkagkas - Social Media Analytics Suite</title>
                <meta
                    name="description"
                    content="Social media analytics suite is a project that was developed as part of the HORIZON 2020 project CALLISTO. It is a web application that allows users to analyze social media data about certain usecases."
                />
                <meta 
                    name="keywords" 
                    content="Tasos Gkagkas, Tasos, Gkagkas, Gagas, social media, analytics, suite, CALLISTO, HORIZON, 2020, Full Stack, developer, programmer, Web Developer, Web Programmer, Web"
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
                        <SkillList
                            title="Front-end"
                            skills={[
                                {
                                    name: "ReactJS",
                                    icon: <ReactOriginal size="24" />,
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
                                {
                                    name: "Chart.js",
                                    icon: (
                                        <Image
                                            src={ChartJS}
                                            alt="chartjs"
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
                                    name: "Laravel",
                                    icon: <LaravelOriginal size="24" />,
                                },
                                {
                                    name: "Java",
                                    icon: <JavaOriginal size="24" />,
                                },
                                {
                                    name: "MongoDB",
                                    icon: <MongodbOriginal size="24" />,
                                },
                                {
                                    name: "Docker",
                                    icon: <DockerOriginal size="24" />,
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
