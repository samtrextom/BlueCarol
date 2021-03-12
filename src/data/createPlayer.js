import {races} from './races'
import {profs} from './profs'
import {classes} from './classes'

export const createPlayer=(id)=>{
  var race = races[Math.floor(Math.random() * races.length)]

  var prof1 = profs[Math.floor(Math.random() * 3)]

  var prof2 

  do{
    prof2  = profs[Math.floor(Math.random() * profs.length)]
  }while(prof2===prof1)

  var class1 = classes[Math.floor(Math.random() * classes.length)]
  return {race:race,professions:[prof1,prof2],class:class1,id:id}
}