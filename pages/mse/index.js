import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Container from "@mui/material/Container";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Chip from "@mui/material/Chip";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined";

import overviewImage from "/public/images/mse/overview.png";

export default function Home() {
    const pages = ["overview", "about", "technologies"];
    const sectionStyle = { margin: "20px 0" };
    const cardChipStyle = {
        my: 1,
        mx: 0.5,
        p: 0.5,
        color: "white",
        background: "black",
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
                    <Typography className="header2-text" component={"section"}>
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
                    <div>
                        <Chip
                            className="normal-text"
                            sx={cardChipStyle}
                            label="MongoDB"
                        />
                        <Chip
                            className="normal-text"
                            sx={cardChipStyle}
                            label="PHP"
                        />
                        <Chip
                            className="normal-text"
                            sx={cardChipStyle}
                            label="Javascript"
                        />
                        <Chip
                            className="normal-text"
                            sx={cardChipStyle}
                            label="HTML/CSS"
                        />
                    </div>
                </section>
                <Footer />
            </Container>
        </>
    );
}
