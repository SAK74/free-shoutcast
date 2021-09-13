import { Link, Modal, Backdrop, Fade, makeStyles, withStyles, CircularProgress, Paper, Typography, IconButton } from "@material-ui/core"
import { CancelOutlined, ThumbUpOutlined } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    modal:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img':{
            maxHeight: theme.spacing(55),
        },
        '& figure': {
            zIndex: '1',
        }
    },
    paper:{
        padding: theme.spacing(8),
        textAlign: 'center',
        position: 'relative',
        '&>svg':{marginBottom: theme.spacing(2)}
    },
    close:{
        position: 'absolute',
        right: theme.spacing(3),
        top: theme.spacing(2),
    }
}))

const UserBackDrop = withStyles({
    root:{
        backgroundColor: 'rgba(0,0,0,.8)',
        zIndex: '0'
    }
})(Backdrop);

const UserModal = props => {
    const classes = useStyles();
    return(
        <Modal {...props} className = {classes.modal}
            closeAfterTransition
            BackdropComponent = {UserBackDrop}
            BackdropProps = {{timeout: '500'}}
        >
            <>
                <IconButton aria-label = 'close'
                  className = {classes.close} onClick = {() => props.onClose()}>
                    <CancelOutlined color = 'error' fontSize = 'large'/>
                </IconButton>
                {props.children}
            </>
        </Modal>
    )
}

export default function MyModal({url, text, ...props}){
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    
    const handleOpen = item => ev => {
        ev.preventDefault();
        setOpenModal(item);
    }

    if (url){
        let alt = url.split('/'); alt = alt[alt.length-1];
        return(
            <div>
                <Link href = {url} onClick = {handleOpen(url)}>
                    <img src = {url} alt = {alt}/>
                </Link>
                <UserModal open = {openModal === url} onClose = {() => setOpenModal(false)}>
                    <Fade in = {openModal === url}>
                        <figure>
                            <img src = {url} alt = {alt}/> 
                            <figcaption/>
                        </figure>
                    </Fade>
                </UserModal>
            </div>
        )
    }
    return(
        <>
            <UserBackDrop open = {props.open === 'sending'}>
                <CircularProgress/>
            </UserBackDrop>

            <UserModal {...props} open = {props.open === 'complete'}>
                <Fade in = {props.open === 'complete'}>
                    <Paper className = {classes.paper}>
                        <ThumbUpOutlined color = 'secondary' fontSize = 'large'/>
                        <Typography {...props} align = 'center'>
                            {text}
                        </Typography>
                    </Paper>
                </Fade>
            </UserModal>                
        </>
    )
}