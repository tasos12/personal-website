import { Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from 'tsparticles';
import ParticleOptions from "./particleOptions";

export default function About() {
    const init = useCallback(
        async (engine) => {
            await loadFull(engine);
        }, []
    );

    return (
        <Container
            id="about"
            sx={{
                p: 0,
                m: 0,
                mt: "60px",
                width: "xl",
                height: "95vh",
                position: "relative",
            }}
            maxWidth={false}
        >
            <Particles
                id="tsparticles"
                init={init}
                options={ParticleOptions}
                width="100%"
                height="90vh"
                position="absolute"
            />
            <Typography
                sx={{
                    position: "absolute",
                    top: "30%",
                    left: "20%",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "500",
                        fontSize: "3vw",
                        color: "rgb(120, 200, 255)",
                    }}
                >
                    Hello my name is
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "500",
                        fontSize: "8vw",
                    }}
                >
                    Tasos Gkagkas
                </Typography>
            </Typography>
        </Container>
    );
}