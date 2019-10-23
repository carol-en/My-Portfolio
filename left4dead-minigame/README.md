
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
        https://left4dead.fandom.com/wiki/Rooftop_Finale
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

        HEALTH: Is the same for all survivors, each will have 1 health kit
        Weapons will be randomized upon start

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

