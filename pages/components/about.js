import { Container, Typography } from '@mui/material';
import { tsParticles } from "tsparticles-engine";

export default function About() {
    return(
        <Container id='about' sx={{p:0, m:0, mt:'60px', width: 'xl', height: '100vh'}} maxWidth={false}>
            <Typography sx={{fontSize: '15rem', color: 'rgb(20, 120, 255)'}}>
                Hello 
                <br/>I am tasos
            </Typography>   
        </Container>
    )
}