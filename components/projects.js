import Container from '@mui/material/Container';
import Title from './shared/Title';
import ProjectCard from './shared/ProjectCard';

export default function Projects() {
    return (
        <Container
            id="projects"
            maxWidth={false}
            sx={{ my: 4, display: "flex", flexDirection: "column" }}
        >
            <Title text="Some of my projects"></Title>
            <Container
                className='responsive-grid'
                maxWidth={"lg"}
            >
                <ProjectCard
                    title="CALLISTO Social Media Analytics Suite"
                    description="SMAS is a social media data monitoring and retrieval tool that allows the end user to retrieve filtered data and analytics from various social media platforms and visulize them in a dashboard environment."
                    tags={["MongoDB", "Laravel", "ReactJs", "Docker"]}
                    link="/smas"
                    image="/images/smas/overview.png"
                />
                <ProjectCard
                    title="CALLISTO Multimodal Search Engine"
                    description="MSE is a web application developed for CALLISTO a HORIZON 2020 program that allows the end user: 1. To search and retrieve UAV images from a vast range of datasets 2. To design a fly area for a UAV and generate a mission path"
                    tags={["MongoDB", "PHP", "HTML", "CSS", "Docker"]}
                    image="/images/mse/overview.png"
                    link="/mse"
                    right={true}
                />
            </Container>
        </Container>
    );
}