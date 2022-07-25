// character profiles

const player = {
  name: "link",
  hp: 100,
  atk: 1.0,
  def: 1.0,
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
  mag: 1.0,
  maxHp: 100,
  mp: 60,
  maxMp: 60,
  op: 0,
  maxOp: 0,
}

player.defaults = playerDefaults;

const boss = {
  name: "BOSS",
  hp: 100,
  atk: 1.0,
  def: 1.0,
  maxHp: 100,
  multiplier: 1.0,
  fireDef: 1.10,
  iceDef: 0.90,
  fleeable: false,
  statuses: {},
  stealable: "dragonScale",
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

// battle setup

let turnNumber = 1;
let target = boss;
let summonUsed = false;
let currentTurn = player.name;

console.log(player)


// MOVES 

const statusLookup = {
  currentlyGuarded: ` is guarded...`,
  currentlyJeopardized: ` is jeopardized...`
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
const venomousDartEx = function() {
  alert("venomous dart!")
  return submenu("i")
}
const cureEx = function() {
  alert("cure!")
  return submenu("i")
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
const dragonScaleEx = function() {
  alert("dragon scale!")
  return submenu("i")
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

let venomousDart = {
  name: "VENOMOUS DART",
  id: "venomousDart",
  displayName: "[V]enomous Dart",
  alt: "v",
  held: 1,
  execute: venomousDartEx,
  description: "Poisons an enemy for up to three turns."
}

let cure = {
  name: "CURE",
  id: "cure",
  displayName: "[C]ure",
  alt: "c",
  held: 2,
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

let dragonScale = {
  name: "DRAGON SCALE",
  id: "dragonScale",
  displayName: "[D]ragon Scale",
  alt: "d",
  held: 0,
  execute: dragonScaleEx,
  description: "Explodes upon impact."
}

const items = {
  potion: potion,
  venomousDart: venomousDart,
  cure: cure,
  mead: mead,
  dragonScale: dragonScale,
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
  return actionCard(damage, fire)
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
  return actionCard(damage, ice)
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
      alert(`${character.name} is jeopardized! Their defense has been reduced to ${character.def}.`)

    } else if (counter >= 3) {
      delete character.statuses["currentlyJeopardized"];
      console.log(character)
      character.def = origDef;
      alert(`${character.name} is no longer jeopardized! Their defense has been restored to ${character.def}.`);


    } else {
      counter++;
      alert(`${character.name} is still jeopardized... their defense is ${character.def}.`)
    }
  }
  return jeopardized;
}

const jeopardizeEx = function() {
  if (target.statuses["currentlyGuarded"]) {
    target.def = target.defaults.def;
    alert(`${player.name} has broken ${target.name}'s raised guard! ${target.name}'s defense is back to ${target.def}.`);
    delete target.statuses["currentlyGuarded"];
    return null;
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
      raisedDef = origDef * 1.1;
      character.def = raisedDef;
      counter++;
      alert(`${character.name} put their guard up! Their defense has been raised to ${character.def}.`)

    } else if (counter === 1) {
      counter++;
    } else if (counter >= 4) {
      delete character.statuses["currentlyGuarded"];
      character.def = origDef;
      alert(`${character.name} no longer has their guard up. Their defense is back to ${character.def}`)

    } else {
      counter++;
      alert(`${character.name} still has their guard up... their defense is ${character.def}.`)
    }
  }
  return guarded;
}

const guardEx = function() {
  if (player.statuses["currentlyJeopardized"]) {
    player.def = player.defaults.def;
    alert(`${player.name} is no longer jeopardized! Their guard is back to ${player.def}`);
    delete player.statuses["currentlyJeopardized"];
    return null;
  } else if (player.statuses["currentlyGuarded"]) {
    player.def = player.defaults.def;
    delete player.statuses["currentlyGuarded"]
  }
  player.statuses["currentlyGuarded"] = guarder(player);
  player.statuses.currentlyGuarded();
  return targetTurn();
}
const stealEx = function() {
  alert("steal!")
  return submenu("tactics")
}
const fleeEx = function() {
  alert("flee!")
  return submenu("tactics")
}

const jeopardize = {
  name: "JEOPARDIZE",
  description: "Lower an enemy's physical DEF for one turn.",
  action: "You lowered the enemy's guard!",
  execute: jeopardizeEx,
}

const guard = {
  name: "GUARD",
  description: "Raise your physical DEF for one turn.",
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
moves.i = moves.item = item;

console.log(moves)


// MENUS

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

function hud() {
  let currentStatuses = ""
  Object.keys(target.statuses).forEach(stat => currentStatuses = currentStatuses.concat(target.name + " " + statusLookup[stat] + "\n"));
  Object.keys(player.statuses).forEach(stat => currentStatuses = currentStatuses.concat(player.name + " " + statusLookup[stat] + "\n"))
  let newHud = `ROUND ${turnNumber}: ${currentTurn}'S TURN!
${target.name}: ${healthBar(target.hp, target.maxHp)} hp: ${target.hp}
${player.name}: \u2764 HP: ${player.hp}/${player.maxHp} \u2764 | \u2728 MP: ${player.mp}/${player.maxMp} \u2728 | OP: ${opBar(player.op)}
${currentStatuses}`
  return newHud
}

function statusUpdate(character) {
  Object.values(character.statuses).forEach(stat => stat())
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
  console.log(item)
  if (item.choices === "") {
    item.choices = "Inventory is empty!\n[B]ack: ${back.description}"
  } else {
    item.choices = item.choices.concat(`[B]ack: ${back.description}`)
  }
}

function actionCard(damage = 0, move) {
  alert(`${move.action}
  
  \u00BB\u00BB\u2014\u2014\u235F\u2014\u2014\u00AB\u00AB
  
  ${player.name} used ${move.name} against ${target.name} and it did ${damage} damage.`)
  return targetTurn()
}

function targetTurn() {
  statusUpdate(player)
  alert(`${player.name}'s turn has ended.`)
  currentTurn = target.name;
  alert(`${hud()}
  ${target.name} is considering their next move...`)
  turnNumber++;

  statusUpdate(target);

  alert(`${target.name}'s turn has ended.`)
  currentTurn = player.name;
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
  action = action.toLowerCase();

  // check if the action is present in the moveset
  if (!moves[topic][action]) {
    alert("Please enter a valid move...")
    return submenu(topic);
  } else {

    // execute the move
    moves[topic][action].execute();
  }
}

//main menu
let mainMenu = function() {

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
  action = action.toLowerCase();

  // check if the action is present in the moveset
  if (!moves[action]) {
    alert("Please enter a valid move...")
    return mainMenu();
  } else {

    // call the appropriate submenu
    return submenu(action);
  }
}

mainMenu()
