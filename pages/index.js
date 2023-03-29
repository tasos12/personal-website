import Head from "next/head";
import Navbar from "/components/navbar";
import About from "/components/about";
import Experience from "/components/experience";
import Projects from "/components/projects";
import Contact from "/components/contact";
import Box from "@mui/material/Box";
import Social from "/components/social";
import Footer from "/components/footer";
import Skills from "/components/skills";

export default function Home() {
    const pages = ["skills", "experience", "projects", "contact"];

    return (
        <>            
            <Head>
                <title>Tasos Gkagkas</title>
                <meta
                    name="description"
                    content="Tasos Gkagkas is a Full stack developer from Greece.
                             Feel free to contact him for any inspiring ideas or projects."
                />
                <meta 
                    name="keywords" 
                    content="Tasos Gkagkas, Tasos, Gkagkas, Gagas, Full Stack, Developer, Programmer, Web Developer, Web Programmer, Web"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Navbar pages={pages} />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Social />
                <Footer />
            </Box>
        </>
    );
}
