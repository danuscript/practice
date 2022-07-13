function closestToTheMark(player1, player2) {
    const theMark = Math.floor(Math.random() * 100);
    console.log(`If theMark is ${theMark}...`);

    let difference1 = 0;
    let difference2 = 0;

    if ((theMark - player1) > 0) {
        difference1 = (theMark - player1);
    } else if ((theMark - player1) < 0) {
        difference1 = (player1 - theMark);
    } else if ((theMark - player1) == 0) {
        difference1 = 0;
    }

    if ((theMark - player2) > 0) {
        difference2 = (theMark - player2);
    } else if ((theMark - player2) < 0) {
        difference2 = (player2 - theMark);
    } else if ((theMark - player2) == 0) {
        difference2 = 0;
    }

    if (difference1 < difference2) {
        return "Player 1 is closest!"
    } else if (difference1 > difference2) {
        return "Player 2 is closest!"
    } else if (difference1 == difference2) {
        return ("It's a tie!")
    }


}

console.log(closestToTheMark(25, 75));