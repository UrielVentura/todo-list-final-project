import { Container, Divider, List, ListItem, TextField, Typography} from '@material-ui/core'
import React from 'react'

const Todo = () => {
    return (
        <Container maxWidth="md">            
            <TextField id="new-todo" label="New an item..." variant="standard" fullWidth />
            <br/>
            <br/>
            <Typography variant="h6">
                Todo Items
            </Typography>

            <List>
                <ListItem>
                </ListItem>
            </List>
            <Divider />
        </Container>
    )
}

export default Todo
