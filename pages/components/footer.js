import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function Footer() {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                padding: "30px 0",
                borderTop: "solid 1px rgb(20, 120, 255, 0.3)",
            }}
            component={"footer"}
        >
            <Typography sx={{ fontSize: "0.4rem" }}>
                ©Copyright 2022. Made by <Link href="">Tasos Gkagkas</Link>
            </Typography>
        </Container>
    );
}