


// ============================
// Game actions and inputs
// ============================

    const $fade                 = $(".fade"); 
    const $youDied              = $("#you-died");
    const $youWin               = $("#you-win");
    const $rooftopCall          = $("#rooftop-call");
    const $healOptions          = $("#heal-options");
    const $survivorEvents       = $("#survivor-events");
    const $infectedEvents       = $("#infected-events");
    const $playerH1             = $("#player-h1");
    const $infectedH1           = $("#infected-h1");
    const $playerPhoto          = $("<img>").addClass("player-photo");
    const $infectedPhoto        = $("<img>").addClass("infected-photo");
    const $healthPercent        = $("#health-percent");
    const $playerGun            = $("#player-gun");
    const $gunDamage            = $("#gun-damage");

const onStartUp = () => {
    $(() => {
        $playerPhoto.attr({"src": thePlayer().photo, "alt": "Image of " + thePlayer().name});
        $fade.fadeIn(800);
        $rooftopCall.fadeIn(900);
        $playerPhoto.appendTo(".player"); // Loads player image
        $playerH1.text(thePlayer().name); // Loads player name
        $healthPercent.text(`${thePlayer().health}%`);
        $playerGun.text(thePlayer().weapons.weapon);
        $gunDamage.text(`${thePlayer().weapons.firepower} damage`);
        startTheGame();
    });

}


const startTheGame = () => {
    $( () => {

        $("#start-events").on("click", () => {
            $($fade).fadeOut(800);
            $rooftopCall.fadeOut(900);
            activeInfected().spawnInGame(thePlayer());
        });
    });
}

const youDied = () => {
    $fade.fadeIn(800);
    $youDied.fadeIn(900);
    setTimeout(() => {
        location.reload(true);
    }, 2000);
}

const youWin = () => {
    $fade.fadeIn(800);
    $youWin.fadeIn(800);
}

const whatToDo = () => { // Lets player decide what to do
    $survivorEvents.append("<p>What do you want to do?", "attack, heal, restart game, or quit game</p>");

}

$(() => {
    $("#shoot").on("click", () => {
        thePlayer().chanceOfHit(activeInfected());
    });
    $("#heal-self").on("click", () => {
        $fade.fadeIn(800);
        $healOptions.fadeIn(900);
        $(".cancel").on("click", () => {
            $fade.fadeOut(800);
            $healOptions.fadeOut(900);
        });
        $(".medpack").on("click", () => {
            // alert("Medpack Clicked");
            thePlayer().healSelf("pack");
            $fade.fadeOut(800);
            $healOptions.fadeOut(900);
        });

        $(".pills").on("click", () => {
            thePlayer().healSelf("bottle");
            $fade.fadeOut(800);
            $healOptions.fadeOut(900);
        }); 
    }); 
    $("#quit-game").on("click", () => {
        window.location = "index.html";
    });

    $("#restart").on("click", () => {
        location.reload(true);
    });
});



// ============================
// randomMoves: Random / variable functions for dynamic attacks
// ============================

// ============================
// numbers: used to get random numbers
// ============================
const randomMoves = {
    numbers: (num, num2) => {
        return Math.floor(Math.random() * (num + num2));
    },
// ============================
// shuffle: scrambles elements in an array
// ============================
    shuffle: (array) => {
        let arr = array;
    
        for(let i = arr.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = arr[randomIndex];
    
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
        } return arr;
    },
// ============================
// shuffleValues: randomly chooses keys & values in an object
// ============================
    shuffleValues: (values) => {
        const list = values;
        const value = Object.entries(list);
        const randomIndex = Math.floor(Math.random() * (value.length - 1));
        const item = value[randomIndex];
        return item;
    }
}

 // ============================
 // Infected attacks, type, and how much damage done
  // ============================
const infectedAttacks   = {  
    theTank: { punch: 30, throw: 35, hitChance: randomMoves.numbers(4,9) },
    theWitch: { scratch: 33, hitChance: randomMoves.numbers(9, 10) },
    theSmoker: { hit: 15, ensnare: 20, hitChance: randomMoves.numbers(3, 6) },
    theHunter: { scratch: 10, pounce: 25, hitChance: randomMoves.numbers(3, 6) },
    theHorde: { infectedAttacks: randomMoves.numbers(10, 75), hitChance: randomMoves.numbers(1, 9) }
 };

 // ============================
 // Player Items & weapons
// ============================

// ============================
// playerWeapons:  // List of player weapons and stats
// Weapon name, how strong weapon is, how accurate /likely it is to hit
// ============================
 const playerWeapons = [ 
    { weapon: "M16 Assault Rifle", firepower: 135, accuracy: 7.5 },
    { weapon: "Pump Shotgun", firepower: 250, accuracy: 1.5 },
    { weapon: "Hunting Rifle", firepower: 150, accuracy: 8  },
    { weapon: "Pistol", firepower: 76, accuracy: 6.5  }
];

// ============================
// healthPacks: Health items survivor carries to heal self
// ============================
const healthPacks = [ 
    { largePack: { // Item 1: Large health pack, heals 80%
        isItOwned: true, // Does player have one
        healthRegen: 80 // How much it heals
        } 
    },
    { pills: { // Item 2: Bottle of pills, heals 25%
        isItOwned: true,
        healthRegen: 25
        }
    }
];



// ============================
 // Survivor Class
 // Creates profiles all survivors will use & methods that will be actions
// ============================
class Survivor { // Profile creation for survivors
    constructor(name, health = 100, items, weapons, photo, audio) {
        this.name        = name // name
        this.health      = health  // health
        this.items       = items // player's items
        this.weapons     = weapons // player's current weapon
        this.photo       = photo // character photo
        this.audio       = audio // character lines, optional
    }

// ============================
// chanceOfHit: Chances survivor's attack hits or misses
// ============================
    chanceOfHit(infected) { 
        const weaponHits    = this.weapons.accuracy;

        if(weaponHits > randomMoves.numbers(1, 3)) {
            // console.log("Survivors attack has landed!!");
                $infectedPhoto.effect("shake");
                $survivorEvents.empty();
                $infectedEvents.html(`<p>${infected.name} has been hit!</p>`);
                this.fireWeapon(infected);
        } else {
            $survivorEvents.empty();
            $survivorEvents.html("<p>You've missed your shot!</p>");
            infected.chanceOfAttack(this);
        }

    }

// ============================
// damageSurvivor: If survivor is hit, this removes health according to attack's damage
// ============================
    damageSurvivor(infected, infectedDamage)  {
        this.health -= infectedDamage;

        if(this.health <= 75 && this.health > 30)  {
            $("#player-health").removeClass("at-100-percent").addClass("at-50-percent");
        } else if(this.health <= 30) {
            $("#player-health").removeClass("at-50-percent").addClass("at-15-percent");
        } 

        $healthPercent.empty();
        $healthPercent.text(`${thePlayer().health}%`);

        if(this.health > 0) { // If survivor survives, run what to do prompt
            whatToDo();

        } else if(this.health <= 0) { // Ask to restart when dying
            youDied();
        }
    }

    // ============================
    // healSelf: Function to heal yourself when injured, can only heal ocne with pills & medpack
    // ============================
     healSelf(items) { 
        let medPack = this.items[0].largePack.healthRegen; // health pack
        let medPackOwned = this.items[0].largePack.isItOwned; // true or false if you have a health pack
        let pills = this.items[1].pills.healthRegen; // pills
        let pillsOwned = this.items[1].pills.isItOwned; // true or false if you have pills

        if(this.health === 100 || items === "false") {
            if(items === "pack") {
                $(".medpack").effect("shake");
            } else if(items === "bottle") {
                $(".pills").effect("shake");
                return;
            }
        } 

        if(items === "pack") { // For Medpack
            if(this.health < 100) {
                this.health += medPack;
                this.items[0].largePack.isItOwned = "false";
                if(this.health > 100) {
                    this.health = 100;
                }
            } 
        } 
        else if(items === "bottle") {// For pills
            if(this.health < 100 ) {
                this.health += pills;
                this.items[1].pills.isItOwned = "false";
                if(this.health > 100) {
                    this.health = 100;
                }
            }
        } 
        $healthPercent.empty();
        $healthPercent.text(`${thePlayer().health}%`);

        if(thePlayer().health > 30 && thePlayer().health <= 75) {
            $("#player-health").removeClass("at-15-percent").addClass("at-50-percent");
        }  else if(this.health > 75) {
            $("#player-health").removeClass("at-15-percent").removeClass("at-50-percent").addClass("at-100-percent");
        } 
        
        setTimeout(() => { // launches infected's attack attempt on survivor once healing is done
            activeInfected().chanceOfAttack(this);
        }, 2000); 
    }

// ============================
// fireWeapon: if you hit infected this while say so and launch the function to damage infected according to firepower level
// ============================
    fireWeapon(infected) {
        let weapon          = this.weapons.weapon; // current weapon
        let weaponDamage    = this.weapons.firepower; //curent weapon's damage
        console.log(`${this.name} has shot at ${infected.name} with the ${weapon} with ${weaponDamage} damage`);
        infected.takeDamage(this);
    }
}

// ============================
// Infected Class
// Creates class for all infected as well as methods infected will use
// ----------------------
// IncreaseHorde Class
// Takes the horde profile and makes 3 more dupelicates for event purposes!
// ============================
class Infected { // Profile creation for infected
    constructor(name, health, photo, attack, audio) {
        this.name      = name // infected's name
        this.health    = health // infected's health
        this.photo     = photo // infected photo
        this.attack    = attack // infected attacks
        this.audio     = audio // infected sounds and music, optional
    }
// ============================
// chanceOfAttack: Decides if an infected's attack hits or misses
// ============================
    chanceOfAttack(survivor)  { // Param 'survivor' passes survivor profile
        let infectedHits        = this.attack.hitChance;
        if(infectedHits > 3 ) {
            $infectedEvents.empty();
            this.attackHumans(survivor);
            $infectedEvents.html(`<p>The ${this.name} has successfully attacked ${survivor.name}!</p>`);
            $playerPhoto.delay(800).effect("shake");

        } else {
            $infectedEvents.empty();
            $infectedEvents.html("<p>Infected hit has missed!</p>");
            whatToDo();
        }
    }

// ============================
// infectedHit: Decides randomy which attack special infected will use
// ============================
    infectedHit() {
        let attack = randomMoves.shuffleValues(this.attack);
        return attack;
    }

    // ============================
    // attackHumans: If infected attack hits, damage is taken to survivor depending on type of infected and type of attack
    // ============================
    attackHumans(survivor) {
        let survivorHealth      = survivor.health; // survivor's health
        var dynamicAttack = this.infectedHit(); // current infect's attack 

        // console.log(`${survivor.name} is at ${survivorHealth} health`);
        survivor.damageSurvivor(this, dynamicAttack[1]);
    }

    // ============================
    // takeDamage: // Infected takes damage from survivor's attack
    // ============================
    takeDamage(survivor) { 
        this.health -= survivor.weapons.firepower;
        let infectedsHealth = this.health;
        if(infectedsHealth > 0 ) { // If infected's health is over 0
            $infectedEvents.empty();
            $infectedEvents.html(`<p>${this.name} has survived the attack!</p>`);
            this.chanceOfAttack(survivor);

        } else if(infectedsHealth <= 0) { // If infect's health is at or below 0, kill it

            if(allInfectedListed.length > 0) { // If there's still infected to fight, remove newly killed infected from array
                allInfectedListed.shift();
                $infectedEvents.empty();
                $infectedEvents.html(`<p>${this.name} has been killed!</p>`);
                $infectedH1.empty();
                $infectedPhoto.fadeOut();

                setTimeout(() => {
                    $infectedPhoto.remove();
                    this.spawnInGame(thePlayer());
                }, 1000);

            } else { // If there are no more infected to kill, you've won  the game!
                youWin();
            }
        }
    }

    // ============================
    // spawnInGame: // 'Spawns' the infected to attack, the first move & event of the game
    // ============================
    spawnInGame(survivor)  { // 'Spawns' the infected to attack
        if(allInfectedListed.length > 0) {
            $infectedH1.text(activeInfected().name);
            $infectedEvents.html(`<p>${activeInfected().name} has spawned!</p>`);
            $infectedPhoto.hide().delay("slow").fadeIn().attr("src", activeInfected().photo);
            $infectedPhoto.appendTo(".infected");
            whatToDo();
        } else {
            youWin();
        }
    }
}

// ============================
// IncreaseHorde: class that takes in original horde profile and duplicates it
// ============================
class IncreaseHorde { // Creates and groups all infected for game
    constructor(theInfected) {
        this.infected       = theInfected // Grabs the common infected to create horde
        this.hordeWaves     = [] // Where horde waves will live in array 
    }

    // ============================
    // spawnHordes:  duplicates the horde 3 times so there's 4 total
    // ============================
    spawnHordes() { // creates 4 total waves of the horde to be fought
        let multiplydHorde = this.infected;
        for(let i = 1; i <= 4; i++) {
            this.hordeWaves.push(multiplydHorde);
        } return this.hordeWaves;
    }
}

// ============================
// Player and infected profiles
// ============================

const zoey = new Survivor ( // Zoey survivor profile
    "Zoey", 
    100,
    healthPacks,
    playerWeapons[randomMoves.numbers(0, 4)],
    "images/survivors/zoey/zoey_3.jpg"
);

const bill = new Survivor ( // Zoey survivor profile
    "Bill", 
    100,
    healthPacks,
    playerWeapons[randomMoves.numbers(0, 4)],
    "images/survivors/bill/bill4.jpg"
);

const louis = new Survivor ( // Zoey survivor profile
    "Louis", 
    100,
    healthPacks,
    playerWeapons[randomMoves.numbers(0, 4)],
    "images/survivors/louis/louis_3.jpg"
);

const francis = new Survivor ( // Zoey survivor profile
    "francis", 
    100,
    healthPacks,
    playerWeapons[randomMoves.numbers(0, 4)],
    "images/survivors/francis/francis_2.jpg"
);

const tank = new Infected ( // Tank profile
    "The Tank",
    600,
    "images/infected/tank/tank_4.png",
    infectedAttacks.theTank
);

const witch = new Infected ( // Witch profile
    "The Witch",
    400,
    "images/infected/witch/witch.png",
    infectedAttacks.theWitch
);

const hunter = new Infected ( // Hunter profile
    "The Hunter",
    250,
    "images/infected/hunter/hunter_4.png",
    infectedAttacks.theHunter
);

const smoker = new Infected ( // Smoker profile
    "The Smoker",
    250,
    "images/infected/smoker/smoker_2.gif",
    infectedAttacks.theSmoker
);

const commonInfected = new Infected ( // Common infected / the horde profile
    "The Horde",
    randomMoves.numbers(100, 400),
    "images/infected/horde/horde_5.png",
    infectedAttacks.theHorde
    );



    // ============================
    // Creates horde clones, special infected array is created, then all merged into one infected array to be fought against
    // Also creates survivors list array and scrambles.
    // ============================

    const theHorde              = new IncreaseHorde(commonInfected); // pushes common infected for multiplication purposes
    const allHordes             = theHorde.spawnHordes(); // creates array of 4 total hordes
    const allSpecialInfected    = [ tank, witch, hunter, smoker ] // array of special infected
    const allInfectedListed     = randomMoves.shuffle([...allHordes, ...allSpecialInfected]); // Merges both horde and special infected into 1 array and randomly shuffles them to make game events random every time variable is called.
    const activeInfected        = () => { // current infected attacking
        return allInfectedListed[0];
    } 
    const allSurvivorsListed    = randomMoves.shuffle([zoey, francis, bill, louis]);
    const thePlayer             = () => {
        return allSurvivorsListed[0];
    }

onStartUp();


//////////////////////////////////////
// LEFT4DEAD MINI GAME
//////////////////////////////////////

///////////////////////////////////////////////////////////
// 1. Must be a two player game
    // 1. Player - survivor
    // 2. Enemy - computer infected
// 2. Win State
    // Survive the waves on infected and make it to the helicopter
// 3. Lose State
    // Dying from the infected
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// Main menu –– options: 
//   instructions on what to do/ how to win the game
    // NO MERCY MAP: https://left4dead.fandom.com/wiki/No_Mercy
        // Survive the rooftop finale atop Mercy Hospital, hold out until helicopter arrives
        // https://left4dead.fandom.com/wiki/Rooftop_Finale
        // Survive 3-4 waves of infected/horde with chances of special infected spawning
            // At least 1 Tank must spawn and must be killed before chance of winning function may run
                // If time permits, have 2 more Tanks spawn at random
            // Must survive to the waves and special infected, MUST make it to helicopter to win the game

    // Minimum requirements: 1 player/survivor is playable and survives rooftop finale, which weapon they have will be  randomized every time a new game starts of: pistols, hunting rifle, pump shotgun, M16
        // If time permits: Randomized which survivor you will be at start of game
    // If time permits: add 3 other survivors as playable characters
                // Super if time permits: Have function to heal other survivors if you have a health pack
                // Super if time permits: Make ammo limited, random chance of  weapons and ammo spawn functions
                    // Higher teir weapons will become available like automatic shotgun, high powered rifle, desert eagle
    // If time permits: create 'levels' for the first four maps of No Mercy: Apartments, Streets, Sewer, Hospital

    // HTML/CSS If time permits: accompaning audio cues for survivors & infected  such as music and groans/growls, and scripted lines.

// Have two options for information: 
    // Text to read on the infected
    // Link Valve's survival video on how to play the game https://www.youtube.com/watch?v=aAPMAPiQqxc
        // Video is good example of showing player how the game functions and how to survive without explicitly saying. Good example of show not tell.
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
//   information on all 4 survivors, each with a different weapon
    // HUMANS / PLAYERS /////////////////////////////

        // HEALTH: Is the same for all survivors, each will have 1 health kit
        // Weapons will be randomized upon start

            // Zoey: https://left4dead.fandom.com/wiki/Zoey
                // Wields hunting rifle: https://left4dead.fandom.com/wiki/Hunting_Rifle
                    // Extremely high damage and high rate of hit points

            // Louis: https://left4dead.fandom.com/wiki/Louis
                // Wields Dual Pistols: https://left4dead.fandom.com/wiki/M1911_Pistol 
                    // Medium damage - excellent long distance

            // Francis: https://left4dead.fandom.com/wiki/Francis
                // Wields pump shot gun: https://left4dead.fandom.com/wiki/Pump_Shotgun
                    // Second highest damage behind rifle, medium hit rate

            // Bill: https://left4dead.fandom.com/wiki/William_%22Bill%22_Overbeck
            // Wields assault rifle: https://left4dead.fandom.com/wiki/M16_Assault_Rifle
                    // Highest rate of hit points, medium damage
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
//   information on infected
    // ENEMIES / INFECTED  /////////////////////////////
        // COMMON INFECTED: /////////////

            // The Infected / Horde: https://left4dead.fandom.com/wiki/The_Infected#Horde
                // Random chance of encounter: extremely high
                    // May be called between actions of attack, defense, and level progression
                // Damage:s rate is variable between none/low to lethal
                // Hit rate: variable, on the low end
                // Health: varies from low to extremely high


        // SPECIAL INFECTED: /////////////

            // The Witch: https://left4dead.fandom.com/wiki/The_Witch
                // Random chance of encounter: low
                // Damage: highest of infected, lethal after 3 hits
                // Hit rate: 100%
                // Health: High
                // Chance of avoiding spawned which or being attacked.
                // If time permits: If Witch spawns but is not startled, chance of startling still happens if player misses shooting another infected.
            
            // The Tank: https://left4dead.fandom.com/wiki/The_Tank
                // Random chance of encounter: low to medium
                // Damage: Extremely high,  not as high as The Witch
                // Hit rate: High
                // Health: highest of all infected

            // The Smoker: https://left4dead.fandom.com/wiki/The_Smoker
                // Random chance of encounter: medium to high
                // Damage rate: medium
                // Chance of hit: medium to high
                // Health: low

            // The Hunter: https://left4dead.fandom.com/wiki/The_Hunter
                // Random chance of encounter: medium to high
                // Damage rate: medium to high
                // Chance of hit: extremely high, second highest besides Witch
                // Health: low
///////////////////////////////////////////////////////////

// JS: 
    // Use classes to create profiles, 1 for survivors, 1 for infected
    // A math random function or method to be used in various parts of the game
        //  For chance of hit or miss for weapons fire, for attacks from infected, for startling Witch, and spawning special infected, for which weapon player gets, and (time permitting) which surivor you will spawn as.
    // Function for healing if injured
    // Function for checking if human and/or infected survives attacks/firepower
    // Attack function for human, attack function for infected
    // Function for switching between who's turn is it to attack/fight
    // Function for creating / spawning common infected/horde
    // Function for spawning special infected
    // Lose function if player dies
    // Win function if player survives to the end

// HTML/CSS/JQUERY: 
    // Start page is a menu: options for information and start game
    // Possibly a single page, information for what happens occurs with modals/pop up boxes
    // Images of player versus opposing infected. Infected swapped out depending and who spawns
    // Visual icons of current weapon, health pack, and health bar
    // Visual stats of opposing infected
    // Button to quit game or proceed

