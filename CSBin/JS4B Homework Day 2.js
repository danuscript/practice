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
let player = {
    name: "link",  
    hp: 100,
      maxHp: 100,
      mp: 40,
      maxMp: 40,
      op: 0,
      maxOp: 0,
      status: {},
  }
  
  let boss = {
      hp: 100,
      name: "boss",
      maxHp: 100
  }
  
  let turnNumber = 0;

/*                                
  _ __ ___   _____   _____  ___ 
 | '_ ` _ \ / _ \ \ / / _ \/ __|
 | | | | | | (_) \ V /  __/\__ \
 |_| |_| |_|\___/ \_/ \___||___/

*/
                                
  
  let moves = {};
  
  let strike = {
      description: "Swing your sword.",
  }
  let unleash = {
      description: "Unleash a poweful charged attack",
  }
  
  let attack = {
      name: "ATTACK MENU",
      description: "Use your weapon.",
      s: strike,
      strike: strike,
      u: unleash,
      unleash: unleash,
      choices: `[S]trike: ${strike.description}
  [U]nleash: ${unleash.description}
  [B]ack: Back to MAIN MENU.`
  }
  moves.a = moves.attack = attack;
  
  
  
  let magic = {
      description: "Cast a spell.",
      submenu: {
          ice: {
              description: "Use ice magic.",
              mpCost: 10,
          },
          fire: {
              description: "Use fire magic.",
              mpCost: 10,
          },
          heal: {
              description: "Restore your HP.",
              mpCost: 20,
          },
          summon: {
              description: "Available once per battle.",
              mpCost: 30,
          }
      }
  }
  moves.m = moves.magic = magic;
  
  let tactics = {
      description: "Turn the tide.",
      submenu: {
          break: {
              keywords: ["b", "break"],
              description: "Lower an enemy's defense for one turn.",
          },
          guard: {
              keywords: ["g", "guard"],
              description: "Raise your defense for one turn.",
          },
          steal: {
              keywords: ["s", "steal"],
              description: "Take an item (low success rate).",
          },
          flee: {
              keywords: ["f", "flee"],
              description: "Run away (unavailable in certain battles.",
          },
      },
  }
  moves.t = moves.tactics = tactics;
  
  let item = {
      keywords: ["i", "items"],
      description: "Check your inventory."
  }
  moves.i = moves.item = item;
  
  /*                        
    _ __ ___   ___ _ __  _   _ ___ 
   | '_ ` _ \ / _ \ '_ \| | | / __|
   | | | | | |  __/ | | | |_| \__ \
   |_| |_| |_|\___|_| |_|\__,_|___/                                                                                        
  */
  
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
          if (i <= percentage) {
              bar = bar.concat("▰")
          } else {
              bar = bar.concat("▱")
          }
      }
      return bar;
  }
  
  function opBar(num) {
      let bar = ""
      for (let i = 1; i <= 3; i++) {
        if (i <= num) {
          bar = bar.concat("⚪️")
      } else {
        bar = bar.concat("⚫️")
        }
      }
      return bar;
    }
  
  let hud = `${boss.name.toUpperCase()}: ${healthBar(boss.hp, boss.maxHp)}
  
  ${player.name.toUpperCase()}: 💖 HP: ${player.hp}/${player.maxHp} 💖 | ✨ MP: ${player.mp}/${player.maxMp} ✨ | OP: ${opBar(player.op)}`
  
  function submenu(topic) {
  let action = prompt(`${hud}
  
  ${moves[topic].name}
  ${moves[topic].choices}`)
  
    // if player escapes, go back
      if (action === null) mainMenu();
  
    // convert the player's input to lowercase
      action = action.toLowerCase();
  
    // if the player pressed back, go back
    if (action === "b") return mainMenu();
  
      // check if the action is present in the moveset
      if (!moves[topic][action]) {
          alert("Please enter a valid move...")
          return submenu(topic);
      } else {
  
          // execute the move
          alert(`move: ${moves[topic][action].description}`);
      }
  }
  
  //main menu
  let mainMenu = function () {
  
      // prompt the player for an action
      let action = prompt(`${hud}
  
  MAIN MENU:
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
  
  mainMenu();
  
  
  
  
  // battleloop:
  // loop until either the player or boss runs out of hp
  // while (player.hp > 0 && boss.hp > 0) {
  
  // // main battle screen
  
  
  //     // if the move is "attack", attack
  //     if (action === "a" || action === "attack") {
  //         boss.hp -= 20;
  //         alert("boss.hp - 20")
  
  //         // if the move is "heal", heal
  //     } else if (action === "h" || action === "heal") {
  //         player.hp += 40
  //         alert("player.hp + 20")
  
  //         // if the move is "defend", defend
  //     } else if (action === "d" || action === "defend") {
  //         player.defend = true;
  //         alert("player.defend = true")
  //     }
  
  //     // your turn is over
  //     alert("boss's turn");
  
  //     // boss attacks (can replace with an attack function later)
  //     alert("boss attacked, player.hp - 25");
  //     player.hp -= 25;
  
  // }
  
  // (player.hp > 0) ? alert("win") : alert("lose");
