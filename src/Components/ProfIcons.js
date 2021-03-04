import React from 'react'
import {SquarePrimaryButton} from './ActionColorButtons'
import {Tooltip} from '@material-ui/core'

export const MiningIcon =({disabled,toggle})=>{return <Tooltip title="Toggle Mining"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-mountain"></i></SquarePrimaryButton></Tooltip>}
export const HerbalisimIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Herbalism"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fab fa-pagelines"></i></SquarePrimaryButton></Tooltip>}
export const SkinningIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Skinning"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-horse-head"></i></SquarePrimaryButton></Tooltip>}
export const FishingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Fishing"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-fish"></i></SquarePrimaryButton></Tooltip>}
export const CookingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Cooking"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-fire-alt"></i></SquarePrimaryButton></Tooltip>}
export const WoodCuttingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Wood Cutting"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-tree"></i></SquarePrimaryButton></Tooltip>}
export const AlchemyIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Alchemy"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-vials"></i></SquarePrimaryButton></Tooltip>}
export const ArmorSmithingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Armor Smithing"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-hammer"></i></SquarePrimaryButton></Tooltip>}
export const MailCraftingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Mail Crafting"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-link"></i></SquarePrimaryButton></Tooltip>}
export const LeatherWorkingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Leatherworking"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-feather-alt"></i></SquarePrimaryButton></Tooltip>}
export const TailoringIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Tailoring"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-tshirt"></i></SquarePrimaryButton></Tooltip>}
export const FirstAidIcon=({disabled,toggle})=>{return <Tooltip title="Toggle First Aid"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-band-aid"></i></SquarePrimaryButton></Tooltip>}
export const EngineeringIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Engineering"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-tools"></i></SquarePrimaryButton></Tooltip>}
export const WeaponSmithingIcon=({disabled,toggle})=>{return <Tooltip title="Toggle Weapon Smithing"><SquarePrimaryButton disabled={disabled} onClick={toggle}><i className="fas fa-shield-alt"></i></SquarePrimaryButton></Tooltip>}

export const getProfIcon=(prof,disabled,toggle)=>{
  switch(prof){
    case "herbalism":{
      return <HerbalisimIcon disabled={disabled} toggle={toggle}/>
    }
    case "mining":{
      return <MiningIcon disabled={disabled} toggle={toggle}/>
    }
    case "skinning":{
      return <SkinningIcon disabled={disabled} toggle={toggle}/>
    }
    case "fishing":{
      return <FishingIcon disabled={disabled} toggle={toggle}/>
    }
    case "cooking":{
      return <CookingIcon disabled={disabled} toggle={toggle}/>
    }
    case "woodcutting":{
      return <WoodCuttingIcon disabled={disabled} toggle={toggle}/>
    }
    case "alchemy":{
      return <AlchemyIcon disabled={disabled} toggle={toggle}/>
    }
    case "armorsmithing":{
      return <ArmorSmithingIcon disabled={disabled} toggle={toggle}/>
    }
    case "mailcrafting":{
      return <MailCraftingIcon disabled={disabled} toggle={toggle}/>
    }
    case "leatherworking":{
      return <LeatherWorkingIcon disabled={disabled} toggle={toggle}/>
    }
    case "tailoring":{
      return <TailoringIcon disabled={disabled} toggle={toggle}/>
    }
    case "firstaid":{
      return <FirstAidIcon disabled={disabled} toggle={toggle}/>
    }
    case "engineering":{
      return <EngineeringIcon disabled={disabled} toggle={toggle}/>
    }
    case "weaponsmithing":{
      return <WeaponSmithingIcon disabled={disabled} toggle={toggle}/>
    }
    default:{return null}
  }
}