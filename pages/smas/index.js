import Container from "@mui/material/Container";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import overviewImage from '/public/images/smas/overview.png';

export default function Home() {
    const cardChipStyle = { my:1, mx: 0.5, p: 0.5, fontSize: '1.2rem', color: 'white', background: 'black' };

    return (
        <>
            <Navbar />
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: "60px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <h1 style={{}}>Social Media Analytics Suite</h1>
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
                <h2>Tools used</h2>
                <div>
                    <Chip sx={cardChipStyle} label="ReactJs" />
                    <Chip sx={cardChipStyle} label="Laravel" />
                    <Chip sx={cardChipStyle} label="MongoDB" />
                </div>
                <h2>The Challenge</h2>
                <Footer/>
            </Container>
        </>
    );
}
