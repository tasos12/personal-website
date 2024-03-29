import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ArrowCircleRightOutlined from "@mui/icons-material/ArrowCircleRightOutlined";
import LinkOutlined from "@mui/icons-material/LinkOutlined";
import Button from "@mui/material/Button";
import Link from "next/link";


export default function ProjectCard({ title, description, tags, image, link, liveLink }) {
    const [hover, setHover] = useState(false);

    return (
        <Card
            sx={{
                position: "relative",
                boxShadow:
                    "0 0 16px 0 " + (hover ? "white" : "rgb(10, 40, 200)"),
                height: "300px",
                m: 2
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
                <CardMedia
                    component="img"
                    image={image}
                    alt="project image"
                    sx={{ objectFit: "cover", height: "300px" }}
                />
                <AnimatePresence>
                {hover && (
                    <motion.div
                        style={{
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            top: "100%",
                            width: "100%",
                            height: "100%",
                            background:
                                "linear-gradient(0deg, rgb(50, 50, 80, 1) 30%, rgb(50, 50, 80, 0.7) 50%, rgb(50, 50, 80, 0) 100%)",
                        }}
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: "-100%", opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        exit={{ y: 0, opacity: 0 }}
                    >
                        <Typography
                            className="header2-alt-text"
                            component={"h3"}
                            style={{ color: "white" }}
                        >
                            {title}
                        </Typography>
                        <Typography 
                            component={"div"}
                            style={{ 
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                maxWidth: "90%",
                            }} 
                        >
                            {tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    sx={{
                                        height: 0,
                                        px: 0,
                                        py: 1.6,
                                        mx: 0.2,
                                        my: 1,
                                        color: "white",
                                        background: "black",
                                    }}
                                />
                            ))}
                        </Typography>
                        <Typography sx={{ display: "flex" }}>
                            <Button>
                                <Link
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: 20,
                                    }}
                                    className="button"
                                    href={liveLink}
                                    target="_blank"
                                >
                                    <span>Live</span>
                                    <LinkOutlined sx={{ ml: 1 }} />
                                </Link>
                            </Button>
                            <Button>
                                <Link
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: 20,
                                    }}
                                    className="button"
                                    href={link}
                                >
                                    <span>View Project</span>
                                    <ArrowCircleRightOutlined sx={{ ml: 1 }} />
                                </Link>
                            </Button>
                        </Typography>
                    </motion.div>
                )}
                </AnimatePresence>
        </Card>
    );
}
