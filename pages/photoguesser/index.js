import Head from "next/head";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import Container from "@mui/material/Container";

export default function Home() {
    const pages = ["overview", "about", "technologies"];

    return(
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
                    marginTop: "60px",
                    display: "flex",
                    flexDirection: "column",
                    background: "#101820",
                }}
            >

                Todo ...
            </Container>
        </>
    )
}