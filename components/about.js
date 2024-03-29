import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CustomParticles from "./shared/Particles";
import Social from "./social";

export default function About() {
    return (
        <Container
            id="about"
            sx={{
                width: "xl",
                height: "102vh",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            maxWidth={false}
        >
            <CustomParticles/>
            <div id="repulse-div">
                <Typography
                    component={"h1"}
                    className="header-text"
                    sx={{
                        fontWeight: "500",
                    }}
                >
                    Tasos Gkagkas
                </Typography>
                <Typography
                    component={"h2"}
                    className="header2-text"
                    sx={{
                        fontWeight: "700",
                        color: "rgb(120, 200, 255)",
                        mb: 5,
                        textAlign: "center",
                    }}
                >
                    Full-stack Developer.
                </Typography>
            </div>
            <Social />
        </Container>
    );
}