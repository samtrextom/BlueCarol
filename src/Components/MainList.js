import React from 'react'
import {List} from '@material-ui/core'
import Resource from './Resource'

export default function MainList({state}) {



    return (
        <List>
            {state.map((resource)=>{
                return <Resource key={resource.name} resource={resource}/>
            })}
        </List>
    )
}
