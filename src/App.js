import './App.css'
import {useState, useEffect} from 'react'
import {List, ListItem, Button} from '@material-ui/core'
import ResourceBar from './Components/ResourceBar'
import { createPlayer } from './data/createPlayer'
import PlayerCard from './Components/PlayerCard'
import {SuccessButton, ErrorButton} from './Components/ActionColorButtons'

function App() {

  const [guild, setGuild] = useState([{
    id:0,
    name:"Guy",
    race:{
      id:0,
      name:'Human',
      description:'',
      upkeep:0,
      adventure:0,
      mining:0,
      herbalism:0,
      skinning:0,
      tailoring:0,
      blacksmithing:0,
      jewelcrafting:0,
      leatherworking:0,
      engineering:0,
      alchemy:0
  },
    class:"Warrior",
    professions:["herbalism","alchemy"],
    activeProf:null
  }])

  const [guildCap, setGuildCap] = useState(1)
  const [recruitReq, setRecruitReq] = useState(false)
  const [foodUpkeep, setFoodUpKeep] = useState(1)

  const [lostGame, setLostGame] = useState(false)
  const [paused, setPaused] = useState(true)

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
  const [bakedFish, setBakedFish] = useState(100)
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

  const handleHerb    =()=>{if(herbs>=herbsMax){setHerbs(herbsMax)}else{setHerbs(herbs+1)}}
  const handleOre     =()=>{if(ore>=oreMax){setOre(oreMax)}else{setOre(ore+1)}}
  const handleLeather =()=>{if(leather>=leatherMax){setLeather(leatherMax)}else{setLeather(leather+1)}}
  const handleFish    =()=>{if(fish>=fishMax){setFish(fishMax)}else{setFish(fish+1)}}
  const handleWood    =()=>{if(wood>=woodMax){setWood(woodMax)}else{setWood(wood+1)}}
  const handleCloth   =()=>{if(cloth>=clothMax){setCloth(clothMax)}else{setCloth(cloth+1)}}

  const handleBakedFish   =()=>{setBakedFish(bakedFish+1);setFish(fish-1);setWood(wood-.5);}
  const handleHouse       =()=>{setHouse(house+1);setWood(wood-houseWood);setHouseWood(houseWood*1.50);setGuildCap(guildCap+1);}
  const handleBarn        =()=>{setBarn(barn+1);setWood(wood-barnWood);setBarnWood(barnWood*1.50);setHerbsMax(herbsMax+50);setOreMax(oreMax+50);setLeatherMax(leatherMax+50);setWoodMax(woodMax+50);setClothMax(clothMax+50);setFishMax(fishMax+50);}
  const handlePotions     =()=>{setPotions(potions+1);setHerbs(herbs-10);}
  const handlePlateArmor  =()=>{setPlateArmor(plateArmor+1);setOre(ore-10);setWood(wood-.5);}
  const handleMailArmor   =()=>{setMailArmor(mailArmor+1);setOre(ore-5);setWood(wood-.5);setLeather(leather-5);}
  const handleLeatherArmor=()=>{setLeatherArmor(leatherArmor+1);setLeather(leather-10);}
  const handleClothArmor  =()=>{setClothArmor(clothArmor+1);setCloth(cloth-10);}
  const handleBomb        =()=>{setBomb(bomb+1);setCloth(cloth-2);setOre(ore-8);}
  const handleBandage     =()=>{setBandge(bandage+1);setCloth(cloth-2);}
  const handleSword       =()=>{setSword(sword+1);setOre(ore-10);setWood(wood-.5);}

  const toggleActiveProf=(input,id)=>{
    var tempPlayer = {...guild.find(p=>p.id===id),activeProf:input}
    var index = guild.findIndex(p=>p.id===id)
    guild.splice(index,1,tempPlayer)
    setGuild([...guild])
    guild.forEach((p)=>{console.log(p.activeProf)})
  }

  const checkGameState= async ()=>{
    console.log(new Date())
    if(!lostGame && !paused){
      await checkBakedFishReq(); 
      await checkHouseReq(); 
      await checkBarnReq(); 
      await checkPotionsReq(); 
      await checkPlateReq(); 
      await checkMailReq(); 
      await checkLeatherReq(); 
      await checkClothReq(); 
      await checkSwordReq(); 
      await checkBandageReq();
      await checkBombReq();
      await checkRecruitReq();
      autoHerb();autoMine();autoSkin();autoFish();autoWood();autoCook();autoAlch();autoArmor();autoMail();autoLW();autoTailor();autoFirstAid();autoEngi();autoSword();
      upKeep()
    }
  }

  const checkBakedFishReq=()=>{if(fish>=1&&wood>=.5){setBakedFishReq(true)}else{setBakedFishReq(false)}}    //checking baked fish status
  const checkHouseReq    =()=>{if(wood>=houseWood){setHouseReq(true)}else{setHouseReq(false)}}              //checking house status
  const checkBarnReq     =()=>{if(wood>=barnWood){setBarnReq(true)}else{setBarnReq(false)}}                 //checking barn status
  const checkPotionsReq  =()=>{if(herbs>=10){setPotionsReq(true)}else{setPotionsReq(false)}}                //checking potions status
  const checkPlateReq    =()=>{if(ore>=10&&wood>=.5){setPlateReq(true)}else{setPlateReq(false)}}            //checking plate armor status
  const checkMailReq     =()=>{if(ore>=5&&leather>=5&&wood>=.5){setMailReq(true)}else{setMailReq(false)}}   //checking mail armor status
  const checkLeatherReq  =()=>{if(leather>=10){setLeatherReq(true)}else{setLeatherReq(false)}}              //checking leather armor status
  const checkClothReq    =()=>{if(cloth>=10){setClothReq(true)}else{setClothReq(false)}}                    //checking cloth armor status
  const checkBandageReq  =()=>{if(cloth>=2){setBandageReq(true)}else{setBandageReq(false)}}                 //checking bandage status
  const checkBombReq     =()=>{if(ore>=8&&cloth>=2){setBombReq(true)}else{setBombReq(false)}}               //checking bomb status
  const checkSwordReq    =()=>{if(ore>=10&&wood>=.5){setSwordReq(true)}else{setSwordReq(false)}}            //checking sword status
  const checkRecruitReq  =()=>{if(guildCap>guild.length){setRecruitReq(true)}else{setRecruitReq(false)}}
  
  const autoHerb    =()=>{guild.map((player)=>{if(player.activeProf==="herbalism"){handleHerb()}return null})}
  const autoMine    =()=>{guild.map((player)=>{if(player.activeProf==="mining"){handleOre()}return null})}
  const autoSkin    =()=>{guild.map((player)=>{if(player.activeProf==="skinning"){handleLeather()}return null})}
  const autoFish    =()=>{guild.map((player)=>{if(player.activeProf==="fishing"){handleFish()}return null})}
  const autoWood    =()=>{guild.map((player)=>{if(player.activeProf==="woodcutting"){handleWood()}return null})}
  const autoCook    =()=>{guild.map((player)=>{if(player.activeProf==="cooking"){if(bakedFishReq){handleBakedFish()}}return null})}
  const autoAlch    =()=>{guild.map((player)=>{if(player.activeProf==="alchemy"){if(potionsReq){handlePotions()}}return null})}
  const autoArmor   =()=>{guild.map((player)=>{if(player.activeProf==="armorsmithing"){if(plateReq){handlePlateArmor()}}return null})}
  const autoMail    =()=>{guild.map((player)=>{if(player.activeProf==="mailcrafting"){if(mailReq){handleMailArmor()}}return null})}
  const autoLW      =()=>{guild.map((player)=>{if(player.activeProf==="leatherworking"){if(leatherReq){handleLeatherArmor()}}return null})}
  const autoTailor  =()=>{guild.map((player)=>{if(player.activeProf==="tailoring"){if(clothReq){handleClothArmor()}}return null})}
  const autoFirstAid=()=>{guild.map((player)=>{if(player.activeProf==="firstaid"){if(bandageReq){handleBandage()}}return null})}
  const autoEngi    =()=>{guild.map((player)=>{if(player.activeProf==="engineering"){if(bombReq){handleBomb()}}return null})}
  const autoSword   =()=>{guild.map((player)=>{if(player.activeProf==="swordsmithing"){if(swordReq){handleSword()}}return null})}

  const upKeep =()=>{

    if(foodUpkeep/20 > bakedFish){
      do{
        setFoodUpKeep(foodUpkeep-guild[guild.length-1].race.upkeep)
        guild.pop()
        if(guild.length===0){
          setLostGame(true)
        }
      }while(foodUpkeep/2 > bakedFish)
    }

    setBakedFish((bakedFish-(foodUpkeep/20)))

  }

  const togglePause = () =>{
    setPaused(!paused)
  }

  const recruit=()=>{
    var newPlayer = createPlayer(guild.length)
    setGuild([...guild,newPlayer])
    setFoodUpKeep(foodUpkeep+newPlayer.race.upkeep+1)
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
        checkGameState()
    },100)

    return () => clearTimeout(timer);
})

  return ( !lostGame ?
    <div style={{display:'grid', gridTemplateColumns:'9% 9% 9% 9% 9% 9% 9% 9% 9% 9%', gridTemplateRows:'10% 10% 10% 10% 10% 10% 10% 10% 10% 10%', gap:'.5% .5%'}}>
      <div style={{gridColumnStart:1, gridColumnEnd:3, gridRowStart:1, gridRowEnd:12}}>
        <List dense>
            <ListItem><ResourceBar name='Herbs'         total={herbs} max={herbsMax}/><Button size="small" variant="contained" color="primary" onClick={handleHerb}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Ore'           total={ore} max={oreMax}/><Button size="small" variant="contained" color="primary" onClick={handleOre}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Leather'       total={leather} max={leatherMax}/><Button size="small" variant="contained" color="primary" onClick={handleLeather}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Fish'          total={fish} max={fishMax}/><Button size="small" variant="contained" color="primary" onClick={handleFish}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Wood'          total={wood} max={woodMax}/><Button size="small" variant="contained" color="primary" onClick={handleWood}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Cloth'         total={cloth} max={clothMax}/><Button size="small" variant="contained" color="primary" onClick={handleCloth}>Farm</Button></ListItem>
            <ListItem><ResourceBar name='Baked Fish'    total={String(bakedFish).substring(0,5)}/><Button size="small" variant="contained" color="primary" disabled={!bakedFishReq} onClick={handleBakedFish}>Craft</Button></ListItem>
            <ListItem><ResourceBar name='Houses'        total={house}/><Button size="small" variant="contained" color="primary" disabled={!houseReq} onClick={handleHouse}>Craft</Button>{houseWood}</ListItem>
            <ListItem><ResourceBar name='Barns'         total={barn}/><Button size="small" variant="contained" color="primary" disabled={!barnReq} onClick={handleBarn}>Craft</Button>{barnWood}</ListItem>
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
        {paused ? <SuccessButton onClick={togglePause}>Start Game</SuccessButton> : <ErrorButton onClick={togglePause}>Pause Game</ErrorButton>}
        <div>UpKeep: {foodUpkeep/2}</div>
      </div>
      <div style={{gridColumnStart:3, gridColumnEnd:11, gridRowStart:3, gridRowEnd:12, display:'grid', gridTemplateColumns:'20% 20% 20% 20% 20%', gridGap:'.5%'}}>
        {guild.map((player,i)=>{
          return <PlayerCard key={i} player={player} toggle={toggleActiveProf}/>
        })}
        <Button style={{width:'100%', height:70, margin:5}} onClick={recruit} disabled={!recruitReq} variant="contained">Recruit</Button>
      </div>
    </div> : <div>You Lost!</div>
  );
}

export default App;
