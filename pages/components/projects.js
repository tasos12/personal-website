import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function Projects() {
    const cardStyle = { height: '300px', width: '100%', display: 'flex' };
    const cardContentStyle = { position: 'relative', height: '100%', width:'70%', color: 'rgb(20, 120, 255)', background: 'rgb(5, 20, 40)' };
    const cardChipStyle = { my:1, mx: 0.5, p: 0.5, fontSize: '1.2rem', color: 'rgb(20, 120, 255)', background: 'black' };
    const cardMediaStyle = { height: '100%', width: '40%'};

    return(
        <Container id='projects' maxWidth='lg' sx={{ my: 10, height: '90vh', display: 'flex', flexDirection: 'column', justifyContent:'space-evenly'}}>
          <Card sx={cardStyle}> 
            <CardMedia
              component="img" 
              sx={cardMediaStyle}
              image=""
              alt=''
            />
            <CardContent sx={cardContentStyle}>
              <Typography fontSize={'2rem'} fontWeight={'700'} component={'div'}>
                CALLISTO Social Media Analytics Suite
              </Typography>
              <Typography>
                SMAS is a social media analysis tool that allows the end user to retrieve and view data and analytics from various social media platforms in a dashboard environment.
              </Typography>
              <div style={{position: 'absolute', bottom: 10}}>
                <Chip sx={cardChipStyle} label='MongoDB'/>
                <Chip sx={cardChipStyle} label='PHP'/>
                <Chip sx={cardChipStyle} label='Laravel'/>
                <Chip sx={cardChipStyle} label='ReactJs'/>
              </div>
            </CardContent>
          </Card>
          <Card sx={cardStyle}> 
            <CardMedia
              component="img" 
              sx={cardMediaStyle}
              image=""
              alt=''
            />
            <CardContent sx={cardContentStyle}>
              <Typography fontSize={'2rem'} fontWeight={'700'} component={'div'}>
                CALLISTO Multimodal Search Engine
              </Typography>
              <Typography>
                MSE is a web application developed for CALLISTO a HORIZON 2020 program that allows the end user: 
                <br/>1. To search and retrieve UAV images from a vast range of datasets
                <br/>2. To design a fly area for a UAV and generate a mission path
              </Typography>
              <div style={{position: 'absolute', bottom: 10}}>
                <Chip sx={cardChipStyle} label='MongoDB'/>
                <Chip sx={cardChipStyle} label='PHP'/>
                <Chip sx={cardChipStyle} label='Vanilla HTML'/>
                <Chip sx={cardChipStyle} label='CSS'/>
              </div>
            </CardContent>
          </Card>
      </Container>
    );
}