const Player1 = 'X';
const Player2 = 'O';
let player1Turn = true;

const gridItems = Array.from(document.querySelectorAll('.grid-item'))

gridItems.forEach(item => {
    item.addEventListener('click', event => {
        //handle click
        if (item.innerHTML.length === 0) {
            if (player1Turn) {
                item.innerHTML = Player1;
                player1Turn = false;
                document.getElementById('playerTurn').innerHTML = "Player 2 Turn";
            } else {
                item.innerHTML = Player2;
                player1Turn = true;
                document.getElementById('playerTurn').innerHTML = "Player 1 Turn";

            }
        }

    })
})

function reset() {
    gridItems.forEach(item => {
        item.innerHTML = "";

    })
    document.getElementById('playerTurn').innerHTML = "Player 1 Turn";

    player1Turn = true;
}




