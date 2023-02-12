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
            <Container className="responsive-grid" maxWidth={"lg"}>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <ProjectCard
                        title="CALLISTO Social Media Analytics Suite"
                        description="SMAS is a social media data monitoring and retrieval tool that allows the end user to retrieve filtered data and analytics from various social media platforms and visulize them in a dashboard environment."
                        tags={["MongoDB", "Laravel", "ReactJs", "Docker"]}
                        link="/smas"
                        image="/images/smas/overview.png"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <ProjectCard
                        title="CALLISTO Multimodal Search Engine"
                        description="MSE is a web application developed for CALLISTO a HORIZON 2020 program that allows the end user: 1. To search and retrieve UAV images from a vast range of datasets 2. To design a fly area for a UAV and generate a mission path"
                        tags={["MongoDB", "PHP", "HTML", "CSS", "Docker"]}
                        image="/images/mse/overview.png"
                        link="/mse"
                    />
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
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
                    />
                </motion.div>
            </Container>
        </Container>
    );
}