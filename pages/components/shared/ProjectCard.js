import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ProjectCard({ title, description, tags, image, link, right }) {
    const [hover, setHover] = useState(false);

    return (
        <Card
            sx={{
                position: "relative",
                my: 6,
                boxShadow: "0 0 16px 0 " + (hover ? "white" : "rgb(10, 40, 200)"),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="20%"
                    image={image}
                    alt="project image"
                    sx={{ objectFit: "cover" }}
                />
                <CardContent
                    sx={{ background: "rgb(10, 10, 50)", color: "white" }}
                >
                    <Typography
                        className="header2-text"
                        fontWeight={700}
                        gutterBottom
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        className="normal-text"
                        variant="body2"
                        color="white"
                    >
                        {description}
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "5px",
                            marginTop: "10px",
                        }}
                    >
                        {tags.map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                sx={{ color: "white", background: "black" }}
                            />
                        ))}
                    </div>
                    <Link
                        href={link}
                        style={{
                            position: "absolute",
                            top: 0,
                            height: "100%",
                            width: "100%",
                        }}
                    >
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
