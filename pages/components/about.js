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
            <Typography sx={{position:"absolute", top: '20%', left: '25%', textAlign:'center', fontWeight: '500', fontSize: '10vw'}}>
                Hello
                <br />I am Tasos
            </Typography>
        </Container>
    );
}