import Container from "@mui/material/Container";
import Title from "./shared/Title";
import { motion } from "framer-motion";
import SkillList from "./shared/SkillList";
import Image from "next/image";
import LeafletJS from "/public/images/shared/leafletjs.ico";
import ChartJS from "/public/images/shared/chartjs.ico";
import Html5Original from "devicons-react/lib/icons/Html5Original";
import Css3Original from "devicons-react/lib/icons/Css3Original";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import NextjsOriginal from "devicons-react/lib/icons/NextjsOriginal";
import MaterialuiOriginal from "devicons-react/lib/icons/MaterialuiOriginal";
import JavaOriginal from "devicons-react/lib/icons/JavaOriginal";
import PhpPlain from "devicons-react/lib/icons/PhpPlain";
import CsharpOriginal from "devicons-react/lib/icons/CsharpOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import LaravelOriginal from "devicons-react/lib/icons/LaravelOriginal";
import DotnetcoreOriginal from "devicons-react/lib/icons/DotnetcoreOriginal";
import MysqlOriginal from "devicons-react/lib/icons/MysqlOriginal";
import MongodbOriginal from "devicons-react/lib/icons/MongodbOriginal";
import DockerOriginal from "devicons-react/lib/icons/DockerOriginal";
import GitOriginal from "devicons-react/lib/icons/GitOriginal";
import BashOriginal from "devicons-react/lib/icons/BashOriginal";
import VisualStudioPlain from "devicons-react/lib/icons/VisualStudioPlain";

export default function Skills() {
    return (
        <Container
            id="skills"
            maxWidth={false}
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Title text="My Skills"></Title>
            <Container
                className="responsive-grid-3"
                maxWidth={"md"}
                sx={{ gap: 2 }}
            >
                    <SkillList
                        title="Front-end"
                        skills={[
                            {
                                name: "HTML5",
                                icon: <Html5Original size="24" />,
                            },
                            {
                                name: "CSS3",
                                icon: <Css3Original size="24" />,
                            },
                            {
                                name: "JavaScript",
                                icon: <JavascriptOriginal size="24" />,
                            },
                            {
                                name: "ReactJS",
                                icon: <ReactOriginal size="24" />,
                            },
                            {
                                name: "Next.js",
                                icon: <NextjsOriginal size="24" />,
                            },
                            {
                                name: "LeafletJS",
                                icon: (
                                    <Image
                                        src={LeafletJS}
                                        alt="leafletjs"
                                        width="24"
                                    />
                                ),
                            },
                            {
                                name: "Chart.js",
                                icon: (
                                    <Image
                                        src={ChartJS}
                                        alt="chartjs"
                                        width="24"
                                    />
                                ),
                            },
                            {
                                name: "Material UI",
                                icon: <MaterialuiOriginal size="24" />,
                            },
                        ]}
                    />
                    <SkillList
                        title="Back-end"
                        skills={[
                            {
                                name: "Java",
                                icon: <JavaOriginal size="24" />,
                            },
                            {
                                name: "PHP",
                                icon: <PhpPlain size="24" />,
                            },
                            {
                                name: "C#",
                                icon: <CsharpOriginal size="24" />,
                            },
                            {
                                name: "Python",
                                icon: <PythonOriginal size="24" />,
                            },
                            {
                                name: "Laravel",
                                icon: <LaravelOriginal size="24" />,
                            },
                            {
                                name: ".NET Core",
                                icon: <DotnetcoreOriginal size="24" />,
                            },
                            {
                                name: "MySQL",
                                icon: <MysqlOriginal size="24" />,
                            },
                            {
                                name: "MongoDB",
                                icon: <MongodbOriginal size="24" />,
                            },
                            {
                                name: "Docker",
                                icon: <DockerOriginal size="24" />,
                            },
                        ]}
                    />
                    <SkillList
                        title="Tools"
                        skills={[
                            {
                                name: "Git",
                                icon: <GitOriginal size="24" />,
                            },
                            {
                                name: "Bash",
                                icon: <BashOriginal size="24" />,
                            },
                            {
                                name: "Visual Studio Code",
                                icon: (
                                    <VisualStudioPlain
                                        color="lightblue"
                                        size="24"
                                    />
                                ),
                            }
                        ]}
                    />
            </Container>
        </Container>
    );
}