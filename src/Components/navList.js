import { List, ListItem as MuiListItem, ListItemIcon, ListItemText, withStyles } from "@material-ui/core";
import { Check } from "@material-ui/icons";

const ListItem = withStyles(theme => ({
    root:{
        '&$selected':{
            backgroundColor: 'transparent',
            border: `thin solid ${theme.palette.primary.main}`,
            '&:hover':{backgroundColor: 'transparent'}
        }
    },
    selected:{}
}))(MuiListItem);

const LinkListItem = props => <ListItem component = 'a' {...props}>
        <ListItemText primary = {props.primary}/>
        {props.selected && <ListItemIcon><Check color = 'primary'/></ListItemIcon>}
    </ListItem>

export default function NavList({active, setActive}){
    
    const items = ['FreeSHOUTcast', 'AutoDJ', 'Live Stream', 'Limits'].map((value, index) => 
        <LinkListItem
         key = {index}
         href = {`#${value}`} 
         primary = {value} 
         selected = {active === index}
         onClick = {() => setActive(index)}
        />);
    return(
        <List component = 'nav'>
            {items}
        </List>
    )
}