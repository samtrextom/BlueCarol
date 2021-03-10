import React from 'react'
import {SquarePrimaryButton} from './ActionColorButtons'
import {Tooltip} from '@material-ui/core'

export const MiningIcon =({dis,toggle, id})=>{return <Tooltip title="Toggle Mining"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('mining',id)}}><i className="fas fa-mountain"></i></SquarePrimaryButton></Tooltip>}
export const HerbalisimIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Herbalism"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('herbalism',id)}}><i className="fab fa-pagelines"></i></SquarePrimaryButton></Tooltip>}
export const SkinningIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Skinning"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('skinning',id)}}><i className="fas fa-horse-head"></i></SquarePrimaryButton></Tooltip>}
export const FishingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Fishing"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('fishing',id)}}><i className="fas fa-fish"></i></SquarePrimaryButton></Tooltip>}
export const CookingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Cooking"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('cooking',id)}}><i className="fas fa-fire-alt"></i></SquarePrimaryButton></Tooltip>}
export const WoodCuttingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Wood Cutting"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('woodcutting',id)}}><i className="fas fa-tree"></i></SquarePrimaryButton></Tooltip>}
export const AlchemyIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Alchemy"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('alchemy',id)}}><i className="fas fa-vials"></i></SquarePrimaryButton></Tooltip>}
export const ArmorSmithingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Armor Smithing"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('armorsmithing',id)}}><i className="fas fa-hammer"></i></SquarePrimaryButton></Tooltip>}
export const MailCraftingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Mail Crafting"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('mailcrafting',id)}}><i className="fas fa-link"></i></SquarePrimaryButton></Tooltip>}
export const LeatherWorkingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Leatherworking"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('leatherworking',id)}}><i className="fas fa-feather-alt"></i></SquarePrimaryButton></Tooltip>}
export const TailoringIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Tailoring"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('tailoring',id)}}><i className="fas fa-tshirt"></i></SquarePrimaryButton></Tooltip>}
export const FirstAidIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle First Aid"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('firstaid',id)}}><i className="fas fa-band-aid"></i></SquarePrimaryButton></Tooltip>}
export const EngineeringIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Engineering"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('engineering',id)}}><i className="fas fa-tools"></i></SquarePrimaryButton></Tooltip>}
export const WeaponSmithingIcon=({dis,toggle, id})=>{return <Tooltip title="Toggle Weapon Smithing"><SquarePrimaryButton disabled={dis} onClick={()=>{toggle('weaponsmithing',id)}}><i className="fas fa-shield-alt"></i></SquarePrimaryButton></Tooltip>}

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