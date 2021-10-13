import React from 'react' 
import { connect, useSelector, useDispatch } from 'react-redux'
import { Container, Divider, List, ListItem, TextField, Typography} from '@material-ui/core'
import { ListItemButton,ListItemIcon,Checkbox, ListItemText} from '@mui/material'

const Todo = () => {
    const todos = useSelector(state => state.todos);

    console.log(todos);


    return (
        <Container maxWidth="md">            
            <TextField id="new-todo" label="New an item..." variant="standard" fullWidth />
            <br/>
            <br/>
            <Typography variant="h6">
                Todo Items
            </Typography>

            <List>
                    {
                        todos.map ( t =>(
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox
                                        edge="start"
                                        checked={t.status === 1 ? 1 : 0}
                                        />
                                    </ListItemIcon>
                                <ListItemText id={t.id} primary={t.description} />
                                </ListItemButton>
                            </ListItem>
                            
                        ))
                    }
            </List>
            <Divider />
        </Container>
    )
}
export default connect(null, null)(Todo)
