on("chat:message", function(msg) {
  if(msg.type == "api" && msg.content.indexOf("!attr ") !== -1) {
    var dg = msg.content.replace("!attr ", "");
    
    if ( dg == 0 ) {
        groupNumber = 0;
        effectDie = "none";
    } else if ( dg >= 1 && dg <= 4 ) {
        groupNumber = 1;
        effectDie = "1d3";
    } else if ( dg >= 5 && dg <= 14 ) {
        groupNumber = 2;
        effectDie = "1d6";
    } else if ( dg >= 15 && dg <= 24 ) {
        groupNumber = 3;
        effectDie = "1d10";
    } else if ( dg >= 25 && dg <= 34 ) {
        groupNumber = 4;
        effectDie = "2d6";
    } else if ( dg >= 35 && dg <= 44 ) {
        groupNumber = 5;
        effectDie = "2d10";
    } else if ( dg >= 45 && dg <= 54 ) {
        groupNumber = 6;
        effectDie = "2d10+1";
    } else if ( dg >= 55 && dg <= 64 ) {
        groupNumber = 7;
        effectDie = "2d10+2";
    } else if ( dg >= 65 && dg <= 74 ) {
        groupNumber = 8;
        effectDie = "2d10+2";
    } else if ( dg >= 75 ) {
        groupNumber = 9; 
        effectDie = "2d10+2";
    }
    
    ast = Math.floor ( dg / 2);
    cst = Math.round (dg / 3);

    sendChat(msg.who,"attribute value of " + dg + ": group " + groupNumber + ", effect die " + effectDie + ", AST " + ast + ", CST " + cst);
    
    // uncomment to automatically roll the effect die
    // sendChat(msg.who, "/roll " + effectDie);
  }
});
