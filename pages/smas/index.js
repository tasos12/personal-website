import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Container from "@mui/material/Container";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined";
import Navbar from "/components/navbar";
import Footer from "/components/footer";

import overviewImage from "/public/images/smas/overview.png";
import overview2Image from "/public/images/smas/overview2.png";
import overview3Image from "/public/images/smas/overview3.png";

export default function Home() {
    const pages = ["overview", "about", "contribution", "technologies"];
    const sectionStyle = { margin: "20px 0" };
    const cardChipStyle = {
        my: 1,
        mx: 0.5,
        p: 0.5,
        fontSize: "1.1vw",
        color: "white",
        background: "black",
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
                        <Button
                            sx={{
                                py: 1,
                            }}
                        >
                            <Link
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                href="https://itigr.callisto.csgroup.space/SMAS/"
                            >
                                <span>Visit the site</span>
                                <ArrowCircleRightOutlined sx={{ ml: 1 }} />
                            </Link>
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
                    <Typography className="header2-text" component={"section"}>
                        SMAS is a social media data monitoring and retrieval app
                        that allows the end user to retrieve filtered data and
                        analytics from various social media platforms and
                        visulize them in a dashboard environment.
                    </Typography>
                </section>
                <section id="contribution" style={sectionStyle}>
                    <Typography className="header1-alt-text" component={"h2"}>
                        My contribution
                    </Typography>
                    <Typography className="header2-text" component={"section"}>
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
                    <div>
                        <Chip sx={cardChipStyle} label="ReactJs" />
                        <Chip sx={cardChipStyle} label="Laravel" />
                        <Chip sx={cardChipStyle} label="MongoDB" />
                        <Chip sx={cardChipStyle} label="Java" />
                        <Chip sx={cardChipStyle} label="Docker" />
                    </div>
                </section>
                <Footer />
            </Container>
        </>
    );
}
