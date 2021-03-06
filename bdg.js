on("chat:message", function(msg) {
  if(msg.type == "api" && msg.content.indexOf("!bdg ") !== -1) {
    var bdg = msg.content.replace("!bdg ", "");
    
    // round up for number dice
    numDice = Math.ceil ( bdg / 10);
    
    // round nearest for adds
    diceAdd = Math.round ( bdg / 10);
    
    diceString = numDice + "d10+" + diceAdd;

    sendChat(msg.who,"bdg " + bdg + " = " + diceString);
    
    // uncomment this to roll the dice as well
    // sendChat(msg.who, "/roll " + diceString);
  }
});
