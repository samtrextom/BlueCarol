import './App.css'
import {useState, useEffect} from 'react'
import {List, ListItem, Button} from '@material-ui/core'
import ResourceBar from './Components/ResourceBar'
import { createPlayer } from './data/createPlayer'
import PlayerCard from './Components/PlayerCard'
import {SuccessButton, ErrorButton} from './Components/ActionColorButtons'
import {descriptions} from './data/resourceDescriptions'

function App() {

  const [guild, setGuild] = useState([{
    id:0,
    name:"Guy",
    race:{
      id:0,
      name:'Human',
      description:'',
      upkeep:0,
      mining:0,
      herbalism:0,
      skinning:0,
      tailoring:0,
      armorsmithing:0,
      weaponsmithing:0,
      mailcrafting:0,
      leatherworking:0,
      engineering:0,
      alchemy:0,
      cooking:0,
      firstaid:0,
      woodcutting:0,
      fishing:0
  },
    class:"Warrior",
    professions:[{name:"herbalism",skill:0},{name:"alchemy",skill:0}],
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
  const [fish, setFish] = useState(100)
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

  var counts={
    herbalism:0,
    mining:0,
    fishing:0,
    skinning:0,
    woodcutting:0,
    cloth:0,
    cooking:0,
    house:0,
    barn:0,
    alchemy:0,
    armorsmithing:0,
    mailcrafting:0,
    leatherworking:0,
    tailoring:0,
    engineering:0,
    firstaid:0,
    weaponsmithing:0
  }

  const handleHerb    =()=>{counts.herbalism++}
  const handleOre     =()=>{counts.mining++}
  const handleLeather =()=>{counts.skinning++}
  const handleFish    =()=>{counts.fishing++}
  const handleWood    =()=>{counts.woodcutting++}
  const handleCloth   =()=>{counts.cloth++}

  const handleBakedFish   =()=>{counts.cooking++}
  const handleHouse       =()=>{counts.house++}
  const handleBarn        =()=>{counts.barn++}
  const handlePotions     =()=>{counts.alchemy++}
  const handlePlateArmor  =()=>{counts.armorsmithing++}
  const handleMailArmor   =()=>{counts.mailcrafting++}
  const handleLeatherArmor=()=>{counts.leatherworking++}
  const handleClothArmor  =()=>{counts.tailoring++}
  const handleBomb        =()=>{counts.engineering++}
  const handleBandage     =()=>{counts.firstaid++}
  const handleSword       =()=>{counts.weaponsmithing++}

  const toggleActiveProf=(input,id)=>{
    var tempPlayer = {...guild.find(p=>p.id===id),activeProf:input}
    var index = guild.findIndex(p=>p.id===id)
    guild.splice(index,1,tempPlayer)
    setGuild([...guild])
  }

  const checkGameState= async ()=>{
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

      guild.map((p)=>{
        if(p.activeProf){
          counts[p.activeProf] = 1 + p.race[p.activeProf]
          var luck
          var tempPlayer
          var index
          if(p.activeProf===p.professions[0].name && p.professions[0].skill < 300 ){
              luck = Math.floor(Math.random() * 20)
              if(luck===19){
                p.professions[0].skill++
                tempPlayer = {...p}
                index = guild.findIndex(pl=>pl.id===p.id)
                guild.splice(index,1,tempPlayer)
                setGuild([...guild])
              }
          }
          else if(p.activeProf===p.professions[1].name && p.professions[1].skill < 300){
              luck = Math.floor(Math.random() * 20)
              if(luck===19){
                p.professions[1].skill++
                tempPlayer = {...p}
                index = guild.findIndex(pl=>pl.id===p.id)
                guild.splice(index,1,tempPlayer)
                setGuild([...guild])
              }
          }
        }
      })

      var initCooking = counts.cooking
      for(var c = 0; c < initCooking; c++){
        if(fish + counts.fishing >= 1 && wood + counts.woodcutting >= .1){
          counts.fishing--
          counts.woodcutting = counts.woodcutting-.1
        }else{
          counts.cooking--
        }
      }

      console.log(counts.cooking)

      var initHouse = counts.house
      for(var h = 0; h < initHouse; h++){
        counts.woodcutting=counts.woodcutting-houseWood
        setHouseWood(Math.ceil(houseWood*1.75))
        setGuildCap(guildCap+1)
      }

      var initBarn = counts.barn
      for(var b = 0; b < initBarn; b++){
        counts.woodcutting=counts.woodcutting-barnWood
        setBarnWood(Math.ceil(barnWood*1.50))
        setOreMax(oreMax+50)
        setHerbsMax(herbsMax+50)
        setClothMax(clothMax+50)
        setFishMax(fishMax+50)
        setLeatherMax(leatherMax+50)
        setWoodMax(woodMax+200)
      }

      var initAlchemy = counts.alchemy
      for(var a = 0; a < initAlchemy; a++){
        if(potions + counts.herbalism >= 10){
          counts.herbalism = counts.herbalism - 10
        }else{
          counts.alchemy--
        }
      }

      var initArmor = counts.armorsmithing
      for(var a1 = 0; a1 < initArmor; a1++){
        if(ore + counts.mining >= 10 && wood + counts.woodcutting >= .5){
          counts.mining = counts.mining - 10
          counts.woodcutting = counts.woodcutting - .5
        }else{
          counts.armorsmithing--
        }
      }

      var initMail = counts.mailcrafting
      for(var m = 0; m < initMail; m++){
        if(ore + counts.mining >= 5 && leather + counts.skinning >= 5 && wood + counts.woodcutting >= .5){
          counts.mining = counts.mining - 5
          counts.skinning = counts.skinning - 5
          counts.woodcutting = counts.woodcutting - .5
        }else{
          counts.mailcrafting--
        }
      }

      var initLeather = counts.leatherworking
      for(var lw = 0; lw < initLeather; lw++){
        if(leather + counts.skinning >= 10){
          counts.skinning = counts.skinning - 10
        }else{
          counts.leatherworking--
        }
      }

      var initCloth = counts.tailoring
      for(var t = 0; t < initCloth; t++){
        if(cloth + counts.cloth >= 10){
          counts.cloth = counts.cloth - 10
        }else{
          counts.tailoring--
        }
      }

      var initBand = counts.firstaid
      for(var f = 0; f < initBand; f++){
        if(cloth + counts.cloth >= 2){
          counts.cloth = counts.cloth -2
        }else{
          counts.firstaid--
        }
      }

      var initBomb = counts.engineering
      for(var e = 0; e < initBomb; e++){
        if(ore + counts.mining >= 8 && cloth + counts.cloth >= 2 ){
          counts.mining = counts.mining - 8
          counts.cloth = counts.cloth - 2
        }else{
          counts.engineering--
        }
      }

      var initSword = counts.weaponsmithing
      for(var ws = 0; ws < initSword; ws++){
        if(ore + counts.mining >= 10 && wood + counts.woodcutting >= .5){
          counts.mining = counts.mining - 10
          counts.woodcutting = counts.woodcutting - .5
        }else{
          counts.weaponsmithing--
        }
      }

      if(foodUpkeep/2 > bakedFish*2 + fish){
        do{
          setFoodUpKeep(foodUpkeep-guild[guild.length-1].race.upkeep)
          guild.pop()
          if(guild.length===0){
            setLostGame(true)
          }
        }while(foodUpkeep/2 > bakedFish*2 + fish)
      }
      
      if((counts.cooking + bakedFish)*2 < foodUpkeep/2)
      {
        counts.fishing = counts.fishing - foodUpkeep/2
      }else{
        counts.cooking = counts.cooking - foodUpkeep/4
      }


      if(herbs+counts.herbalism >= herbsMax){
        setHerbs(herbsMax)
      }else{
        setHerbs(herbs+counts.herbalism)
      }

      if(ore+counts.mining >= oreMax){
        setOre(oreMax)
      }else{
        setOre(ore+counts.mining)
      }

      if(leather+counts.skinning >= leatherMax){
        setLeather(leatherMax)
      }else{
        setLeather(leather+counts.skinning)
      }

      if(fish+counts.fishing >= fishMax){
        setFish(fishMax)
      }else{
        setFish(fish+counts.fishing)
      }

      if(wood+counts.woodcutting >= woodMax){
        setWood(woodMax)
      }else{
        setWood(wood+counts.woodcutting)
      }

      if(cloth+counts.cloth >= clothMax){
        setCloth(clothMax)
      }else{
        setCloth(cloth+counts.cloth)
      }
      console.log(counts.cooking)
      setBakedFish(bakedFish+counts.cooking)
      setHouse(house+counts.house)
      setBarn(barn+counts.barn)
      setPotions(potions+counts.alchemy)
      setPlateArmor(plateArmor+counts.armorsmithing)
      setMailArmor(mailArmor+counts.mailcrafting)
      setLeatherArmor(leatherArmor+counts.leatherworking)
      setClothArmor(clothArmor+counts.tailoring)
      setBandge(bandage+counts.firstaid)
      setBomb(bomb+counts.engineering)
      setSword(sword+counts.weaponsmithing)
    }
  }

  const checkBakedFishReq=()=>{if(fish>=1&&wood>=.5){setBakedFishReq(true)}else{setBakedFishReq(false)}}       //checking baked fish status
  const checkHouseReq    =()=>{if(wood>=houseWood && guildCap<40){setHouseReq(true)}else{setHouseReq(false)}}  //checking house status
  const checkBarnReq     =()=>{if(wood>=barnWood){setBarnReq(true)}else{setBarnReq(false)}}                    //checking barn status
  const checkPotionsReq  =()=>{if(herbs>=10){setPotionsReq(true)}else{setPotionsReq(false)}}                   //checking potions status
  const checkPlateReq    =()=>{if(ore>=10&&wood>=.5){setPlateReq(true)}else{setPlateReq(false)}}               //checking plate armor status
  const checkMailReq     =()=>{if(ore>=5&&leather>=5&&wood>=.5){setMailReq(true)}else{setMailReq(false)}}      //checking mail armor status
  const checkLeatherReq  =()=>{if(leather>=10){setLeatherReq(true)}else{setLeatherReq(false)}}                 //checking leather armor status
  const checkClothReq    =()=>{if(cloth>=10){setClothReq(true)}else{setClothReq(false)}}                       //checking cloth armor status
  const checkBandageReq  =()=>{if(cloth>=2){setBandageReq(true)}else{setBandageReq(false)}}                    //checking bandage status
  const checkBombReq     =()=>{if(ore>=8&&cloth>=2){setBombReq(true)}else{setBombReq(false)}}                  //checking bomb status
  const checkSwordReq    =()=>{if(ore>=10&&wood>=.5){setSwordReq(true)}else{setSwordReq(false)}}               //checking sword status
  const checkRecruitReq  =()=>{if(guildCap>guild.length){setRecruitReq(true)}else{setRecruitReq(false)}}

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
    <div style={{display:'grid', gridTemplateColumns:'9% 9% 9% 9% 9% 9% 9% 9% 9% 9%', gridTemplateRows:'10% 10% 10% 10% 10% 10% 10% 10% 10% 10%', gap:'.5% .5%', backgroundColor:"#e3e3e3"}}>
      <div style={{gridColumnStart:1, gridColumnEnd:3, gridRowStart:1, gridRowEnd:12}}>
        <List dense>
            <ListItem><ResourceBar name='Herbs' description={descriptions.herb} total={herbs} max={herbsMax}/><Button size="small" variant="contained" color="primary" onClick={handleHerb}>Farm</Button>{counts.herbalism}</ListItem>
            <ListItem><ResourceBar name='Ore' description={descriptions.ore} total={ore} max={oreMax}/><Button size="small" variant="contained" color="primary" onClick={handleOre}>Farm</Button>{counts.mining}</ListItem>
            <ListItem><ResourceBar name='Leather' description={descriptions.leather} total={leather} max={leatherMax}/><Button size="small" variant="contained" color="primary" onClick={handleLeather}>Farm</Button>{counts.skinning}</ListItem>
            <ListItem><ResourceBar name='Fish' description={descriptions.fish} total={fish} max={fishMax}/><Button size="small" variant="contained" color="primary" onClick={handleFish}>Farm</Button>{counts.fishing}</ListItem>
            <ListItem><ResourceBar name='Wood' description={descriptions.wood} total={String(wood).substring(0,5)} max={woodMax}/><Button size="small" variant="contained" color="primary" onClick={handleWood}>Farm</Button>{counts.woodcutting}</ListItem>
            <ListItem><ResourceBar name='Cloth' description={descriptions.cloth} total={cloth} max={clothMax}/><Button size="small" variant="contained" color="primary" onClick={handleCloth}>Farm</Button>{counts.cloth}</ListItem>
            <ListItem><ResourceBar name='Baked Fish' description={descriptions.bakedFish} total={String(bakedFish).substring(0,5)}/><Button size="small" variant="contained" color="primary" disabled={!bakedFishReq} onClick={handleBakedFish}>Craft</Button>{counts.cooking}</ListItem>
            <ListItem><ResourceBar name='Houses' description={descriptions.house} total={house}/><Button size="small" variant="contained" color="primary" disabled={!houseReq} onClick={handleHouse}>Craft</Button>{houseWood}</ListItem>
            <ListItem><ResourceBar name='Barns' description={descriptions.barn} total={barn}/><Button size="small" variant="contained" color="primary" disabled={!barnReq} onClick={handleBarn}>Craft</Button>{barnWood}</ListItem>
            <ListItem><ResourceBar name='Potions' description={descriptions.potion} total={potions}/><Button size="small" variant="contained" color="primary" disabled={!potionsReq} onClick={handlePotions}>Craft</Button>{counts.alchemy}</ListItem>
            <ListItem><ResourceBar name='Plate Armor' description={descriptions.plateArmor} total={plateArmor}/><Button size="small" variant="contained" color="primary" disabled={!plateReq} onClick={handlePlateArmor}>Craft</Button>{counts.armorsmithing}</ListItem>
            <ListItem><ResourceBar name='MailArmor' description={descriptions.mailArmor} total={mailArmor}/><Button size="small" variant="contained" color="primary" disabled={!mailReq} onClick={handleMailArmor}>Craft</Button>{counts.mailcrafting}</ListItem>
            <ListItem><ResourceBar name='Leather Armor' description={descriptions.leatherArmor} total={leatherArmor}/><Button size="small" variant="contained" color="primary" disabled={!leatherReq} onClick={handleLeatherArmor}>Craft</Button>{counts.leatherworking}</ListItem>
            <ListItem><ResourceBar name='Cloth Armor' description={descriptions.clothArmor} total={clothArmor}/><Button size="small" variant="contained" color="primary" disabled={!clothReq} onClick={handleClothArmor}>Craft</Button>{counts.tailoring}</ListItem>
            <ListItem><ResourceBar name='Swords' description={descriptions.sword} total={sword}/><Button size="small" variant="contained" color="primary" disabled={!swordReq} onClick={handleSword}>Craft</Button>{counts.weaponsmithing}</ListItem>
            <ListItem><ResourceBar name='Bombs' description={descriptions.bomb} total={bomb}/><Button size="small" variant="contained" color="primary" disabled={!bombReq} onClick={handleBomb}>Craft</Button>{counts.engineering}</ListItem>
            <ListItem><ResourceBar name='Bandage' description={descriptions.bandage} total={bandage}/><Button size="small" variant="contained" color="primary" disabled={!bandageReq} onClick={handleBandage}>Craft</Button>{counts.firstaid}</ListItem>
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
