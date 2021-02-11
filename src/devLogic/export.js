'use strict'
const sampleState = {
    name: 'Ancient Brass Dragon',
    type: 'dragon',
    stats: {
        str: 27,
        dex: 10,
        con: 25,
        int: 16,
        wis: 15,
        cha: 19,
    },
    hp: '297 (17d20+119)',
    ac: '20 (natural armor)',
    languages: 'Common, Draconic',
    size: 'G',
    alignment: 'chaotic good',
    speed: '40 ft., burrow 40 ft., fly 80 ft.',
    cr: '20',
    senses: 'blindsight 60 ft., darkvision 120 ft.',
    savingThrows: {
        str: '',
        dex: '+6',
        con: '+13',
        int: '',
        wis: '+8',
        cha: '+10',
    },
    skills: {
        Athletics: '',
        Acrobatics: '',
        SleightOfHand: '',
        Stealth: '+6',
        Arcana: '',
        History: '+9',
        Investigation: '',
        Nature: '',
        Religion: '',
        AnimalHandling: '',
        Insight: '',
        Medicine: '',
        Perception: '+14',
        Survival: '',
        Deception: '',
        Intimidation: '',
        Performance: '',
        Persuasion: '+10',
    },
    resistances: {
        Slashing: false,
        Piercing: false,
        Bludgeoning: false,
        Poison: false,
        Acid: false,
        Fire: false,
        Cold: false,
        Radiant: false,
        Necrotic: false,
        Lightning: false,
        Thunder: false,
        Force: false,
        Psychic: false,
    },
    immunities: {
        Slashing: false,
        Piercing: false,
        Bludgeoning: false,
        Poison: false,
        Acid: false,
        Fire: true,
        Cold: false,
        Radiant: false,
        Necrotic: false,
        Lightning: false,
        Thunder: false,
        Force: false,
        Psychic: false,
    },
    vulnerabilities: {
        Slashing: false,
        Piercing: false,
        Bludgeoning: false,
        Poison: false,
        Acid: false,
        Fire: false,
        Cold: false,
        Radiant: false,
        Necrotic: false,
        Lightning: false,
        Thunder: false,
        Force: false,
        Psychic: false,
    },
    conditionImmunities: {
        Blinded: false,
        Charmed: false,
        Deafened: false,
        Exhaustion: false,
        Frightened: false,
        Grappled: false,
        Incapacitated: false,
        Invisible: false,
        Paralyzed: false,
        Petrified: false,
        Poisoned: false,
        Prone: false,
        Restrained: false,
        Stunned: false,
        Unconscious: false,

    },
    traits: [
        {name: "Legendary Resistance (3/Day)", text: "If the dragon fails a saving throw, it can choose to succeed instead."}
    ],
    actions: [
        {name: "Multiattack", text: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."},
        {
            name: "bite", 
            text: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
            attack: "Bite|14|2d10+8"
        },
        {
            name: "Claw",
            text: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
            attack: "Claw|14|2d6+8"
        },
        {
            name: "Tail",
        text: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
        attack: "Tail|14|2d8+8"
        },
        {
            name: "Frightful Presence",
            text: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
            name: "Breath Weapons (Recharge 5-6)",
            text: "The dragon uses one of the following breath weapons: \nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one. \nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
            attack:"Fire Breath||16d6"
        },
        {
            name: "Change Shape",
            text: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
    ],
    legendaryActions: [
        {
            name: "Detect",
            text: "The dragon makes a Wisdom (Perception) check."
        },
        {
            name: "Tail Attack",
            text: "The dragon makes a tail attack."
        },
        {
            name: "Wing Attack (Costs 2 Actions)",
            text: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
    ],
    description: "The most gregarious of the true dragons, brass dragons crave conversation, sunlight, and hot, dry climates.\nA brass dragon’s head is defined by the broad protective plate that expands from its forehead and the spikes protruding from its chin. A frill runs the length of its neck, and its tapering wings extend down the length of its tail. A brass dragon wyrmling’s scales are a dull, mottled brown. As it ages, the dragon’s scales begin to shine, eventually taking on a warm, burnished luster. Its wings and frills are mottled green toward the edges, darkening with age. As a brass dragon grows older, its pupils fade until its eyes resemble molten metal orbs.\nBoldly Talkative. A brass dragon engages in conversations with thousands of creatures throughout its long life, accumulating useful information which it will gladly share for gifts of treasure. If an intelligent creature tries to leave a brass dragon’s presence without engaging in conversation, the dragon follows it. If the creature attempts to escape by magic or force, the dragon might respond with a fit of pique, using its sleep gas to incapacitate the creature. When it wakes, the creature finds itself pinned to the ground by giant claws or buried up to its neck in the sand while the dragon’s thirst for small talk is slaked.\nA brass dragon is trusting of creatures that appear to enjoy conversation as much as it does, but is smart enough to know when it is being manipulated. When that happens, the dragon often responds in kind, treating a bout of mutual trickery as a game.\nPrized Treasures. Brass dragons covet magic items that allow them to converse with interesting personalities. An intelligent telepathic weapon or a magic lamp with a djinni bound inside it are among the greatest treasures a brass dragon can possess.\nBrass dragons conceal their hoards under mounds of sand or in secret places far from their primary lairs. They have no trouble remembering where their treasure is buried, and therefore have no need for maps. Adventurers and wanderers should be wary if they happen across a chest hidden in an oasis or a treasure cache tucked away in a half-buried desert ruin, for these might be parts of a brass dragon’s hoard.",
    environment: ""


}


function toXML(stateObject){
    let xmlDocumentString= "";
    xmlDocumentString+="<monster>\n"
    if(stateObject.name){
        xmlDocumentString+="<name>"+stateObject.name+"</name>\n"
    }else{
        console.error("no name given");
    }
    if(stateObject.size){
        xmlDocumentString+= "<size>"+stateObject.size+"</size>\n"
    }
    if(stateObject.type){
        xmlDocumentString+= "<type>"+stateObject.type+"</type>\n"
    }
    if(stateObject.alignment){
        xmlDocumentString+= "<alignment>"+stateObject.alignment+"</alignment>\n"
    }
    if(stateObject.ac){
        xmlDocumentString+= "<ac>"+stateObject.ac+"</ac>\n"
    }
    if(stateObject.hp){
        xmlDocumentString+= "<hp>"+stateObject.hp+"</hp>\n"
    }
    if(stateObject.speed){
        xmlDocumentString+= "<speed>"+stateObject.speed+"</speed>\n"
    }
    if(stateObject.stats.str){
        xmlDocumentString+= "<str>"+stateObject.stats.str+"</str>\n"
    }
    if(stateObject.stats.dex){
        xmlDocumentString+= "<dex>"+stateObject.stats.dex+"</dex>\n"
    }
    if(stateObject.stats.con){
        xmlDocumentString+= "<con>"+stateObject.stats.con+"</con>\n"
    }
    if(stateObject.stats.int){
        xmlDocumentString+= "<int>"+stateObject.stats.int+"</int>\n"
    }
    if(stateObject.stats.wis){
        xmlDocumentString+= "<wis>"+stateObject.stats.wis+"</wis>\n"
    }
    if(stateObject.stats.cha){
        xmlDocumentString+= "<cha>"+stateObject.stats.cha+"</cha>\n"
    }

    //saves is trickier than the rest
    if(stateObject.saves){
        xmlDocumentString+= "<saves>"+stateObject.saves+"</saves>\n"
    }
    //same with skills
    if(stateObject.skills){
        xmlDocumentString+= "<skills>"+stateObject.skills+"</skills>\n"
    }
    //also res,immune, and vuln

    if(stateObject.senses){
        xmlDocumentString+= "<senses>"+stateObject.senses+"</senses>\n"
    }
    if(stateObject.passive){
        xmlDocumentString+= "<passive>"+stateObject.passive+"</passive>\n"
    }
    if(stateObject.languages){
        xmlDocumentString+= "<languages>"+stateObject.languages+"</languages>\n"
    }
    if(stateObject.cr){
        xmlDocumentString+= "<cr>"+stateObject.cr+"</cr>\n"
    }
    //traits actions and legendary?
    //finish xml
    xmlDocumentString+="</monster>"
    console.log(xmlDocumentString)
    //do stuff with it now!
}
toXML(sampleState);