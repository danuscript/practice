/*
  _           _   _   _                     _       _   
 | |         | | | | | |                   (_)     | |  
 | |__   __ _| |_| |_| | ___  ___  ___ _ __ _ _ __ | |_ 
 | '_ \ / _` | __| __| |/ _ \/ __|/ __| '__| | '_ \| __|
 | |_) | (_| | |_| |_| |  __/\__ \ (__| |  | | |_) | |_ 
 |_.__/ \__,_|\__|\__|_|\___||___/\___|_|  |_| .__/ \__|
                                             | |        
                                             |_| 
Cooper Neal, Jen Lee, Mihran Baytaryan & Danny Wallace, 2022.
*/                       

// CHARACTER AND MOVESET: BOSS

function sleeper(character) {
  let counter = 0;

  function slept() {
    if (counter === 0) { // applied by boss
      counter++
      alert(`${character.name} has fallen asleep! They are unable to act.`)
    } else if (counter === 1) { // invoked by end of boss's turn
      counter++
      alert(`${character.name} is still fast asleep.`)
      return targetTurn() // boss turn will start over
    } else if (counter == 2) { // invoked by beginning of boss's turn
      counter++
    } else if (counter > 2) { // invoked by end of boss's turn
      alert(`${character.name} has arisen!`)
      delete character.statuses["currentlySleeping"];
      return mainMenu() // finally character is free to act
    }
  }
  return slept;
}

const bossEnragedEx = function() {
  target.statuses["currentlyEnraged"] = true;
  if (target.statuses["currentlyGuarded"]) {
    target.def = target.defaults.def
    delete target.statuses["currentlyGuarded"]
  }
  if (target.statuses["currentlyJeopardized"]) {
    target.def = target.defaults.def
    delete target.statuses["currentlyJeopardized"]
  }
  target.defaults.def = target.defaults.def * 0.75
  target.def = target.defaults.def;
  target.defaults.atk = target.defaults.atk * 1.25;
  target.atk = target.defaults.atk;
  alert(`${target.name} is ENRAGED! Physical DEF is lowered but ATK is raised...`)
}

const boss = {
  name: "BOSS",
  hp: 200,
  atk: 1.0,
  def: 1.0,
  maxHp: 200,
  mag: 1.0,
  multiplier: 1.0,
  fireDef: 1.10,
  iceDef: 0.90,
  fleeable: false,
  statuses: {},
  stealable: "dragonscale",
  phase: 1,
  phases: 2,
  charged: false,
  phase2prompt: "Aggravated by all of your attacks, BOSS has entered a more aggressive stance!",
  phase2execute: bossEnragedEx,
}

const bossDefaults = {
  hp: 100,
  atk: 1.0,
  def: 1.0,
  maxHp: 100,
  multiplier: 1.0,
  fireDef: 1.10,
  iceDef: 0.90,
}
boss.defaults = bossDefaults;


const bossStrikeEx = function() {
  let baseDmg = target.atk * 15;
  let damage = Math.round(baseDmg / player.def);
  player.hp -= damage;
  if (player.hp < 0) player.hp = 0;
  return targetActionCard(damage, bossStrike);
}

const bossFireballEx = function() {
  if (player.statuses["currentlyPoisoned"]) {
    delete player.statuses["currentlyPoisoned"]
  }
  let baseDmg = target.mag * 20;
  let damage = Math.round(baseDmg / player.fireDef);
  player.hp -= damage;
  if (player.hp < 0) player.hp = 0;
  let res = undefined;
  if (player.fireDef > 1) {
    res = `${player.name} is resistant to fire...`
  } else if (player.fireDef < 1) {
    res = `${player.name} is weak to fire!`
  }
  let screen = ""

  if (res) {
    screen = `${bossFireball.action}

${res}
  
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
${target.name} used DARK FIREBALL against ${player.name} and it did ${damage} damage.`
  }
  else {
    screen = `${bossFireball.action}
  
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
${target.name} used DARK FIREBALL against ${player.name} and it did ${damage} damage.`
  }
  alert(screen);
  if (player.hp === 0) return gameOver();
  player.statuses["currentlyPoisoned"] = poisoner(player)
  player.statuses.currentlyPoisoned();
  return null;
}

const bossDisruptEx = function() {
  if (player.statuses["currentlyGuarded"]) {
    player.def = player.defaults.def;
    alert(`${target.name} uses DISRUPT!
    
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB

${target.name} has broken ${player.name}'s raised guard. ${player.name}'s physical DEF has dropped back to normal.`);
    delete player.statuses["currentlyGuarded"];
    return null;
  } else if (player.statuses["currentlyJeopardized"]) {
    player.def = player.defaults.def;
    delete player.statuses["currentlyJeopardized"]
  }
  alert(`${target.name} uses DISRUPT!`)
  player.statuses["currentlyJeopardized"] = jeopardizer(player);
  player.statuses.currentlyJeopardized();
}

const bossLullEx = function() {
  if (player.statuses["currentlyPoisoned"]) {
    delete player.statuses["currentlyPoisoned"]
  }
  alert(`${target.name} uses LULL!`)
  player.statuses["currentlySleeping"] = sleeper(player);
  player.statuses.currentlySleeping();
}

const bossShieldEx = function() {
  if (target.statuses["currentlyJeopardized"]) {
    target.def = target.defaults.def;
    alert(`${target.name} uses SHIELD!

\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
    
${target.name} is no longer jeopardized! Their physical DEF is back up to normal.`);
    delete target.statuses["currentlyJeopardized"];
    return null;
  } else if (target.statuses["currentlyGuarded"]) {
    target.def = target.defaults.def;
    delete target.statuses["currentlyGuarded"];
  }
  alert(`${target.name} uses SHIELD!`)
  target.statuses["currentlyGuarded"] = guarder(target);
  target.statuses.currentlyGuarded();
}

const bossChargeEx = function() {
  target.charged = true;
  alert(`${bossCharge.action}
    
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB

${target.name} has used CHARGE!`)
}

const bossUnleashEx = function() {
  let baseDmg = target.atk * 30;
  let damage = Math.round(baseDmg / player.def);
  player.hp -= damage;
  if (player.hp < 0) player.hp = 0;
  return targetActionCard(damage, bossUnleash);
}

const bossFlurryEx = function() {
  let baseDmg = target.atk * 18;
  let damage = Math.round(baseDmg / player.def);
  player.hp -= damage;
  if (player.hp < 0) player.hp = 0;
  return targetActionCard(damage, bossFlurry);
}

const bossStrike = {
  pin: 1,
  id: "strike",
  name: "STRIKE",
  action: "BOSS attacked you!",
  execute: bossStrikeEx
}

const bossFireball = {
  pin: 2,
  id: "fireball",
  name: "DARK FIREBALL",
  action: "BOSS hurled a corruputed fireball at you!",
  execute: bossFireballEx
}

const bossDisrupt = {
  pin: 3,
  id: "disrupt",
  name: "DISRUPT",
  action: "BOSS threw you off balance...",
  execute: bossDisruptEx
}

const bossLull = {
  pin: 4,
  id: "lull",
  name: "LULL",
  action: "BOSS emits a heavy aura...",
  execute: bossLullEx
}

const bossShield = {
  pin: 5,
  id: "shield",
  name: "SHIELD",
  action: "BOSS covers ",
  execute: bossShieldEx
}

const bossCharge = {
  pin: 1,
  id: "charge",
  name: "CHARGE",
  action: "BOSS prepares an alarmingly powerful attack...",
  execute: bossChargeEx
}

const bossUnleash = {
  pin: null,
  id: "unleash",
  name: "UNLEASH",
  action: "BOSS unleashes an overwhelming attack.",
  execute: bossUnleashEx
}

const bossFlurry = {
  pin: 2,
  id: "flurry",
  name: "FLURRY",
  action: "BOSS hurls multiple attacks in rapid succession!",
  execute: bossFlurryEx
}

boss.moves = {}

boss.moves["1"] = {
  pins: 5,
  1: bossStrike,
  2: bossFireball,
  3: bossDisrupt,
  4: bossLull,
  5: bossShield,
}

boss.moves["2"] = {
  pins: 2,
  1: bossFlurry,
  2: bossCharge,
  charged: bossUnleash,
}


// CHARACTER AND MOVESET: PLAYER

const player = {
  name: "link",
  hp: 100,
  atk: 1.0,
  def: 1.0,
  fireDef: 1.0,
  iceDef: 1.0,
  mag: 1.0,
  maxHp: 100,
  mp: 60,
  maxMp: 60,
  op: 0,
  maxOp: 0,
  statuses: {},
}

const playerDefaults = {
  hp: 100,
  atk: 1.0,
  def: 1.0,
  fireDef: 1.0,
  iceDef: 1.0,
  mag: 1.0,
  maxHp: 100,
  mp: 60,
  maxMp: 60,
  op: 0,
  maxOp: 0,
}

player.defaults = playerDefaults;


function poisoner(character) {
  let counter = 0;

  function poisoned() {
    if (counter === 0) {
      counter++;
      alert(`${character.name} has been poisoned!`)
    } else if (counter >= 3) {
      character.hp -= 10
      if (character.hp < 0) character.hp = 0;
      alert(`The poison affects ${character.name}. They lose 10 HP.`)
      delete character.statuses["currentlyPoisoned"];
      if (character.hp === 0) return gameOver();
      alert(`The effects of the poison wore off. ${character.name} has recovered!`)
    } else {
      counter++;
      character.hp -= 10
      if (character.hp < 0) character.hp = 0;
      alert(`The poison affects ${character.name}. They lose 10 HP.`)
      if (character.hp === 0) return gameOver();
    }
  }
  return poisoned;
}

const venomousdartEx = function() {
  if (target.statuses["currentlyPoisoned"]) {
    delete target.statuses["currentlyPoisoned"]
  }
  target.hp -= 1;
  venomousdart.held -= 1;
  alert(`${player.name} throws a poison-tipped dart at ${target.name}!
  
It only does 1 damage, but...`)
  if (target.hp === 0) return gameOver();
  opCharge();
  target.statuses["currentlyPoisoned"] = poisoner(target)
  target.statuses.currentlyPoisoned();
  return targetTurn();
}

const potionEx = function() {
  if (player.hp === player.maxHp) {
    alert("You're already at full health...");
    return submenu("item")
  }
  player.hp += 30;
  if (player.hp > player.maxHp) player.hp = player.maxHp;
  items.potion.held -= 1;
  alert(`${player.name} has healed 30 HP!`)
  return targetTurn();
}

const cureEx = function() {
  if (!player.statuses["currentlyPoisoned"]) {
    alert("You are not poisoned. The cure would have no effect...")
    return submenu("item")
  }
  delete player.statuses["currentlyPoisoned"];
  cure.held -= 1;
  alert(`${player.name} has cured the effects of the poison!`)
  return targetTurn();
}
const meadEx = function() {
  if (player.mp === player.maxMp) {
    alert("You're already at full MP...");
    return submenu("item")
  }
  player.mp += 30;
  if (player.mp > player.maxMp) player.mp = player.maxMp;
  items.mead.held -= 1;
  alert(`${player.name} has restored 30 MP!`)
  return targetTurn();
}
const dragonscaleEx = function() {
  let baseDmg = player.mag * 40;
  let damage = Math.round(baseDmg / target.fireDef);
  dragonscale.held -= 1;
  target.hp -= damage;
  if (target.hp < 0) target.hp = 0;
  opCharge();
  let res = undefined;
  if (target.fireDef > 1) {
    res = `${target.name} is resistant to fire...`
  } else if (target.fireDef < 1) {
    res = `${target.name} is weak to fire!`
  }
  return actionCard(damage, dragonscale, res)
}

let potion = {
  name: "POTION",
  id: "potion",
  displayName: "[P]otion",
  alt: "p",
  held: 2,
  execute: potionEx,
  description: "Restores a bit of HP.",
}

let venomousdart = {
  name: "VENOMOUS DART",
  id: "venomousdart",
  displayName: "[V]enomous Dart",
  alt: "v",
  held: 1,
  execute: venomousdartEx,
  description: "Poisons an enemy for up to three turns."
}

let cure = {
  name: "CURE",
  id: "cure",
  displayName: "[C]ure",
  alt: "c",
  held: 3,
  execute: cureEx,
  description: "Removes status ailments."
}

let mead = {
  name: "MEAD",
  id: "mead",
  displayName: "[M]ead",
  alt: "m",
  held: 4,
  execute: meadEx,
  description: "Restores a bit of MP."
}

let dragonscale = {
  name: "DRAGON SCALE",
  id: "dragonScale",
  action: "You hurled the shimmering, fiery scale!",
  displayName: "[D]ragon Scale",
  alt: "d",
  held: 0,
  execute: dragonscaleEx,
  description: "Explodes upon impact."
}

const items = {
  potion: potion,
  venomousdart: venomousdart,
  cure: cure,
  mead: mead,
  dragonscale: dragonscale,
}

let itemList = ``

const moves = {};

// universal functions and moves:

const opCharge = function() {
  player.op += 1;
  if (player.op > 3) player.op = 3;
}

const backEx = function() {
  return mainMenu();
}

const back = {
  execute: backEx,
  description: "Back to BATTLE MENU."
}

// attack functions:

const strikeEx = function() {
  let baseDmg = player.atk * 15;
  let damage = Math.round(baseDmg / target.def);
  target.hp -= damage;
  if (target.hp < 0) target.hp = 0;
  opCharge();
  return actionCard(damage, strike);
}

const unleashEx = function() {
  if (player.op < 3) {
    alert("You don't have enough OP for this...");
    return submenu("attack");
  }
  let baseDmg = player.atk * 30;
  let damage = Math.round(baseDmg / target.def);
  target.hp -= damage;
  if (target.hp < 0) target.hp = 0;
  player.op = 0;
  return actionCard(damage, unleash)
}

// attack moves:

const strike = {
  name: "STRIKE",
  description: "Swing your sword.",
  action: "You swung a mighty swing!",
  execute: strikeEx,
}
const unleash = {
  name: "UNLEASH",
  description: "Unleash a poweful charged attack.",
  action: "You unleashed a devastating attack...",
  execute: unleashEx,
}

// attack menu:

const attack = {
  name: "ATTACK MENU",
  description: "Use your weapon.",
  s: strike,
  strike: strike,
  u: unleash,
  unleash: unleash,
  b: back,
  back: back,
  choices: `[S]trike: ${strike.description}
[U]nleash: ${unleash.description}
[B]ack: ${back.description}`
}
moves.a = moves.attack = attack;

// magic functions

const fireEx = function() {
  if (player.mp < 10) {
    alert("You don't have enough MP for this...");
    return submenu("magic");
  }
  let baseDmg = player.mag * 20;
  let damage = Math.round(baseDmg / target.fireDef);
  target.hp -= damage;
  if (target.hp < 0) target.hp = 0;
  opCharge();
  player.mp -= 10;
  let res = undefined;
  if (target.fireDef > 1) {
    res = `${target.name} is resistant to fire...`
  } else if (target.fireDef < 1) {
    res = `${target.name} is weak to fire!`
  }
  return actionCard(damage, fire, res)
}

const iceEx = function() {
  if (player.mp < 10) {
    alert("You don't have enough MP for this...");
    return submenu("magic");
  }
  let baseDmg = player.mag * 20;
  let damage = Math.round(baseDmg / target.iceDef);
  target.hp -= damage;
  if (target.hp < 0) target.hp = 0;
  opCharge();
  player.mp -= 10;
  let res = undefined;
  if (target.iceDef > 1) {
    res = `${target.name} is resistant to ice...`
  } else if (target.iceDef < 1) {
    res = `${target.name} is weak to ice!`
  }
  return actionCard(damage, ice, res)
}

const healEx = function() {
  if (player.mp < 20) {
    alert("You don't have enough MP for this...");
    return submenu("magic");
  }
  if (player.hp === player.maxHp) {
    alert("You're already at full health...");
    return submenu("magic")
  }
  player.hp += 30;
  if (player.hp > player.maxHp) player.hp = player.maxHp;
  player.mp -= 20;
  alert(`${player.name} has healed 30 HP!`)
  return targetTurn();
}

const summonEx = function() {
  if (summonUsed) {
    alert("You can only summon once per battle...");
    return submenu("magic")
  }
  if (player.mp < 30) {
    alert("You don't have enough MP for this...");
    return submenu("magic");
  }
  let baseDmg = player.mag * 35;
  let damage = Math.round(baseDmg / target.def);
  target.hp -= damage;
  if (target.hp < 0) target.hp = 0;
  opCharge();
  player.mp -= 30;
  summonUsed = true;
  return actionCard(damage, summon)
}

// magic moves

const fire = {
  name: "FIRE",
  description: "Use fire magic. (10 MP)",
  action: "You cast a fiery spell...",
  execute: fireEx,
}

const ice = {
  name: "ICE",
  description: "Use ice magic. (10 MP)",
  action: "You cast an icy spell...",
  execute: iceEx,
}

const heal = {
  name: "HEAL",
  description: "Use healing magic. (20 MP)",
  action: "You cast a restorative spell...",
  execute: healEx,
}

const summon = {
  name: "SUMMON",
  description: "Available once per battle. (30 MP)",
  action: "You called upon an ancient force...",
  execute: summonEx,
}

// magic menu

const magic = {
  name: "MAGIC MENU",
  description: "Cast a spell.",
  f: fire,
  fire: fire,
  i: ice,
  ice: ice,
  h: heal,
  heal: heal,
  s: summon,
  summon: summon,
  b: back,
  back: back,
  choices: `[F]ire: ${fire.description}
[I]ce: ${ice.description}
[H]eal: ${heal.description}
[S]ummon: ${summon.description}
[B]ack: ${back.description}`
}

moves.m = moves.magic = magic;

// tactics moves

function jeopardizer(character) {
  let counter = 0
  let origDef = character.def;
  let reducedDef = 0.0;

  function jeopardized() {
    if (counter === 0) {
      reducedDef = origDef * 0.9;
      character.def = reducedDef;
      counter++;
      alert(`${character.name} is jeopardized! Their physical DEF has been reduced.`)

    } else if (counter >= 3) {
      delete character.statuses["currentlyJeopardized"];
      character.def = origDef;
      alert(`JEOPARDIZED wore off...
      
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB

${character.name} is no longer jeopardized! Their physical DEF has been restored to normal.`);


    } else {
      counter++;
      alert(`${character.name} is still jeopardized... their physical DEF is reduced.`)
    }
  }
  return jeopardized;
}

const jeopardizeEx = function() {
  if (target.statuses["currentlyGuarded"]) {
    target.def = target.defaults.def;
    alert(`${player.name} has broken ${target.name}'s raised guard! ${target.name}'s physical DEF has dropped back to normal.`);
    delete target.statuses["currentlyGuarded"];
    return targetTurn();
  } else if (target.statuses["currentlyJeopardized"]) {
    target.def = target.defaults.def;
    delete target.statuses["currentlyJeopardized"]
  }
  alert(`${player.name} throws ${target.name} off balance!`);
  target.statuses["currentlyJeopardized"] = jeopardizer(target);
  target.statuses.currentlyJeopardized();
  return targetTurn();
}

function guarder(character) {
  let counter = 0;
  let origDef = character.def;
  let raisedDef = 0.0;

  function guarded() {
    if (counter === 0) {
      raisedDef = origDef * 2;
      character.def = raisedDef;
      counter++;
      alert(`${character.name} put their guard up! Their physical DEF has been raised.`)

    } else if (counter === 1) {
      counter++;
    } else if (counter >= 2) {
      delete character.statuses["currentlyGuarded"];
      character.def = origDef;
      alert(`GUARDED wore off...
      
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB

${character.name} no longer has their guard up. Their physical DEF is back to normal.`)

    }
  }
  return guarded;
}

const guardEx = function() {
  if (player.statuses["currentlyJeopardized"]) {
    player.def = player.defaults.def;
    alert(`By putting their guard up, ${player.name} is no longer JEOPARDIZED! Their physical DEF is back up to normal.`);
    delete player.statuses["currentlyJeopardized"];
    return targetTurn();
  } else if (player.statuses["currentlyGuarded"]) {
    player.def = player.defaults.def;
    delete player.statuses["currentlyGuarded"]
  }
  player.statuses["currentlyGuarded"] = guarder(player);
  player.statuses.currentlyGuarded();
  return targetTurn();
}
const stealEx = function() {
  if (stolenItem) {
    alert(`${target.name} has nothing left to take...`)
    return submenu("tactics")
  }
  if (Math.random() < 0.5) {
    items[target.stealable].held += 1;
    alert(`You attempted to steal an item... and it worked!

${player.name} has stolen ${items[target.stealable].name} from ${target.name}.`)
    stolenItem = true;
    return targetTurn();
  } else {
    alert(`You attempted to steal an item...
    
but you were unsuccessful this time!`)
    return targetTurn();
  }
}
const fleeEx = function() {
  if (target.fleeable) {
    return exitCheck(mainMenu)
  } else {
    alert("You can't run away from this battle...")
    return submenu("tactics")
  }
}

const jeopardize = {
  name: "JEOPARDIZE",
  description: "Break GUARDED, or lower an enemy's physical DEF for three turns.",
  action: "You lowered the enemy's guard!",
  execute: jeopardizeEx,
}

const guard = {
  name: "GUARD",
  description: "Recover from JEOPARDIZED, or raise your physical DEF for one turn.",
  action: "You steeled yourself against attacks...",
  execute: guardEx,
}

const steal = {
  name: "STEAL",
  description: "Take an item (low success rate).",
  action: "You stole an item from the enemy!",
  execute: stealEx,
}

const flee = {
  name: "FLEE",
  description: "Run away (unavailable in certain battles).",
  action: "You fled from the battle!",
  execute: fleeEx,
}

// tactics menu

const tactics = {
  name: "TACTICS MENU",
  description: "Turn the tide.",
  j: jeopardize,
  jeopardize: jeopardize,
  g: guard,
  guard: guard,
  s: steal,
  steal: steal,
  f: flee,
  flee: flee,
  b: back,
  back: back,
  choices: `[J]eopardize: ${jeopardize.description}
[G]uard: ${guard.description}
[S]teal: ${steal.description}
[F]lee: ${flee.description}
[B]ack: ${back.description}`
}
moves.t = moves.tactics = tactics;

let item = {
  name: "ITEM MENU",
  description: "Check your inventory.",
  choices: itemList,
  b: back,
  back: back,
}
moves.i = moves.item = moves.items = item;

// battle setup

let turnNumber = 1;
let target = boss;
let summonUsed = false;
let stolenItem = false;
let isGameOver = false;
let currentTurn = player.name;
let phaseChanges = 1;
let setup = false;
const statusLookup = {
  currentlyGuarded: ` is guarded...`,
  currentlyJeopardized: ` is jeopardized...`,
  currentlyPoisoned: ` is poisoned...`,
  currentlyEnraged: ` is enraged!`,
  currentlySleeping: ` is asleep...`
}

// MENUS AND VISUALIZERS

function exitCheck(menu, param) {
  let exit = confirm("Quit game?");
  if (exit) {
    return null;
  } else {
    return menu(param);
  }
}

function healthBar(curr, max) {
  let percentage = Math.round((curr / max) * 100)
  let bar = ""
  for (let i = 0; i <= 100; i += 5) {
    if (percentage === 0 || i > percentage) {
      bar = bar.concat("\u25b1")
    }
    else {
      bar = bar.concat("\u25b0")
    }
  }
  return bar;
}

function opBar(num) {
  let bar = ""
  for (let i = 1; i <= 3; i++) {
    if (i <= num) {
      bar = bar.concat("\u26AA")
    } else {
      bar = bar.concat("\u26AB")
    }
  }
  return bar;
}

function healthHeart(curr, max) {
    let percentage = Math.round((curr / max) * 100)
    let heart = ""
    if (percentage >= 66) {
        heart = "\u2764"
    } else if (percentage >= 33) {
        heart = "\u{1F9E1}"
    } else if (percentage < 33) {
        heart = "\u{1F49B}"
    }
    return heart;
}

function hud() {
  let heart = healthHeart(player.hp, player.maxHp)
  let currentStatuses = ""
  Object.keys(target.statuses).forEach(stat => currentStatuses = currentStatuses.concat(target.name + statusLookup[stat] + "\n"));
  Object.keys(player.statuses).forEach(stat => currentStatuses = currentStatuses.concat(player.name + statusLookup[stat] + "\n"))
  let newHud = `ROUND ${turnNumber}: ${currentTurn.toUpperCase()}'S TURN!
${target.name}: ${healthBar(target.hp, target.maxHp)}
${player.name}: ${heart} HP: ${player.hp}/${player.maxHp} ${heart} | \u2728 MP: ${player.mp}/${player.maxMp} \u2728 | OP: ${opBar(player.op)}
${currentStatuses}`
  return newHud
}

function statusUpdate(character) {
  if (!isGameOver)
    Object.values(character.statuses).forEach(stat => { if (typeof stat === "function") stat() })
}

function phaseUpdate() {
  if (target.phases > 1) {
    if (target.hp <= target.maxHp / 2) {
      if (phaseChanges === 1) {
        target.phase = 2;
        alert(target.phase2prompt)
        target.phase2execute();
        phaseChanges++;
      }
    }
  }
}

function itemCheck() {
  item.choices = "";
  Object.keys(items).forEach(el => {
    if (items[el].held > 0) {
      item.choices = item.choices.concat(`${items[el].displayName}: ${items[el].description} (x${items[el].held})\n`);
    }

    if (items[el].held <= 0 && item[items[el].id]) {
      delete item[items[el].id];
      delete item[items[el].alt];
    }
    if (items[el].held > 0 && (!item[items[el].id])) {
      item[items[el].id] = items[el];
      item[items[el].alt] = items[el];
    }
  })
  if (item.choices === "") {
    item.choices = "Inventory is empty!\n[B]ack: ${back.description}"
  } else {
    item.choices = item.choices.concat(`[B]ack: ${back.description}`)
  }
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function targetMoveSelect() {

  if (target.charged) {
    target.moves[target.phase].charged.execute();
    target.charged = false;
    return null;
  }

  let movePin = randomize(1, target.moves[target.phase].pins);

  target.moves[target.phase][movePin].execute()
}

function actionCard(damage = 0, move, res) {
  let screen = ""

  if (res) {
    screen = `${move.action}

${res}
  
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
${player.name} used ${move.name} against ${target.name} and it did ${damage} damage.`
  }
  else {
    screen = `${move.action}
  
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
${player.name} used ${move.name} against ${target.name} and it did ${damage} damage.`
  }
  alert(screen);
  if (player.hp === 0 || target.hp === 0) return gameOver();
  return targetTurn()
}

function targetActionCard(damage = 0, move, res) {
  let screen = ""

  if (res) {
    screen = `${move.action}

${res}
  
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
${target.name} used ${move.name} against ${player.name} and it did ${damage} damage.`
  }
  else {
    screen = `${move.action}
  
\u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
${target.name} used ${move.name} against ${player.name} and it did ${damage} damage.`
  }
  alert(screen);
  if (player.hp === 0 || target.hp === 0) return gameOver();
  return null;
}

function targetTurn() {
  if (player.hp === 0 || target.hp === 0) return gameOver();
  statusUpdate(player)
  if (isGameOver) return null;
  alert(`${player.name}'s turn has ended.`)
  currentTurn = target.name;
  phaseUpdate();
  alert(`${hud()}
${target.name} is considering their next move...`)
  targetMoveSelect();
  turnNumber++;

  statusUpdate(target);
  if (isGameOver) return null;
  alert(`${target.name}'s turn has ended.`)
  currentTurn = player.name;

  if (player.statuses["currentlySleeping"]) {
    player.statuses.currentlySleeping();
    return null;
  }
  return mainMenu();
}

function submenu(topic) {
  itemCheck();
  let action = prompt(`${hud()}
${moves[topic].name}
${moves[topic].choices}`)

  // if player escapes, go back
  if (action === null) return mainMenu();

  // convert the player's input to lowercase
  action = action.toLowerCase().replace(/\s+/g, '');

  // check if the action is present in the moveset
  if (!moves[topic][action]) {
    alert("Please enter a valid move...")
    return submenu(topic);
  } else {

    // execute the move
    moves[topic][action].execute();
  }
}

function getName() {

  const specialChar = /[^a-zA-Z]/g;
  let name = prompt("What is your name, warrior?")
  if (name === null) {
    return exitCheck(getName);
  }
  if (specialChar.test(name)) {
    alert("Please enter a name without special characters or spaces...");
    return getName();
  } else if (name.toLowerCase() === "boss") {
    alert("Please enter a different name.")
    return getName();
  } else if (name.length > 16) {
    alert("Please enter a name that is 16 characters or less...")
    return getName();
  } else if (name === "") {
    alert("Please enter a name...")
    return getName();
  }

  let nameConfirmation = confirm(`Your name is: ${name}

is this correct?`)
  if (!nameConfirmation) return getName();
  return name
}

function characterSetup() {
  setup = true;
  alert("Welcome to BattleScript!")
  let name = getName()
  if (name) {
    player.name = name;
    currentTurn = player.name;
    alert(`The fight of your life begins, ${player.name}!`)
    return mainMenu();
  }
}

// main menu
let mainMenu = function() {

  // first time game setup
  if (!setup) return characterSetup();

  // prompt the player for an action
  let action = prompt(`${hud()}
BATTLE MENU:
[A]ttack: ${moves.a.description}
[M]agic: ${moves.m.description}
[T]actics: ${moves.t.description}
[I]tems: ${moves.i.description}`);

  // if player tries to exit screen, double-check
  if (action === null) return exitCheck(mainMenu)

  // convert the player's input to lowercase
  action = action.toLowerCase().replace(/\s+/g, '');

  // check if the action is present in the moveset
  if (!moves[action]) {
    alert("Please enter a valid move...")
    return mainMenu();
  } else {

    // call the appropriate submenu
    return submenu(action);
  }
}

function gameOver() {
  isGameOver = true;
  if (player.hp <= 0) {
    alert("The enemy has overpowered you... You've lost the fight.")
    return alert(`${player.name}, you have failed your quest to save the world...\nDarkness shrouds our realm...\nUnless, you have the courage to try again?`)
  } else if (target.hp <= 0) {
    alert("The enemy collapses to the ground... You've won the fight!")
    return alert(`You have saved our world from the scourge of evil!\nYour name will go down in myths for all eternity!\n${player.name}, the hero of legends...`)
  }
}

mainMenu()
