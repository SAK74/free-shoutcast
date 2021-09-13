import { TextField, Button, Typography, Link, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useState } from "react";
import MyModal from "./Accords/modals";
import {Spinner} from './myIcons';

const useStyles = makeStyles(theme => ({
    root:{
        width: '330px',
        '& *:not(button, button *, fieldset, a)':{
            color: grey[300],
            backgroundColor: theme.dark.background
        },
        '& button *, a:hover':{color: grey[50]},
        '& button, a': {fontWeight: 'bold'}
    },
    form:{
        display: 'flex',
        flexFlow: 'column',
        overflow: 'auto',
        padding: '50px 50px 200% 40px',
        '&>*':{
            marginBottom: theme.spacing(3)
        },
        '& button':{
            alignSelf: 'flex-start',
            marginBottom: theme.spacing(1),
            backgroundColor: grey[900]
        },
        '& a:hover':{
            textDecoration: 'none'
        }
    },
}));

const LoginBox = () => {
    const classes = useStyles();
    const [switchPanel, setSwitchPanel] = useState('Return to login');
    const [input, setInput] = useState({
        userName: '',
        password: ''
    });
    const [sending, setSending] = useState(false);

    const handleClick = ev => {
        ev.preventDefault();
        setSwitchPanel(ev.target.innerText);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        if (input.userName.length < 3) return;
        if (switchPanel === 'Return to login' && input.password.length < 5) return;
        
            setSending('sending');
            // DO SOMETHING TO LOGIN
            setTimeout(() => setSending('complete'), 2500);
    }

    const handleInput = ev => {
        setInput(prev => ({...prev, [ev.target.name]: ev.target.value}));
    }
    
    return(
    <>
        <div className = {classes.root}>
            <form spellCheck = 'false' autoComplete = 'off' noValidate name = 'login' onSubmit = {handleSubmit}> 
                <div className = {classes.form}>
                    {switchPanel === 'Return to login' && 
                    <>
                        <Typography variant = 'h4'>Login to your Account</Typography>
                        <TextField required variant = 'outlined' value = {input.userName}
                            label = 'username' onChange = {handleInput} name = 'userName'
                            helperText = {input.userName.length ? input.userName.length < 3 && 'Your username must consist of at least 3 characters' : 'Please enter a username'}
                        />
                        <TextField type = 'password' required variant = 'outlined' name = 'password'
                            label = 'password' value = {input.password} onChange = {handleInput}
                            helperText = {input.password.length ? input.password.length < 5 && 'Your password must be at least 5 characters long' : 'Please provide a password'}
                        />
                        <Button variant = 'contained' type = 'submit'>
                            Login
                        </Button>
                        <Link href = '#' onClick = {handleClick}>Forgot password?</Link>
                    </>
                    }
                    {switchPanel === 'Forgot password?' &&
                    <>
                        <TextField variant = 'outlined' value = {input.userName} label = 'username' name = 'userName'
                            onChange = {handleInput}
                            helperText = {input.userName.length < 3 && 'Your username must consist of at least 3 characters'}
                        />
                        <Button type = 'submit' variant = 'contained' endIcon = {sending && <Spinner color = 'primary'/>}>
                            Reset
                        </Button>
                        <Link href = '#' onClick = {handleClick}>Return to login</Link>
                    </>
                    }
                </div>
            </form>
        </div>
        <MyModal open = {sending} onClose = {() => setSending(false)}
         text = 'Any status of action'  variant = 'h4'/>
    </>
    )
}

export default LoginBox;