import Container from "@mui/material/Container";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import overviewImage from "/public/images/mse/overview.png";

export default function Home() {
    const pages = ["overview", "about", "technologies"];
    const sectionStyle = { margin: "20px 0" };
    const cardChipStyle = {
        my: 1,
        mx: 0.5,
        p: 0.5,
        fontSize: "1.2rem",
        color: "white",
        background: "black",
    };

    return (
        <>
            <Navbar pages={pages} />
            <Container
                maxWidth="md"
                sx={{
                    marginTop: "60px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <section id="overview" style={sectionStyle}>
                    <Typography className="header1-alt-text" component={"h2"}>
                        Multimodal Search Engine
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
                        <Chip sx={cardChipStyle} label="MongoDB" />
                        <Chip sx={cardChipStyle} label="PHP" />
                        <Chip sx={cardChipStyle} label="Javascript" />
                        <Chip sx={cardChipStyle} label="HTML/CSS" />
                    </div>
                </section>
                <Button className="button">Visit the site</Button>
                <Footer />
            </Container>
        </>
    );
}
