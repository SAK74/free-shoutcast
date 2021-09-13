import { Divider, List, ListItem, ListItemText, makeStyles, Paper, Typography, Box } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root:{
        width: '350px',
        padding: theme.spacing(2),
        '&>*':{
            marginBottom: theme.spacing(2)
        },
        '& hr':{
            marginLeft: '30%',
            marginRight: '30%'
        },
        '& .MuiListItem-root':{
            textAlign: 'center'
        }
    }
}))
export default function CardBox() {
    const classes = useStyles();

    return(
        <Paper className = {classes.root} align = 'center'>
                <Typography color = 'primary' variant = 'h6'>
                    FREE SHOUTCAST <Box component = 'span' color = 'text.primary'>SERVER</Box>
                </Typography>
                <Typography variant = 'h2' color = 'primary'>FREE</Typography>
                
                <Divider/>
                <List>
                        <ListItemText primary = 'Online Radio Control Panel'/>
                        <ListItemText primary = 'Stream Live'/>
                        <ListItemText primary = 'AutoDJ Mode'/>
                        <ListItemText primary = 'Radio Player & Page'/>
                        <ListItemText primary = 'LiveChat Support'/>
                        <ListItem component = 'a' href = '#section2'>
                            <ListItemText primary = 'and more...'/>
                        </ListItem>
                </List>
        </Paper>
    )
}