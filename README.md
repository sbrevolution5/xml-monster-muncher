# XML Monster Muncher
I ran into a problem using the game master 5 app for 5th edition dnd, importing monsters from a third party source like Kobold press was tedious and difficult, when done manually.  The aim of this app is to make sure that you can insert the data into a form and get back the XML for the app.  
This is also my first ever Open source project, which I intend to use as a portfolio  example.

Currently the app works, but only handles 1 monster at a time.


## Example output
    <monster>
        <name>Aarakocra</name>
        <size>M</size>
        <type>humanoid (aarakocra)</type>
        <alignment>Neutral Good</alignment>
        <ac>12</ac>
        <hp>13 (3d8)</hp>
        <speed>walk 20 ft., fly 50 ft.</speed>
        <str>10</str>
        <dex>14</dex>
        <con>10</con>
        <int>11</int>
        <wis>12</wis>
        <cha>11</cha>
        <save></save>
        <skill>Perception +5</skill>
        <passive>15</passive>
        <languages>Auran, Aarakocra</languages>
        <cr>1/4</cr>
        <resist></resist>
        <immune></immune>
        <vulnerable></vulnerable>
        <conditionImmune></conditionImmune>
        <senses></senses>
        <trait>
            <name>Dive Attack</name>
        <text>If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target.</text>
        </trait>
        <action>
            <name>Talon</name>
        <text>Melee Weapon Attack: +4 to hit, reach 5 ft., one target. 4 (1d4 + 2) slashing damage.</text>
        <attack>Talon|+4|1d4+2</attack>
        </action>
        <action>
            <name>Javelin</name>
        <text>Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. 5 (1d6 + 2) piercing damage.</text>
        <attack>Javelin|+4|1d6+2</attack>
        </action>
        <action>
            <name>Summon Air Elemental</name>
        <text>Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.</text>
        </action>
        <description>Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.
    Enemies of Elemental Evil. In service to the Wind Dukes of Aaqa, aarakocra scout the planes in search of temples of Elemental Evil. They spy on malign elemental creatures and then either take the fight to those creatures or report back to the Wind Dukes.
    On the Material Plane, aarakocra create aeries atop the highest mountains, especially peaks near portals to the Elemental Plane of Air. From such heights, aarakocra watch for signs of elemental incursions, as well as for nascent threats to their home plane. Aarakocra prefer to live their lives like the wind-unburdened and ever moving-yet they watch over a region for years if that's what it takes to guard against the incursions of Elemental Evil.
    Aarakocra have no concept of political borders or property ownership, and the value of gems, gold, and other precious materials means little to aarakocra. In their eyes, a creature should use what is necessary and then cast what is left on the wind for others to use.
    Search for the Seven Shards. The Wind Dukes of Aaqa come from a race of elemental beings called the vaati, which once ruled many worlds. A creature known as the Queen of Chaos arose and initiated an interplanar war against vaati rule. To combat the threat, seven vaati heroes combined their powers to create the mighty Rod of Law. In a battle against the queen's greatest general, Mishka the Wolf Spider, a vaati killed Mishka by thrusting the rod into him like a spear. The rod shattered into seven shards that scattered across the multiverse. Aaracokra seek signs of the pieces' locations in order to rebuild what is now known as the Rod of Seven Parts.
    Summoning Air Elementals. 
    ------
    Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance, the elemental appears in an unoccupied space within 60 feet of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour, until it or all its summoners die, or until any of its summoners dismisses it as a bonus action. A summoner can't perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air, any aarakocra within 5 feet of it can return with it.
    ------
    Source: Monster Manual p. 12, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden</description>
        <environment>mountain</environment>
        </monster>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
