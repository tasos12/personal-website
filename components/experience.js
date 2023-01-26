import Container from "@mui/material/Container";
import Title from "./shared/Title";
import ExperienceCard from "./shared/ExperienceCard";

export default function Experience() {
    return (
        <Container id="experience" maxWidth={false}>
            <Title text="My developer experience"></Title>
            <Container maxWidth={"md"}>
                <ExperienceCard
                    positionTitle="Full-Stack Developer"
                    positionDescription="Being part of the web and social media mining 
                        team developing full stack solutions for research
                        and development projects using PHP/Laravel,
                        ReactJs and MongoDB."
                    companyName="CERTH (M4D-Group)"
                    companyLogo="/images/home/m4d.png"
                    companyLink="https://m4d.iti.gr/"
                    companyLinkShort="m4d.iti.gr"
                    datePeriod="Sept 2021 - Present"
                    technologies={[
                        "Javacript",
                        "ReactJs",
                        "PHP",
                        "Laravel",
                        "MongoDB",
                        "Python",
                        "Java",
                        "Docker",
                    ]}
                />
                <ExperienceCard
                    positionTitle="Unity Developer"
                    positionDescription=" Designed and developed a scalable multiplayer
                                solution for a VR simulation game utilizing
                                parallel programming methods using C# and Unity
                                game engine."
                    companyName="Greek Army (Research & Development)"
                    companyLogo=""
                    companyLink=""
                    companyLinkShort=""
                    datePeriod="Sept 2020 - May 2021"
                    technologies={["Unity", "C#", "Parallel Programming"]}
                />
            </Container>
        </Container>
    );
}
