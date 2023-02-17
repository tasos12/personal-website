import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkH } from "@mui/material";

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
        <AppBar position="fixed" sx={{ background: "rgb(20, 20, 50, 0.8)" }}>
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
                                minWidth: 0,
                                padding: "5px 10px",
                                borderRadius: "10px",
                                fontWeight: 700
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