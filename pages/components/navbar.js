import AppBar from "@mui/material/AppBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const pages = ['about', 'experience', 'projects', 'contact']

    return(
        <AppBar position="fixed"
        sx={{ background: '#101820FF' }}>
            <Container maxWidth='md'>
            <Box sx={{ 
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',  
            }}>
                {pages.map((page) => (
                    <Button key={page} sx={{ mx:2, my: 1, display: 'block', textTransform: 'lowercase', color: 'rgb(20, 120, 255)' }}>
                        <Link to={page} spy={true} smooth={true} offset={-100}>{'//' + page}</Link>
                    </Button>
                ))}
            </Box>
            </Container>
        </AppBar>
    );
}