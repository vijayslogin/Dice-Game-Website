function throwDice() {
    /*
    Create 2 rendom numbers - img1 img2
    change the SRC of img tags
    <img class="img1" src="./images/dice6.png" alt="">
    */

    // Player 1 logic
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    console.log("randomNumber1 >> " + randomNumber1);
    var randomImageSource1 = "images/dice" + randomNumber1 +".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


    // Player 2 logic
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log("randomNumber2 >> " + randomNumber2);
    var randomImageSource2 = "images/dice" + randomNumber2 +".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    // Show message sho won 
    if(randomNumber1 > randomNumber2) {
        document.querySelector("h2").innerHTML = "🚩 Player 1 Wins..!";
    }else if(randomNumber1 < randomNumber2) {
        document.querySelector("h2").innerHTML = "Player 2 Wins..! 🚩";
    }else {
        document.querySelector("h2").innerHTML = "It's a Draw..!";
    }
}