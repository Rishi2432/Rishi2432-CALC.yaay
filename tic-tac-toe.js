let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let retry = document.getElementById("retry_button");

let clicks = 0;
let symbols = ["X","O"];

one.addEventListener("click", ()=>{
    console.log("one clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    one.innerHTML = symbols[0];
}else{
    one.innerHTML = symbols[1];
}
})
two.addEventListener("click", ()=>{
    console.log("two clicked")
    clicks++;if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    two.innerHTML = symbols[0];
}else{
    two.innerHTML = symbols[1];
}
})
three.addEventListener("click", ()=>{
    console.log("three clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    three.innerHTML = symbols[0];
}else{
    three.innerHTML = symbols[1];
}
})
four.addEventListener("click", ()=>{
    console.log("four clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    four.innerHTML = symbols[0];
}else{
    four.innerHTML = symbols[1];
}
})
five.addEventListener("click", ()=>{
    console.log("five clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    five.innerHTML = symbols[0];
}else{
    five.innerHTML = symbols[1];
}
})
six.addEventListener("click", ()=>{
    console.log("six clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    six.innerHTML = symbols[0];
}else{
    six.innerHTML = symbols[1];
}
})
seven.addEventListener("click", ()=>{
    console.log("seven clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    seven.innerHTML = symbols[0];
}else{
    seven.innerHTML = symbols[1];
}
})
eight.addEventListener("click", ()=>{
    console.log("eight clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    eight.innerHTML = symbols[0];
}else{
    eight.innerHTML = symbols[1];
}
})
nine.addEventListener("click", ()=>{
    console.log("nine clicked")
    clicks++;
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
    nine.innerHTML = symbols[0];
}else{
    nine.innerHTML = symbols[1];
}
})

let clicks_counter =  addEventListener("click", ()=>{
    console.log("Clicks Counter :",clicks)
    if(clicks % 2 == 0){
    console.log("Clicks is divided by 2!!!")
}

let board = document.getElementById("winner");

    if(clicks > 0 ){
        // Top row horixontal win...
        if(one.innerHTML == symbols[0] && two.innerHTML == symbols[0] && three.innerHTML == symbols[0]){
            console.log("one, two and three are X!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(one.innerHTML == symbols[1] && two.innerHTML == symbols[1] && three.innerHTML == symbols[1]){
            console.log("one, two and three are O!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // Left column vertical win...
        if(one.innerHTML == symbols[0] && four.innerHTML == symbols[0] && seven.innerHTML == symbols[0]){
            console.log("one, two and three are X!!!!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(one.innerHTML == symbols[1] && four.innerHTML == symbols[1] && seven.innerHTML == symbols[1]){
            console.log("one, two and three are O!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // one to nine cross win...
        if(one.innerHTML == symbols[0] && five.innerHTML == symbols[0] && nine.innerHTML == symbols[0]){
            console.log("one, five and nine are X!!!!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(one.innerHTML == symbols[1] && five.innerHTML == symbols[1] && nine.innerHTML == symbols[1]){
            console.log("one, five and nine are O!!!!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // Three to seven cross win...
        if(three.innerHTML == symbols[0] && five.innerHTML == symbols[0] && seven.innerHTML == symbols[0]){
            console.log("Three, five and seven are X!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(three.innerHTML == symbols[1] && five.innerHTML == symbols[1] && seven.innerHTML == symbols[1]){
            console.log("Three, five and seven are O!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // Middle row horizontal win...
        if(four.innerHTML == symbols[0] && five.innerHTML == symbols[0] && six.innerHTML == symbols[0]){
            console.log("Four, five and six are X!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(four.innerHTML == symbols[1] && five.innerHTML == symbols[1] && six.innerHTML == symbols[1]){
            console.log("Four, five and six are O!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // Bottom row horizontal win...
        if(seven.innerHTML == symbols[0] && eight.innerHTML == symbols[0] && nine.innerHTML == symbols[0]){
            console.log("Seven, eight and nine are X!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(seven.innerHTML == symbols[1] && eight.innerHTML == symbols[1] && nine.innerHTML == symbols[1]){
            console.log("Seven, eight and nine are O!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // Middle vertical win...
        if(two.innerHTML == symbols[0] && five.innerHTML == symbols[0] && eight.innerHTML == symbols[0]){
            console.log("Two, five and eight are X!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(two.innerHTML == symbols[1] && five.innerHTML == symbols[1] && eight.innerHTML == symbols[1]){
            console.log("Two, five and eight are O!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
        // Right column vertical win...
        if(three.innerHTML == symbols[0] && six.innerHTML == symbols[0] && nine.innerHTML == symbols[0]){
            console.log("Three, six and nine are X!!!")
            board.innerHTML = "X Wins!!!"
            game_loop();
        }
        if(three.innerHTML == symbols[1] && six.innerHTML == symbols[1] && nine.innerHTML == symbols[1]){
            console.log("Three, six and nine are O!!!")
            board.innerHTML = "O Wins!!!"
            game_loop();
        }
    }
})

let game_loop = ()=>{
    retry.style.display = "flex";
}

retry.addEventListener("click",()=>{
    location.reload();
})

let td_clicked = document.getElementsByClassName("buttons")

for(let i = 0;i < td_clicked.length;i++){
    td_clicked[i].addEventListener("click",()=>{
    console.log("td clicked",td_clicked[i])
})
}



//for (let i = 0; i < td_clicked.length; i++) {
//    td_clicked[i].addEventListener("click", () => { // Changed "clicked" to "click"
//        console.log("td clicked", td_clicked[i]); // Log the specific element that was clicked
//    });
//}



