import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkH } from "@mui/material";

export default function Navbar() {
    const pages = ['about', 'experience', 'projects', 'contact']
    const style = {
        mx: 2,
        my: 1,
        display: "block",
        textTransform: "lowercase",
        color: "rgb(20, 120, 255)",
        textDecoration: "none",
    };

    return (
        <AppBar position="fixed" sx={{ background: "#101820FF" }}>
            <Container width="80%" maxWidth="md">
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                    }}
                >
                    <LinkH href="/" sx={style}>
                        <Button sx={{textTransform: 'lowercase'}}>//home</Button>
                    </LinkH>
                    {pages.map((page) => (
                        <Button key={page} sx={style}>
                            <Link
                                to={page}
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                {"//" + page}
                            </Link>
                        </Button>
                    ))}
                </Box>
            </Container>
        </AppBar>
    );
}