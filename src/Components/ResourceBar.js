import React from 'react'

export default function ResourceBar({name,total, max}) {

    const styles={
        bar:{
            width:200,
            backgroundColor:'#333',
            color:'#dcdcdc',
            height:25
        },
        filler:{
            width:String(total/max*100)+'%',
            height:24,
            backgroundColor:'#4508FEBB',
            marginTop:-21
        }
    }

    return (
        <div style={styles.bar}>
            {max?<div>{name}: {total} / {max}<div style={styles.filler}></div></div>:<div>{name}: {total}</div>}

        </div>
        
    )
}
