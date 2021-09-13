import {Container, makeStyles, Typography, Link} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        padding: theme.spacing(5),
        marginTop: theme.spacing(6),
        backgroundColor: theme.dark.background,
        color: theme.dark.color,
        '& a': {color: theme.dark.color}
    }
}))

export default function Footer(){
    const classes = useStyles();
    return(
        <footer className = {classes.root}>
            <Container>
                <Typography align = 'center' variant = 'body2'>
                    Copyrights © 2008-2021 All Rights Reserved by FastCast DWC-LLC
                    <br/>
                    <Link href = 'https://freeshoutcast.com/tos'>Terms of Service</Link> /&nbsp;
                    <Link href = 'https://freeshoutcast.com/privacy'>Privacy Policy</Link>
                </Typography>
            </Container>
        </footer>
    )
}