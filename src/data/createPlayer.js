import {races} from './races'
import {profs} from './profs'
import {classes} from './classes'
import {Human, Elf, Gnome, Dwarf, Orc, Tauren, Troll} from './names'

export const createPlayer=(id)=>{
  var race = races[Math.floor(Math.random() * races.length)]
  var name
  switch(race.name){
    case 'Human':{name  = Human[Math.floor(Math.random() * Human.length)];break;}
    case 'Elf':{name  = Elf[Math.floor(Math.random() * Elf.length)];break;}
    case 'Gnome':{name  = Gnome[Math.floor(Math.random() * Gnome.length)];break;}
    case 'Dwarf':{name  = Dwarf[Math.floor(Math.random() * Dwarf.length)];break;}
    case 'Orc':{name  = Orc[Math.floor(Math.random() * Orc.length)];break;}
    case 'Troll':{name  = Troll[Math.floor(Math.random() * Troll.length)];break;}
    case 'Tauren':{name  = Tauren[Math.floor(Math.random() * Tauren.length)];break;}
    case 'Undead':{name  = Human[Math.floor(Math.random() * Human.length)];break;}
    default :name = 'Name Error';break;
  }
  var prof1 = profs[Math.floor(Math.random() * 3)]

  var prof2 

  do{
    prof2  = profs[Math.floor(Math.random() * profs.length)]
  }while(prof2===prof1)

  var class1 = classes[Math.floor(Math.random() * classes.length)]
  return {race:race,professions:[{name:prof1,skill:0},{name:prof2,skill:0}],class:class1,id:id,name:name}
}