import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Container, Divider, List, ListItem, Typography} from '@material-ui/core'
import { ListItemButton,ListItemIcon,Checkbox, ListItemText} from '@mui/material'

const Done = () => {

    const doneItems = useSelector(state => state.done);
    const dispatch = useDispatch();

    const setDoneStatus = (todo) =>{
        dispatch({
            type: "UPDATE_DONE",
            todo
        })
    };


    return (
    <Container maxWidth="md"> 
        <Typography variant="h6">
            Done Items
        </Typography>

        <List>
                {
                    doneItems.map ( t =>(
                        <ListItem key={t.id} onClick={() => setDoneStatus(t)} disabled={t.status === 1 ? true : false}>
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
                        
                    ))
                }
        </List>
        <Divider />
</Container>
    )
}

export default connect(null, null)(Done)