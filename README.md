# roll20-aftermath
Scripts for FGU's Aftermath! on roll20.net

# attr.js

In the chat window, invoke

`!attr 15`

and the bot will respond:

`attribute value of 15: group 3, effect die 1d10, AST 7, CST 5`

# bdg.js

In the chat window, invoke 

`!bdg 21`

and the bot will respond:

`bdg 21 = 3d10+2`

# criticalMiss.js

This roll only works for GMs, since due to cookoffs, on the GM should initially know the result.  In the chat window, invoke

`!cm`

and the bot will whisper to the GM:

`(From Critical Miss Roll): rolled 25: Dud round. Autoloaders/autoweapons require 1 action to manually clear the round. Other types clear with the next round, no special action necessary.`

# Hit Location Tables

You can create a nice hit location button for you and your players by creating a rollable table.  When you click the button, hit location is rolled and shown in the chat window:

# image1

Here are the steps:

1. Load the two required dependency scripts:

- recursiveTables.js 
- exportableTables.js

# links

2. In hit-location and hit-location-quad, you'll find commands that you copy/paste into your chat window (as GM) that will recreate the rollable tables (including the images).

3. Modify the table so that it can be used by players.

# image2

4. Then create the following macro:

# image3

Copy/pasteable text for hit-location:

`!rt[showicons:true|iconlabel:on|iconscale:25.0em] [[ 1t[hit-location] ]]`

for hit-location-quad:

`!rt[showicons:true|iconlabel:on|iconscale:25.0em] [[ 1t[hit-location] ]]`

