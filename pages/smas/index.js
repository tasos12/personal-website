import Container from "@mui/material/Container";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import overviewImage from '/public/images/smas/overview.png';
import overview2Image from "/public/images/smas/overview2.png";
import overview3Image from "/public/images/smas/overview3.png";

export default function Home() {
    const pages = ["overview", "about", "technologies"];
    const sectionStyle = { margin: '20px 0' };
    const cardChipStyle = { my:1, mx: 0.5, p: 0.5, fontSize: '1.2rem', color: 'white', background: 'black' };
    const imageStyle = { maxWidth: '100%', height: 'auto', objectFit: 'cover' };

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
                        Social Media Analytics Suite
                    </Typography>
                    <Slide indicators={true} arrows={false}>
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
                        SMAS is a social media data monitoring and retrieval
                        tool that allows the end user to retrieve filtered data
                        and analytics from various social media platforms and
                        visulize them in a dashboard environment.
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
                    </div>
                </section>
                <Button>Visit the site</Button>
                <Footer />
            </Container>
        </>
    );
}
