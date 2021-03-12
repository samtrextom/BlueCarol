import React from "react";
import { getProfIcon } from "./ProfIcons";
import {Avatar, Card} from '@material-ui/core'

export default function PlayerCard({player, toggle}) {

  var fishDis = false
  var firstAidDis = false
  var woodDis = false
  var cookDis = false

  if(player.activeProf==="fishing"){fishDis=true}
  if(player.activeProf==="woodcutting"){woodDis=true}
  if(player.activeProf==="cooking"){cookDis=true}
  if(player.activeProf==="firstaid"){firstAidDis=true}

  return (
    <Card style={{ width: "100%",height:75, margin: 5 }}>
      <div style={{display:'flex'}}>
        <Avatar/>
        <div style={{display:'block'}} >
          <h5 style={{margin:0}}>{player.name}</h5>
          <div style={{display:'flex'}}>
            <div style={{ margin: 0, fontSize:12 }}>{player.race.name} {player.class}</div>
            <div style={{fontSize:10,marginLeft:10}}>
              {player.professions.map((prof)=>{
                return <div>{prof.name}: {prof.skill}</div>
              })}
            </div>
          </div>
        </div>
      </div>
      {player.professions.map((prof) => {
        var dis = false;
        if (player.activeProf === prof.name) {
          dis = true;
        }
        return getProfIcon(prof.name, dis, toggle, player.id);
      })}
      {getProfIcon("fishing",fishDis, toggle, player.id)}
      {getProfIcon("woodcutting",woodDis, toggle, player.id)}
      {getProfIcon("cooking",cookDis, toggle, player.id)}
      {getProfIcon("firstaid",firstAidDis, toggle, player.id)}
    </Card>
  );
}
