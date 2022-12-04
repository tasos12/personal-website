import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Contact() {
    return (
        <Container
            id="contact"
            width="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "40vh",
            }}
        >
            <Title text="Get in Touch" />
            <Typography sx={{ fontSize: "2rem", my: "15px" }}>
                Interested in collaborating with me?
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", my: "10px" }}>
                I am always open to new ideas and opportunities.
            </Typography>
            <Button>Start a conversation</Button>
        </Container>
    );
}