"use strict"


import { Player } from './Player.js'
let boxes = document.querySelectorAll('.box3');

let containerBox = document.querySelector('.container-box');
let lightBox = document.getElementById('light-box');


let x = `<h2 class="x neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle">X</h2>`;
let o = `<h2 class="o neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle">O</h2>`;
let xTurn = true;
let container = [];
let count = 0;
container.length = 9;

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
let index;
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
            
            if (container[i] == false) 
                {
                    boxes[i].innerHTML = x;
                    container[i] = 'X';
                    count++;
                    xTurn = !xTurn;
                    document.querySelector('.result span').innerHTML = `${xTurn?'X':'O'}`;
            }

            if (isWin() == true) {


                if (position == 'v') {
                    if (index == 0) {
                        document.querySelector('.wV1').style.height = '100%';

                    }
                    if (index == 1) {
                        document.querySelector('.wV2').style.height = '100%';

                    }
                    if (index == 2) {
                        document.querySelector('.wV3').style.height = '100%';

                    }


                }
                if (position == 'h') {
                    if (index == 0) {
                        document.querySelector('.wH1').style.width = '100%'
                    }
                    if (index == 3) {
                        document.querySelector('.wH2').style.width = '100%'
                    }
                    if (index == 6) {
                        document.querySelector('.wH3').style.width = '100%'
                    }

                }

                if (position == 'mD') {
                    let st = document.getElementById('game3');
                    st.style.setProperty('--beforeBack', '141.42%');


                    
                }
                if (position == 'sD') {

                    let st = document.getElementById('game3');
                    // let css_of_after = window.getComputedStyle(st,'::after');
                    st.style.setProperty('--afterBack', '141.42%')
                }


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
            else if (count == 9 && !isWin()) {

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
        else 
        {


            if (container[i] == false) {
                boxes[i].innerHTML = o;
                container[i] = 'O';
                count++;
                xTurn = !xTurn;
                document.querySelector('.result span').innerHTML = `${xTurn?'X':'O'}`;


            }
            if (isWin() == true) {

                if (position == 'v') {
                    if (index == 0) {
                        document.querySelector('.wV1').style.height = '100%';

                    }
                    if (index == 1) {
                        document.querySelector('.wV2').style.height = '100%';

                    }
                    if (index == 2) {
                        document.querySelector('.wV3').style.height = '100%';

                    }


                }
                if (position == 'h') {
                    if (index == 0) {
                        document.querySelector('.wH1').style.width = '100%'
                    }
                    if (index == 3) {
                        document.querySelector('.wH2').style.width = '100%'
                    }
                    if (index == 6) {
                        document.querySelector('.wH3').style.width = '100%'
                    }

                }

                if (position == 'mD') {
                    let st = document.getElementById('game3');
                    // let css_of_before = window.getComputedStyle(st,'::before');
                    st.style.setProperty('--beforeBack', '141.42%')

                }
                if (position == 'sD') {

                    let st = document.getElementById('game3');
                    // let css_of_after = window.getComputedStyle(st,'::after');
                    st.style.setProperty('--afterBack', '141.42%')
                }



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
            else if (count == 9 && !isWin()) {
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
    for (i = 0; i <= 6; i += 3) {
        if (container[i] == container[i + 1] &&
            container[i] == container[i + 2] &&
            (container[i] == 'X' || container[i] == 'O')) {
            char = container[i];
            index = i;
            position = 'h'
            return true;
        }
    }
    for (i = 0; i <= 2; i++) {
        if (container[i] == container[i + 3] &&
            container[i] == container[i + 6] &&
            (container[i] == 'X' || container[i] == 'O')) {
            char = container[i];
            index = i;
            position = 'v'
            return true;
        }
    }
    i = 0;
    if (container[i] == container[i + 4] &&
        container[i] == container[i + 8] &&
        (container[i] == 'X' || container[i] == 'O')) {
        char = container[i];
        index = i;
        position = 'mD'
        return true;
    }
    i = 2
    if (container[i] == container[i + 2] &&
        container[i] == container[i + 4] &&
        (container[i] == 'X' || container[i] == 'O')) {
        char = container[i];
        index = i;
        position = 'sD'
        return true;

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

    count = 0;
    xNewTurn = !xNewTurn;
    xTurn = xNewTurn;

    document.querySelector('.wV1').style.height = '0%';
    document.querySelector('.wV2').style.height = '0%';
    document.querySelector('.wV3').style.height = '0%';

    document.querySelector('.wH1').style.width = '0%';
    document.querySelector('.wH2').style.width = '0%';
    document.querySelector('.wH3').style.width = '0%';

    let st = document.getElementById('game3');
    st.style.setProperty('--beforeBack', '0%');

    let st2 = document.getElementById('game3');
    st.style.setProperty('--afterBack', '0%');

}

function setLightBox() {
    $('#container-box').hide();
    lightBox.style.width = 0;
    lightBox.style.height = 0;
    document.querySelector('#light-box .content').style.scale = 0;

}