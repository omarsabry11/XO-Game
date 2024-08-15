"use strict"


import { Player } from './Player.js'

let boxes = document.querySelectorAll('.box4');

let containerBox = document.querySelector('.container-box');
let lightBox = document.getElementById('light-box');


let x = `<h2 class="x neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle text-white">X</h2>`;
let o = `<h2 class="o neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle text-white">O</h2>`;
let xTurn = true;
let container = [];
let count = 0;
container.length = 16;

let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');


let player1 = new Player();
let player2 = new Player();

player1.score = 0;
player2.score = 0;




for (let i = 0; i < container.length; i++) {
    container[i] = false;
}



let flag = false;
let char;
let position;
let index1
let index2;
let xNewTurn = true;



$("#container-box").hide();


$('#play-again .yes').on('click', function () {
    document.getElementById('play-again').classList.replace('d-flex', 'd-none');
    document.getElementById('same-players').classList.replace('d-none', 'd-flex');
    reset();

})

$('#same-players .yes').on('click', function () {

    document.getElementById('play-again').classList.replace('d-none', 'd-flex');
    document.getElementById('same-players').classList.replace('d-flex', 'd-none');
    $("#container-box").hide();
})
$('#same-players .no').on('click', function () {

    document.getElementById('play-again').classList.replace('d-none', 'd-flex');
    document.getElementById('same-players').classList.replace('d-flex', 'd-none');
    player1.score = 0;
    player2.score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    $("#container-box").hide();
})



document.querySelector('.result span').innerHTML = `X`;








for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {

        if (xTurn) {

            if (container[i] == false) {
                boxes[i].innerHTML = x;
                container[i] = 'X';
                count++;
                xTurn = !xTurn;
                document.querySelector('.result span').innerHTML = `${xTurn ? 'X' : 'O'}`;



            }
            if (isWin() == true) {

                setWinLines();

                player1.score++;
                score1.textContent = player1.score;
                setLightBox();
                document.querySelector('#light-box h2.sign').innerHTML = "X";
                document.querySelector('#light-box h2.status').innerHTML = "Winner";
                document.querySelector('#light-box h2.sign').style.color = '#08aaaa'




                $("#container-box").delay(550).show(0, function () {

                    $('#light-box').animate({ width: '22rem', height: '18rem' }, function () {
                        $('#light-box .content').animate({ scale: 1 }, 300);
                    });

                });

                for (let i = 0; i < container.length; i++) {
                    container[i] = true;
                }

            }
            else if (count == 16 && !isWin()) {

                setLightBox();
                document.querySelector('#light-box h2.sign').innerHTML = "";
                document.querySelector('#light-box h2.status').innerHTML = "Draw";
                $("#container-box").delay(300).show(0, function () {

                    $('#light-box').animate({ width: '22rem', height: '15rem' }, function () {
                        $('#light-box .content').animate({ scale: 1 }, 300);
                    });

                });
            }


        }
        else {


            if (container[i] == false) {
                boxes[i].innerHTML = o;
                container[i] = 'O';
                count++;
                xTurn = !xTurn;
                document.querySelector('.result span').innerHTML = `${xTurn ? 'X' : 'O'}`;




            }
            if (isWin() == true) {
                setWinLines();

                player2.score++;
                score2.textContent = `${player2.score}`;
                setLightBox();

                document.querySelector('#light-box h2.sign').innerHTML = "O";
                document.querySelector('#light-box h2.status').innerHTML = "Winner";
                document.querySelector('#light-box h2.sign').style.color = '#e36464'
                $("#container-box").delay(550).show(0, function () {

                    $('#light-box').animate({ width: '22rem', height: '18rem' }, function () {
                        $('#light-box .content').animate({ scale: 1 }, 300);
                    });

                });

                for (let i = 0; i < container.length; i++) {
                    container[i] = true;
                }
            }
            else if (count == 16 && !isWin()) {
                setLightBox();
                document.querySelector('#light-box h2.sign').innerHTML = "";
                document.querySelector('#light-box h2.status').innerHTML = "Draw";
                $("#container-box").delay(300).show(0, function () {

                    $('#light-box').animate({ width: '22rem', height: '15rem' }, function () {
                        $('#light-box .content').animate({ scale: 1 }, 300);
                    });

                });

            }

        }

    })
}








function isWin() {
    let i;

    for (i = 0; i < 16; i += 4) {
        for (let j = i; j <= i + 1; j++) {
            if (container[j] == container[j + 1] &&
                container[j] == container[j + 2] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];

                position = 'h';
                index1 = i;
                index2 = j;
                return true;
            }
        }

    }

    for (i = 0; i < 4; i++) {
        for (let j = i; j <= i + 4; j += 4) {
            if (container[j] == container[j + 4] &&
                container[j] == container[j + 8] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];
                position = 'v';
                index1 = i;
                index2 = j;

                return true;
            }
        }

    }


    for (i = 0; i <= 4; i += 4) {
        for (let j = i; j <= i + 1; j++) {
            if (container[j] == container[j + 5] &&
                container[j] == container[j + 10] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];
                position = 'mD';
                index1 = i;
                index2 = j;

                return true;
            }
        }

    }
    for (i = 3; i <= 7; i += 4) {
        for (let j = i; j > i - 2; j--) {
            if (container[j] == container[j + 3] &&
                container[j] == container[j + 6] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];

                position = 'sD';
                index1 = i;
                index2 = j;

                return true;
            }
        }

    }

    return false;
}



function reset() {
    for (let i = 0; i < container.length; i++) {
        container[i] = false;
    }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
    }
    document.querySelector('.wH').style.width = '0%';
    document.querySelector('.wH').style.left = '0';

    document.querySelector('.wV').style.height = '0%';
    document.querySelector('.wV').style.top = '0';

    document.querySelector('.mD').style.height = '0%'
    document.querySelector('.mD').style.top = '0';
    document.querySelector('.mD').style.left = '0';
    
    document.querySelector('.sD').style.height = '0%';
    document.querySelector('.sD').style.top = '0';
    document.querySelector('.sD').style.left = '100%';


    count = 0;
    xNewTurn = !xNewTurn;
    xTurn = xNewTurn;


}



function setLightBox() {
    $('#container-box').hide();
    lightBox.style.width = 0;
    lightBox.style.height = 0;
    document.querySelector('#light-box .content').style.scale = 0;

}


function setWinLines() {

    if (position == 'h') {
        if (index1 == 0) {
            document.querySelector('.wH').style.top = '12.5%';

            if (index2 == 1) {
                document.querySelector('.wH').style.top = '12.5%';
                document.querySelector('.wH').style.left = '25%';

            }

        }
        else if (index1 == 4) {
            document.querySelector('.wH').style.top = '37.5%';

            if (index2 == 5) {

                document.querySelector('.wH').style.left = '25%';

            }
        }
        else if (index1 == 8) {
            document.querySelector('.wH').style.top = '62.5%';


            if (index2 == 9) {

                document.querySelector('.wH').style.left = '25%';

            }
        }
        else if (index1 == 12) {
            document.querySelector('.wH').style.top = '87.5%';
            if (index2 == 13) {

                document.querySelector('.wH').style.left = '25%';

            }
        }

        document.querySelector('.wH').style.width = '75%';
    }

    else if (position == 'v') {
        if (index1 == 0) {
            document.querySelector('.wV').style.left = '12.5%'
            if (index2 == 4) 
            {
                document.querySelector('.wV').style.top = '25%'
            }
        }
        else if(index1 == 1)
        {
            document.querySelector('.wV').style.left = '37.5%';
            if(index2 == 5)
            {
            document.querySelector('.wV').style.top = '25%';

            }
        }
        else if(index1 == 2)
        {
            document.querySelector('.wV').style.left = '62.5%';
            if(index2 == 6)
            {
            document.querySelector('.wV').style.top = '25%';

            }
        }
        else if(index1 == 3)
        {
            document.querySelector('.wV').style.left = '87.5%';
            if(index2 == 7)
            {
            document.querySelector('.wV').style.top = '25%';

            }
        }
    document.querySelector('.wV').style.height = '75%';


    }

    else if(position == 'mD')
    {
        if(index1 == 0)
        {
            document.querySelector('.mD').style.top = '0%';
            if(index2 == 1)
            {
                document.querySelector('.mD').style.left = '25%';

            }
        }
        else if(index1 == 4)
        {
            document.querySelector('.mD').style.top = '25%';
            if(index2 == 5)
            {
                document.querySelector('.mD').style.left = '25%';
            }
        }
      

        document.querySelector('.mD').style.height = '104%'
    }

    else if(position == 'sD')
    {
        if(index1 == 3)
        {
            document.querySelector('.sD').style.top = '0%';
            if(index2 == 3)
            {
                document.querySelector('.sD').style.left = '100%';

            }
            else if(index2 == 2)
            {
                document.querySelector('.sD').style.left = '75%';

            }

        }
        
        if(index1 == 7)
        {
            document.querySelector('.sD').style.top = '25%';
            if(index2 == 7)
            {
                document.querySelector('.sD').style.left = '100%';

            }
            else if(index2 == 6)
            {
                document.querySelector('.sD').style.left = '75%';

            }

        }
        


        document.querySelector('.sD').style.height = '104%'

    }

}