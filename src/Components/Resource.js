import React from 'react'
import {ListItem, Button} from '@material-ui/core'

export default function Resource({resource}) {

    return (
        <ListItem>
            {resource.name}: {resource.qty}/{resource.max}{resource.req===null?<Button variant="contained" color="primary">Farm</Button>:null}
        </ListItem>
    )
}
