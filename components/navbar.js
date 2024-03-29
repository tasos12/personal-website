import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link, animateScroll } from "react-scroll";
import LinkH from "@mui/material/Link";

export default function Navbar(props) {
    const style = {
        mx: 2,
        my: 1,
        display: "block",
        textTransform: "lowercase",
        color: "rgb(20, 120, 255)",
        textDecoration: "none",
    };

    return (
        <AppBar
            position="fixed"
            sx={{ background: "rgb(20, 20, 50, 0.8)" }}
            className="responsive-navbar"
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        float: "left",
                    }}
                >
                    <LinkH href="/" sx={style}>
                        <Button
                            sx={{
                                textTransform: "lowercase",
                                fontWeight: 700,
                            }}
                        >
                            {"*home"}
                        </Button>
                    </LinkH>
                </Box>
                <Box
                    sx={{
                        float: "right",
                        display: "flex",
                    }}
                >
                    {props.pages.map((page) => (
                        <Button key={page} sx={style}>
                            <Link
                                to={page}
                                spy={true}
                                smooth={true}
                                offset={-60}
                            >
                                {"*" + page}
                            </Link>
                        </Button>
                    ))}
                </Box>
            </Container>
        </AppBar>
    );
}