import { useState } from "react";
import { Box, Drawer, Grid, Typography } from "@material-ui/core";
import { AppBar, Button, Container, CssBaseline, Link, Toolbar, createTheme, Paper } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import LoginBox from "./Components/loginPanel";
import CardBox from "./Components/card";
import { Lock } from "@material-ui/icons";
import NavList from "./Components/navList";
import Accord from "./Components/Accords/accords";
import { AnimatedDown } from "./Components/myIcons";
import RegisterBox from "./Components/registerPanel";
import Footer from "./Components/footer";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root:{},
    appBar:{
        height: '60px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '& img':{
            height: '60px'
        },
        '&>div':{
            justifyContent: "space-between"
        },
        '& button':{
            textTransform: 'capitalize',
            fontWeight: 'bold'
        }
    },
    main:{
        paddingTop: '60px',
    },
    section1:{
        background: '#ffffff9c url("/IMAGES/bg-white.png") center top',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        position: 'relative',
        marginBottom: theme.spacing(3),
        '& .MuiGrid-item':{
            maxWidth: '450px'
        }
    },
    arrow:{
        position: 'absolute',
        bottom: '15px',
        left: '50%'
    }
}));

const theme = createTheme({
    typography:{
        h4: {fontWeight: 600},
        h5:{fontWeight: 600},
        h6: {fontWeight: 600}
    },
    dark:{
        color: grey[400],
        background: grey[800]
    }
});

export default function Main(){
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <CssBaseline/>
            <ThemeProvider theme = {theme}>

            {/* App bar------ */}
            <AppBar className = {classes.appBar}>
                <Toolbar>
                    <Link href = 'https://freeshoutcast.com'>
                        <img src = '\IMAGES\logo@2x.png' alt = 'logo'/>
                    </Link>
                    <Button onClick = {() => setOpen(true)}
                     disableRipple color = 'primary' startIcon = {<Lock/>}>Login</Button>
                </Toolbar>
            </AppBar>

            {/* Drawer (login panel)----------- */}
            <Drawer anchor = 'right' open = {open} onClose = {() => setOpen(false)}
                variant = 'temporary' transitionDuration = {500}>
                    <LoginBox/>
                </Drawer>
            
            {/* Main window------ */}
            <main className = {classes.main}>
                <section className = {classes.section1}>
                    <Container> 
                        <Grid container alignItems = 'center' justifyContent = 'space-around' spacing = {0}>
                            <Grid item xs container justifyContent = 'center'>
                                <CardBox/>
                            </Grid>
                            <Grid item xs>
                                <Box component = {Paper} p = {2} pr = {6} 
                                  sx = {{backgroundColor: 'rgba(255,255,255,.7)'}} mt = {2} mb = {6}>
                                    <RegisterBox/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Link href = '#section2' className = {classes.arrow}><AnimatedDown color = 'primary' fontSize = 'large'/></Link>
                    </Container>
                </section>

                {/* panel "FAQ"--------------------- */}
                <section id = 'section2'>
                    <Container>
                        <Grid container spacing = {6}>
                            <Grid item xs = {12}><Box mt = {4}>
                                <Typography variant = 'h4' align = 'center'>
                                    Frequently Asked Questions:
                                </Typography></Box>
                            </Grid>
                            <Grid item md = {3} xs = {12}>
                                <NavList active = {activeIndex} setActive = {setActiveIndex}/>
                            </Grid>
                            <Grid  item md = {9} xs = {12}>
                                <Box mx = {3}>
                                    <Accord active = {activeIndex}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>

            {/* Footer----------------------- */}
            <Footer/>
            </ThemeProvider>
        </div>
    );
}