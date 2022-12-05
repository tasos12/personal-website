import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

export default function Social() {
    return (
        <Typography
            sx={{
                position: "sticky",
                bottom: "20px",
                left: "0px",
                width: "95%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Link href="https://github.com/tasos12">
                <GitHub
                    sx={{ my: "5px", fontSize: "2.5rem", color: "white" }}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/tasos-gkagkas-09854714b/">
                <LinkedIn
                    sx={{ my: "5px", fontSize: "2.5rem", color: "white" }}
                />
            </Link>
        </Typography>
    );
}