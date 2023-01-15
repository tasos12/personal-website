import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function ProjectCard({ title, description, tags, image, link, right }) {
    const [hover, setHover] = useState(false);

    return (
        <Card
            sx={{
                position: "relative",
                boxShadow:
                    "0 0 16px 0 " + (hover ? "white" : "rgb(10, 40, 200)"),
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
                {hover && (
                    <div
                        style={{
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgb(50, 50, 80, 0.95)",
                        }}
                    >
                        <Typography className="header2-alt-text" component={'h3'} style={{color: 'white'}} >
                            {title}
                        </Typography>
                        <Typography component={'p'} >
                            {tags.map((tag) => (
                                <Chip key={tag} label={tag} sx={{ mx: '0.25vw', my: 1, color: 'white', background: 'black' }} />
                            ))}
                        </Typography>
                        <Button>
                            <Link className="button" href={link}>
                                View Project
                            </Link>
                        </Button>
                    </div>
                )}
            </CardActionArea>
        </Card>
    );
}
