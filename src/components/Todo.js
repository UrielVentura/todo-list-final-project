import React, { useState } from 'react' 
import { connect, useSelector, useDispatch } from 'react-redux'
import { Container, Divider, List, ListItem, TextField, Typography} from '@material-ui/core'
import { ListItemButton,ListItemIcon,Checkbox, ListItemText, Button} from '@mui/material'

const Todo = () => {
    const todosItems = useSelector(state => state.todo.todos);
    const [todo, setTodo] = useState('');
    const [todoError, setTodoError] = useState(false);
    const dispatch = useDispatch();

    const setTodoStatus = (todo) =>{
        dispatch({
            type: "UPDATE_TODO",
            todo
        })
    };
    
    const newToDoHandler = () => {
        const id = Math.random().toString(36).slice(2);
        const newTodo = {
            id,
            description: todo,
            status: 0
        }
        
        if(todo === ''){
            setTodoError(true)
            return 
        }

        dispatch({
            type: "ADD_TODO",
            todo: newTodo
        });
        setTodo('');
        
    };


    return (
        <Container maxWidth="md">
            <Container maxWidth="xs">
                <TextField id="new-todo" label="New an item..." value={todo} error={todoError} onClick={() => setTodoError(false)} variant="standard" onChange={(e) => setTodo(e.target.value)} />
                <Button variant="outlined" color="primary" sx={{margin: 2}} size="small" onClick={() => newToDoHandler()}>Add</Button>
            </Container>            
            
            <br/>
            <br/>
            <Typography variant="h6">
                Todo Items
            </Typography>

            <List>
                    {
                        todosItems.map ( t =>(
                            <>
                            <ListItem key={t.id} onClick={() => setTodoStatus(t)}>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <Checkbox
                                        edge="start"
                                        checked={t.status === 1 ? 1 : 0}
                                        />
                                    </ListItemIcon>
                                <ListItemText id={t.id} primary={t.description} />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            </>
                            
                        ))
                        }
            </List>
        </Container>
    )
}
export default connect(null, null)(Todo)
