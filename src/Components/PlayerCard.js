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
    <Card style={{ width: "100%", height: 70, margin: 5 }}>
      <div style={{display:'flex'}}>
        <Avatar/>
        <div style={{display:'block'}} >
          <h5 style={{margin:0}}>Name</h5>
          <div style={{ margin: 0, fontSize:12 }}>{player.race.name} {player.class}</div>
        </div>
      </div>
      {player.professions.map((prof) => {
        var dis = false;
        if (player.activeProf === prof) {
          dis = true;
        }
        return getProfIcon(prof, dis, toggle, player.id);
      })}
      {getProfIcon("fishing",fishDis, toggle, player.id)}
      {getProfIcon("woodcutting",woodDis, toggle, player.id)}
      {getProfIcon("cooking",cookDis, toggle, player.id)}
      {getProfIcon("firstaid",firstAidDis, toggle, player.id)}
    </Card>
  );
}
