import React from 'react'
/**Material UI imports */
import {withStyles} from '@material-ui/core/styles' //DOCS: https://material-ui.com/styles/api/
import Button from '@material-ui/core/Button'       //DOCS: https://material-ui.com/components/buttons/
import {Tooltip} from '@material-ui/core'
import { LightenDarkenColor } from 'lighten-darken-color'; 

const MiningButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#669999",'&:hover':{backgroundColor: LightenDarkenColor("#669999")}}}))(Button);
const HerbalismButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#008000",'&:hover':{backgroundColor: LightenDarkenColor("#008000")}}}))(Button);
const SkinningButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#b07d1c",'&:hover':{backgroundColor: LightenDarkenColor("#b07d1c")}}}))(Button);
const FishingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#1a99ff",'&:hover':{backgroundColor: LightenDarkenColor("#1a99ff")}}}))(Button);
const CookingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#ff801a",'&:hover':{backgroundColor: LightenDarkenColor("#ff801a")}}}))(Button);
const WoodCuttingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#804c00",'&:hover':{backgroundColor: LightenDarkenColor("#804c00")}}}))(Button);
const AlchemyButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#4cff1a",'&:hover':{backgroundColor: LightenDarkenColor("#4cff1a")}}}))(Button);
const ArmorSmithingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#333380",'&:hover':{backgroundColor: LightenDarkenColor("#333380")}}}))(Button);
const MailCraftingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#668099",'&:hover':{backgroundColor: LightenDarkenColor("#668099")}}}))(Button);
const LeatherWorkingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#cc804c",'&:hover':{backgroundColor: LightenDarkenColor("#cc804c")}}}))(Button);
const TailoringButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#e64ce6",'&:hover':{backgroundColor: LightenDarkenColor("#e64ce6")}}}))(Button);
const FirstAidButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#b21a1a",'&:hover':{backgroundColor: LightenDarkenColor("#b21a1a")}}}))(Button);
const EngineeringButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#e6cc00",'&:hover':{backgroundColor: LightenDarkenColor("#e6cc00")}}}))(Button);
const WeaponSmithingButton = withStyles(() => ({root: {maxWidth:30,minWidth:30,maxHeight:30,minHeight:30,margin:.5,color: "#fff",backgroundColor: "#336680",'&:hover':{backgroundColor: LightenDarkenColor("#336680")}}}))(Button);

export const MiningIcon =({dis,toggle, id})=>{return <Tooltip title="Toggle Mining"><MiningButton disabled={dis} onClick={()=>{toggle('mining',id)}}><i className="fas fa-mountain"></i></MiningButton></Tooltip>}
export const HerbalisimIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Herbalism"><HerbalismButton disabled={dis} onClick={()=>{toggle('herbalism',id)}}><i className="fab fa-pagelines"></i></HerbalismButton></Tooltip>}
export const SkinningIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Skinning"><SkinningButton disabled={dis} onClick={()=>{toggle('skinning',id)}}><i className="fas fa-horse-head"></i></SkinningButton></Tooltip>}
export const FishingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Fishing"><FishingButton disabled={dis} onClick={()=>{toggle('fishing',id)}}><i className="fas fa-fish"></i></FishingButton></Tooltip>}
export const CookingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Cooking"><CookingButton disabled={dis} onClick={()=>{toggle('cooking',id)}}><i className="fas fa-fire-alt"></i></CookingButton></Tooltip>}
export const WoodCuttingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Wood Cutting"><WoodCuttingButton disabled={dis} onClick={()=>{toggle('woodcutting',id)}}><i className="fas fa-tree"></i></WoodCuttingButton></Tooltip>}
export const AlchemyIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Alchemy"><AlchemyButton disabled={dis} onClick={()=>{toggle('alchemy',id)}}><i className="fas fa-vials"></i></AlchemyButton></Tooltip>}
export const ArmorSmithingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Armor Smithing"><ArmorSmithingButton disabled={dis} onClick={()=>{toggle('armorsmithing',id)}}><i className="fas fa-hammer"></i></ArmorSmithingButton></Tooltip>}
export const MailCraftingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Mail Crafting"><MailCraftingButton disabled={dis} onClick={()=>{toggle('mailcrafting',id)}}><i className="fas fa-link"></i></MailCraftingButton></Tooltip>}
export const LeatherWorkingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Leatherworking"><LeatherWorkingButton disabled={dis} onClick={()=>{toggle('leatherworking',id)}}><i className="fas fa-feather-alt"></i></LeatherWorkingButton></Tooltip>}
export const TailoringIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Tailoring"><TailoringButton disabled={dis} onClick={()=>{toggle('tailoring',id)}}><i className="fas fa-tshirt"></i></TailoringButton></Tooltip>}
export const FirstAidIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle First Aid"><FirstAidButton disabled={dis} onClick={()=>{toggle('firstaid',id)}}><i className="fas fa-band-aid"></i></FirstAidButton></Tooltip>}
export const EngineeringIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Engineering"><EngineeringButton disabled={dis} onClick={()=>{toggle('engineering',id)}}><i className="fas fa-tools"></i></EngineeringButton></Tooltip>}
export const WeaponSmithingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Weapon Smithing"><WeaponSmithingButton disabled={dis} onClick={()=>{toggle('weaponsmithing',id)}}><i className="fas fa-shield-alt"></i></WeaponSmithingButton></Tooltip>}

export const getProfIcon=(prof,dis,toggle, id)=>{
  switch(prof){
    case "herbalism":{
      return <HerbalisimIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "mining":{
      return <MiningIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "skinning":{
      return <SkinningIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "fishing":{
      return <FishingIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "cooking":{
      return <CookingIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "woodcutting":{
      return <WoodCuttingIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "alchemy":{
      return <AlchemyIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "armorsmithing":{
      return <ArmorSmithingIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "mailcrafting":{
      return <MailCraftingIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "leatherworking":{
      return <LeatherWorkingIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "tailoring":{
      return <TailoringIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "firstaid":{
      return <FirstAidIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "engineering":{
      return <EngineeringIcon dis={dis} toggle={toggle} id={id}/>
    }
    case "weaponsmithing":{
      return <WeaponSmithingIcon dis={dis} toggle={toggle} id={id}/>
    }
    default:{return null}
  }
}