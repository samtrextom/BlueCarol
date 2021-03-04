import './App.css';
import { SuccessButton } from './Components/ActionColorButtons';
import {races} from './data/races'
import {profs} from './data/profs'
import {useState, useEffect} from 'react'
import {List, ListItem, Button, Card} from '@material-ui/core'
import ResourceBar from './Components/ResourceBar';
import {getProfIcon, MiningIcon} from './Components/ProfIcons'

function App() {

  const [guild, setGuild] = useState([{
    id:0,
    name:"Guy",
    race:"Human",
    class:"Warrior",
    professions:["herbalism","alchemy","firstaid","cooking","fishing","woodcutting"],
    activeProf:null
  }])

  /**Raw Materials */
  const [herbs, setHerbs] = useState(0)
  const [herbsMax, setHerbsMax] = useState(100)     //MAX
  const [ore, setOre] = useState(0)
  const [oreMax, setOreMax] = useState(100)         //MAX
  const [leather, setLeather] = useState(0)
  const [leatherMax, setLeatherMax] = useState(100) //MAX
  const [fish, setFish] = useState(0)
  const [fishMax, setFishMax] = useState(100)       //MAX
  const [cloth, setCloth] = useState(0)
  const [clothMax, setClothMax] = useState(100)     //MAX
  const [wood, setWood] = useState(0)
  const [woodMax, setWoodMax] = useState(100)       //MAX

  /**Produced Materials */
  const [bakedFish, setBakedFish] = useState(0)
  const [bakedFishReq, setBakedFishReq] = useState(false)
  const [house, setHouse] = useState(0)
  const [houseReq, setHouseReq] = useState(false)
  const [houseWood, setHouseWood] = useState(100)
  const [barn, setBarn] = useState(0)
  const [barnReq, setBarnReq] = useState(false)
  const [barnWood, setBarnWood] = useState(100)
  const [potions, setPotions] = useState(0)
  const [potionsReq, setPotionsReq] = useState(false)
  const [plateArmor, setPlateArmor] = useState(0)
  const [plateReq, setPlateReq] = useState(false)
  const [mailArmor, setMailArmor] = useState(0)
  const [mailReq, setMailReq] = useState(false)
  const [sword, setSword] = useState(0)
  const [swordReq, setSwordReq] = useState(false)
  const [bomb, setBomb] = useState(0)
  const [bombReq, setBombReq] = useState(false)
  const [clothArmor, setClothArmor] = useState(0)
  const [clothReq, setClothReq] = useState(false)
  const [bandage, setBandge] = useState(0)
  const [bandageReq, setBandageReq] = useState(false)
  const [leatherArmor, setLeatherArmor] = useState(0)
  const [leatherReq, setLeatherReq] = useState(false)

  const handleHerb    =()=>{if(herbs+1>=100){setHerbs(100)}else{setHerbs(herbs+1)}}
  const handleOre     =()=>{if(ore+1>=100){setOre(100)}else{setOre(ore+1)}}
  const handleLeather =()=>{if(leather+1>=100){setLeather(100)}else{setLeather(leather+1)}}
  const handleFish    =()=>{if(fish+1>=100){setFish(100)}else{setFish(fish+1)}}
  const handleWood    =()=>{if(wood+1>=100){setWood(100)}else{setWood(wood+1)}}
  const handleCloth   =()=>{if(cloth+1>=100){setCloth(100)}else{setCloth(cloth+1)}}

  const handleBakedFish   =()=>{setBakedFish(bakedFish+1);setFish(fish-1);setWood(wood-.001);}
  const handleHouse       =()=>{setHouse(house+1);setWood(wood-houseWood);setHouseWood(houseWood*1.05);}
  const handleBarn        =()=>{setBarn(barn+1);setWood(wood-barnWood);setBarnWood(barnWood*1.05);}
  const handlePotions     =()=>{setPotions(potions+1);setHerbs(herbs-10);}
  const handlePlateArmor  =()=>{setPlateArmor(plateArmor+1);setOre(ore-10);setWood(wood-.001);}
  const handleMailArmor   =()=>{setMailArmor(mailArmor+1);setOre(ore-5);setWood(wood-.001);setLeather(leather-5);}
  const handleLeatherArmor=()=>{setLeatherArmor(leatherArmor+1);setLeather(leather-10);}
  const handleClothArmor  =()=>{setClothArmor(clothArmor+1);setCloth(cloth-10);}
  const handleBomb        =()=>{setBomb(bomb+1);setCloth(cloth-2);setOre(ore-8);}
  const handleBandage     =()=>{setBandge(bandage+1);setCloth(cloth-2);}
  const handleSword       =()=>{setSword(sword+1);setOre(ore-10);setWood(wood-.001);}

  const toggleActiveProf=(e)=>{
    console.log(e.target)
  }

  const checkGameState=()=>{
    checkBakedFishReq();checkHouseReq();checkBarnReq();checkPotionsReq();checkPlateReq();checkMailReq();checkLeatherReq();checkClothReq();checkSwordReq();checkBandageReq();checkBombReq();
    autoHerb();autoMine();autoSkin();autoFish();autoWood();autoCook();autoAlch();autoArmor();autoMail();autoLW();autoTailor();autoFirstAid();autoEngi();autoSword();
  }

  const checkBakedFishReq=()=>{if(fish>=1&&wood>=.001){setBakedFishReq(true)}else{setBakedFishReq(false)}}   //checking baked fish status
  const checkHouseReq    =()=>{if(wood>houseWood){setHouseReq(true)}else{setHouseReq(false)}}                //checking house status
  const checkBarnReq     =()=>{if(wood>barnWood){setBarnReq(true)}else{setBarnReq(false)}}                   //checking barn status
  const checkPotionsReq  =()=>{if(herbs>=10){setPotionsReq(true)}else{setPotionsReq(false)}}                 //checking potions status
  const checkPlateReq    =()=>{if(ore>=10&&wood>=.001){setPlateReq(true)}else{setPlateReq(false)}}           //checking plate armor status
  const checkMailReq     =()=>{if(ore>=5&&leather>=5&&wood>=.001){setMailReq(true)}else{setMailReq(false)}}  //checking mail armor status
  const checkLeatherReq  =()=>{if(leather>=10){setLeatherReq(true)}else{setLeatherReq(false)}}               //checking leather armor status
  const checkClothReq    =()=>{if(cloth>=10){setClothReq(true)}else{setClothReq(false)}}                     //checking cloth armor status
  const checkBandageReq  =()=>{if(cloth>=2){setBandageReq(true)}else{setBandageReq(false)}}                  //checking bandage status
  const checkBombReq     =()=>{if(ore>=8&&cloth>=2){setBombReq(true)}else{setBombReq(false)}}                //checking bomb status
  const checkSwordReq    =()=>{if(ore>=10&&wood>=.001){setSwordReq(true)}else{setSwordReq(false)}}           //checking sword status
  
  const autoHerb    =()=>{guild.map((player)=>{if(player.activeProf==="herbalism"){setHerbs(herbs+1)}return null})}
  const autoMine    =()=>{guild.map((player)=>{if(player.activeProf==="mining"){setOre(ore+1)}return null})}
  const autoSkin    =()=>{guild.map((player)=>{if(player.activeProf==="skinning"){setLeather(leather+1)}return null})}
  const autoFish    =()=>{guild.map((player)=>{if(player.activeProf==="fishing"){setFish(fish+1)}return null})}
  const autoWood    =()=>{guild.map((player)=>{if(player.activeProf==="woodcutting"){setWood(wood+1)}return null})}
  const autoCook    =()=>{guild.map((player)=>{if(player.activeProf==="cooking"){if(bakedFishReq){setBakedFish(bakedFish+1)}}return null})}
  const autoAlch    =()=>{guild.map((player)=>{if(player.activeProf==="alchemy"){if(potionsReq){setPotions(potions+1)}}return null})}
  const autoArmor   =()=>{guild.map((player)=>{if(player.activeProf==="armorsmithing"){if(plateReq){setPlateArmor(plateArmor+1)}}return null})}
  const autoMail    =()=>{guild.map((player)=>{if(player.activeProf==="mailcrafting"){if(mailReq){setMailArmor(mailArmor+1)}}return null})}
  const autoLW      =()=>{guild.map((player)=>{if(player.activeProf==="leatherworking"){if(leatherReq){setLeatherArmor(leatherArmor+1)}}return null})}
  const autoTailor  =()=>{guild.map((player)=>{if(player.activeProf==="tailoring"){if(clothReq){setClothArmor(clothArmor+1)}}return null})}
  const autoFirstAid=()=>{guild.map((player)=>{if(player.activeProf==="firstaid"){if(bandageReq){setBandge(bandage+1)}}return null})}
  const autoEngi    =()=>{guild.map((player)=>{if(player.activeProf==="engineering"){if(bombReq){setBomb(bomb+1)}}return null})}
  const autoSword   =()=>{guild.map((player)=>{if(player.activeProf==="swordsmithing"){if(swordReq){setSword(sword+1)}}return null})}

  useEffect(()=>{
    setTimeout(()=>{
        checkGameState()
    },100)
})

  return (
    <div style={{display:'grid', gridTemplateColumns:'9% 9% 9% 9% 9% 9% 9% 9% 9% 9%', gridTemplateRows:'10% 10% 10% 10% 10% 10% 10% 10% 10% 10%', gap:'.5% .5%'}}>
      <div style={{gridColumnStart:1, gridColumnEnd:3, gridRowStart:1, gridRowEnd:12}}>
        <List dense>
            <ListItem><ResourceBar name='Herbs'         total={herbs} max={herbsMax}/><Button size="small" variant="contained" color="primary" onClick={handleHerb}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Ore'           total={ore} max={oreMax}/><Button size="small" variant="contained" color="primary" onClick={handleOre}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Leather'       total={leather} max={leatherMax}/><Button size="small" variant="contained" color="primary" onClick={handleLeather}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Fish'          total={fish} max={fishMax}/><Button size="small" variant="contained" color="primary" onClick={handleFish}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Wood'          total={wood} max={woodMax}/><Button size="small" variant="contained" color="primary" onClick={handleWood}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Cloth'         total={cloth} max={clothMax}/><Button size="small" variant="contained" color="primary" onClick={handleCloth}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Baked Fish'    total={bakedFish}/><Button size="small" variant="contained" color="primary" disabled={!bakedFishReq} onClick={handleBakedFish}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Houses'        total={house}/><Button size="small" variant="contained" color="primary" disabled={!houseReq} onClick={handleHouse}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Barns'         total={barn}/><Button size="small" variant="contained" color="primary" disabled={!barnReq} onClick={handleBarn}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Potions'       total={potions}/><Button size="small" variant="contained" color="primary" disabled={!potionsReq} onClick={handlePotions}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Plate Armor'   total={plateArmor}/><Button size="small" variant="contained" color="primary" disabled={!plateReq} onClick={handlePlateArmor}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='MailArmor'     total={mailArmor}/><Button size="small" variant="contained" color="primary" disabled={!mailReq} onClick={handleMailArmor}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Leather Armor' total={leatherArmor}/><Button size="small" variant="contained" color="primary" disabled={!leatherReq} onClick={handleLeatherArmor}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Cloth Armor'   total={clothArmor}/><Button size="small" variant="contained" color="primary" disabled={!clothReq} onClick={handleClothArmor}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Swords'        total={sword}/><Button size="small" variant="contained" color="primary" disabled={!swordReq} onClick={handleSword}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Bombs'         total={bomb}/><Button size="small" variant="contained" color="primary" disabled={!bombReq} onClick={handleBomb}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Bandage'       total={bandage}/><Button size="small" variant="contained" color="primary" disabled={!bandageReq} onClick={handleBandage}>Craft</Button></ListItem>
          </List>
      </div>
      <div>
      </div>
      <div style={{gridColumnStart:3, gridColumnEnd:11, gridRowStart:3, gridRowEnd:12, display:'grid', gridTemplateColumns:'20% 20% 20% 20% 20%', gridGap:'.5%'}}>
        <Card style={{width:'100%', height:70, margin:5}}>
          <h5 style={{margin:0}}>Human Warrior</h5>
          {guild[0].professions.map((prof)=>{
            var disabled = false
            if(guild[0].activeProf===prof){
              disabled = true
            }
            return getProfIcon(prof,disabled,toggleActiveProf)
          })}
        </Card>
      </div>
    </div>
  );
}

export default App;
