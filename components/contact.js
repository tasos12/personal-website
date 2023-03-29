import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Title from './shared/Title';

export default function Contact() {
    return (
        <Container
            id="contact"
            maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: "20px",
            }}
        >
            <Title text="Get in Touch" />
            <Typography className="header2-text" sx={{ my: "15px" }}>
                Interested in collaborating with me?
            </Typography>
            <Typography className="header3-text" sx={{ my: "10px" }}>
                I am always open to new ideas and opportunities.
            </Typography>
            <Button
                onClick={() =>
                    (window.location =
                        "mailto:tasos.gkagkas@gmail.com?subject=Awesome%20Proposition")
                }
                className="button"
            >
                Start a conversation
            </Button>
        </Container>
    );
}