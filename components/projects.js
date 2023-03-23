import Container from '@mui/material/Container';
import Title from './shared/Title';
import ProjectCard from './shared/ProjectCard';
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <Container
            id="projects"
            maxWidth={false}
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Title text="Some of my projects"></Title>
            <Container  maxWidth={"lg"}>
                <motion.div
                    className="responsive-grid"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <ProjectCard
                        title="CALLISTO Social Media Analytics Suite"
                        description="SMAS is a social media data monitoring and retrieval tool that allows the end user to retrieve filtered data and analytics from various social media platforms and visulize them in a dashboard environment."
                        tags={["MongoDB", "Laravel", "ReactJs", "Docker"]}
                        image="/images/smas/overview.png"
                        link="/smas"
                        liveLink={"https://itigr.callisto.csgroup.space/SMAS"}
                    />
                    <ProjectCard
                        title="CALLISTO Multimodal Search Engine"
                        description="MSE is a web application developed for CALLISTO a HORIZON 2020 program that allows the end user: 1. To search and retrieve UAV images from a vast range of datasets 2. To design a fly area for a UAV and generate a mission path"
                        tags={["MongoDB", "PHP", "HTML", "CSS", "Docker"]}
                        image="/images/mse/overview.png"
                        link="/mse"
                        liveLink={"https://itigr.callisto.csgroup.space/MSE/public/index.html"}
                    />
                    <ProjectCard
                        title="Tasos Gkagkas Portfolio"
                        description="My personal portfolio website."
                        tags={[
                            "ReactJs",
                            "Next.js",
                            "Material-UI",
                            "Framer Motion",
                            "Vercel",
                        ]}
                        image="/images/website/overview.png"
                        link="/"
                        liveLink={"https://tasosgkagkas.com/"}
                    />
                    <ProjectCard
                        title="Photoguesser"
                        description="Guess what year a photo was taken in a web browser game that you can play with your friends."
                        tags={[
                            "MongoDB",
                            "Java",
                            "Spring Boot",
                            "AWS",
                            "ReactJs",
                            "Next.js",
                            "Joy-UI",
                            "Vercel",
                        ]}
                        image="https://raw.githubusercontent.com/tasos12/photoguesser-front/0e9b012c4f503e1fdd69d179a543c19d2edff094/raw/logo_full.png"
                        link="/photoguesser"
                        liveLink={"https://www.photo-guesser.com/"}
                    />
                </motion.div>
            </Container>
        </Container>
    );
}