import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function Social() {
    return (
        <Typography
            sx={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/tasos12"
            >
                <GitHub
                    sx={{ m: "5px 10px", fontSize: "2.5rem", color: "white" }}
                />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tasos-gkagkas-09854714b/"
            >
                <LinkedIn
                    sx={{ m: "5px 10px", fontSize: "2.5rem", color: "white" }}
                />
            </a>
        </Typography>
    );
}