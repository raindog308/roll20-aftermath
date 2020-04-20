on("chat:message", function(msg) {
  if(msg.type == "api" && msg.content.indexOf("!cm") !== -1) {
    if ( playerIsGM() == true ) {
    
        var roll = randomInteger(100);
    
        if ( roll <= 10 ) {
            sendChat("Critical Miss Roll", "/w gm rolled " + roll + ": No effect.")
        } else if ( roll >= 11 && roll <= 40 ) {
            sendChat("Critical Miss Roll", "/w gm rolled " + roll + ": Dud round. Autoloaders/autoweapons require 1 action to manually clear the round.  Other types clear with the next round, no special action necessary.");
        } else if ( roll >= 41 && roll <= 70 ) {
            sendChat("Critical Miss Roll", "/w gm rolled " + roll + ": Jammed round.  Requires 2 actions to clear manually.  A weapon with an extractor will clear in 1 action.");
        } else if ( roll >= 71 && roll <= 85 ) {
            sendChat("Critical Miss Roll", "/w gm rolled " + roll + ": Cook-off.  Appears to be a dud round.  Will go off on bookkeeping phase. 50% to chamber explode before action phase 0.");
        } else if ( roll >= 86 && roll <= 95 ) {
            sendChat("Critical Miss Roll", "/w gm rolled " + roll + ": Chamber explosion.  Burst effect is BDG of the round/30, nearest.");
        } else {
            sendChat("Critical Miss Roll", "/w gm rolled " + roll + ": Chamber explosion.  Burst effect is BDG of the round/30, nearest.");
        }
    } else {
        sendChat("Critical Miss Roll","/w " + msg.who + " this function is for the GM only");
    }
  }
});

    
