import Head from "next/head";
import Navbar from "/components/navbar";
import About from "/components/about";
import Experience from "/components/experience";
import Projects from "/components/projects";
import Contact from "/components/contact";
import Box from "@mui/material/Box";
import Social from "/components/social";
import Footer from "/components/footer";

export default function Home() {
    const pages = ["experience", "projects", "contact"];

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Head>
                <title>Tasos Gkagkas</title>
                <meta
                    name="Welcome to my website!"
                    content="Tasos Gkagkas' personal website."
                />
            </Head>
            <Navbar pages={pages} />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Social />
            <Footer />
        </Box>
    );
}
