import {useState} from 'react';
import { Box, Typography, TextField, makeStyles, FormControlLabel, Checkbox, Fab, FormHelperText } from "@material-ui/core";
import MyModal from './Accords/modals';

const useStyles = makeStyles(theme => ({
    form:{
        display: 'flex',
        flexDirection: 'column',
        '&>*': {margin: theme.spacing(2)},
        '& a': {textDecoration: 'none', color: theme.palette.primary.main},
        '& .MuiFormHelperText-root':{margin: '0 16px'},
        '&>label':{marginBottom: '0'}
    }
}))

export default function RegisterBox(){
    const [input, setInput] = useState({
        userName:'',
        mail:'',
        password:'',
        confirm:'',
        checked: false
    });
    const [error, setError] = useState(false);
    const [sending, setSending] = useState(false);
    
    const classes = useStyles();

    const handleInput = ev => {
        if (ev.target.type === 'checkbox') setInput(prev => ({...prev, checked: !prev.checked}))
        else setInput(prev => ({...prev, [ev.target.name]: ev.target.value}));
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        if (input.userName.length <3 || !input.mail.match(/\w+[@]\w+[.]\w+/) || input.password.length < 5 || (input.password !== input.confirm) || !input.checked){
            setError(true);
        }
        else{
            setError(false);
            setSending('sending');
            //DO SOMETHING FOR REGISTER
            setTimeout(() => setSending('complete'), 2500);
        }
    }
    return(
        <>
            <Typography align = 'center' variant = 'h5'>
                GET YOU <Box component = 'span' color = 'primary.main'>FREE</Box> RADIO SERVER
            </Typography>
            <Typography>
                No Card - 100% Free. Start Your Online Radio Station Today!
            </Typography>
            <form noValidate onSubmit = {handleSubmit}>
                <Box width = {280} m = {2} mb = {0} ml = {1} onChange = {handleInput} className = {classes.form}>
                    <TextField name = 'userName' label = 'Username' required variant = 'outlined'
                        value = {input.userName} 
                        helperText = {error && (input.userName.length ? input.userName.length < 3 && 'Your username must consist of at least 3 characters' : 'Please enter a username')}
                        error = {error && input.userName.length < 3}
                    />
                    <TextField name = 'mail' label = 'Email' required variant = 'outlined' type = 'email'
                        value = {input.mail}
                        helperText = {error && !input.mail.match(/\w+[@]\w+[.]\w+/) && 'Please enter a valid email address'}
                        error = {error && !input.mail.match(/\w+[@]\w+[.]\w+/)}
                    />
                    <TextField name = 'password' label = 'Password' required variant = 'outlined' type = 'password'
                        value = {input.password}
                        helperText = {error && (input.password.length ? input.password.length < 5 && 'Your password must be at least 5 characters long' : 'Please provide a password')}
                        error = {error && input.password.length < 5}
                    />
                    <TextField name = 'confirm' label = 'Confirm password' variant = 'outlined' type = 'password'
                        required value = {input.confirm}
                        helperText = {error && (input.confirm ? input.password !== input.confirm && 'The password must be matched' : 'Please provide a password')}
                        error = {error && input.password !== input.confirm}
                    />
                    <FormControlLabel control = {<Checkbox color = 'primary' size = 'small' checked = {input.checked}/>}
                     label = {<Box sx = {{fontSize: '12px', fontWeight: '600'}}>
                        I Agree To The <a href = 'https://freeshoutcast.com/tos'>Terms Of Service</a></Box>}
                    />
                    {error && !input.checked && 
                    <FormHelperText error>
                        Read and accept the Terms of Service to proceed
                    </FormHelperText>}
                    <Box sx = {{alignSelf: 'flex-start'}}>
                        <Fab variant = 'extended' size = 'small' color = 'primary' type = 'submit'>
                            Register now
                        </Fab>
                    </Box>
                    <Typography variant = 'caption' component = 'i'>
                        Free Service Provided by <a href = 'https://billing.fastcast4u.com/link.php?id=901'>Fastcast4u.com</a>
                    </Typography>
                </Box>
            </form>            
            <MyModal open = {sending} onClose = {() => setSending(false)}
                text = 'Any status of action'  variant = 'h4'/>
        </>
    )
}