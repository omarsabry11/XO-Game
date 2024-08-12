"use strict"



let boxes = document.querySelectorAll('.box3');


let x = `<h2 class="x neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle text-white">X</h2>`;
let o = `<h2 class="o neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle text-white">O</h2>`;
let xTurn = true;
let container = [];
let count = 0;
container.length = 9;


console.log(container.length);


for (let i = 0; i < container.length; i++) {
    container[i] = false;
}


console.log(container);



let flag = false;
let char;
let position;
let index;
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




for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        console.log('hello');


        if (xTurn) {

            if (container[i] == false) {
                boxes[i].innerHTML = x;
                container[i] = 'X';
                count++;
                xTurn = !xTurn;


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

                if(position == 'mD')
                {
                    let st = document.getElementById('game3');
                    // let css_of_before = window.getComputedStyle(st,'::before');
                    st.style.setProperty('--beforeBack','141.42%')

                }
                if (position == 'sD') 
                {
             
                    let st = document.getElementById('game3');
                    // let css_of_after = window.getComputedStyle(st,'::after');
                    st.style.setProperty('--afterBack','141.42%')
                }
             
             


                document.querySelector('.result').innerHTML = `<h1 class=" text-white">${char} Win</h1>`;

            }
            else if (count == 9 && !isWin()) {
                document.querySelector('.result').innerHTML = `<h1 class=" text-white">Draw</h1>`;

            }


        }
        else {


            if (container[i] == false) {
                boxes[i].innerHTML = o;
                container[i] = 'O';
                count++;
                xTurn = !xTurn;



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
                
                if(position == 'mD')
                {
                    let st = document.getElementById('game3');
                    // let css_of_before = window.getComputedStyle(st,'::before');
                    st.style.setProperty('--beforeBack','141.42%')

                }
                if (position == 'sD') 
                {
             
                    let st = document.getElementById('game3');
                    // let css_of_after = window.getComputedStyle(st,'::after');
                    st.style.setProperty('--afterBack','141.42%')
                }
             
             


                document.querySelector('.result').innerHTML = `<h1 class=" text-white">${char} Win</h1>`;
            }
            else if (count == 9 && !isWin()) {
                document.querySelector('.result').innerHTML = `<h1 class=" text-white">Draw</h1>`;

            }

        }

    })
}


