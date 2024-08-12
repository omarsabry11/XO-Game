"use strict"



let boxes = document.querySelectorAll('.box5');


let x = `<h2 class="x neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle text-white">X</h2>`;
let o = `<h2 class="o neon-text m-0 p-0 position-absolute top-50 start-50 translate-middle text-white">O</h2>`;
let xTurn = true;
let container = [];
let count = 0;
container.length = 25;


console.log(container.length);


for (let i = 0; i < container.length; i++) {
    container[i] = false;
}


console.log(container);



let flag = false;
let char;
function isWin() {
    let i;


    for (i = 0; i < 25; i += 5) {
        for (let j = i; j <= i + 2; j++) {
            if (container[j] == container[j + 1] &&
                container[j] == container[j + 2] &&
                container[j] == container[j + 3] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];
                return true;
            }
        }

    }

    for (i = 0; i < 5; i++) {
        for (let j = i; j <= i + 10; j += 5) {
            if (container[j] == container[j + 5] &&
                container[j] == container[j + 10] &&
                container[j] == container[j + 15] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];
                return true;
            }
        }

    }


    for (i = 0; i <= 5; i += 5) {
        for (let j = i; j <= i + 2; j++) {
            if (container[j] == container[j + 6] &&
                container[j] == container[j + 12] &&
                container[j] == container[j + 18] &&
                (container[j] == 'X' || container[j] == 'O')) {
                char = container[j];
                return true;
            }
        }

    }

    for(i = 4;i<=9;i+=5)
        {
            for(let j=i;j>i-2;j--)
            {
                if(container[j]==container[j+4]&&
                    container[j]==container[j+8]&&
                    container[j]==container[j+12]&&
                    (container[j]=='X' || container[j]=='O'))
                    {
                        char = container[j];
                        return true;
                    }
            }
            
        }
    // for (i = 0; i < 25; i += 5) {
    //     for (let j = i; j <= i + 3; j++) {
    //         if (container[j] == container[j + 1] &&
    //             container[j] == container[j + 2] &&
    //             (container[j] == 'X' || container[j] == 'O')) {
    //             char = container[j];
    //             return true;
    //         }
    //     }

    // }

    // for (i = 0; i < 5; i++) {
    //     for (let j = i; j <= i + 10; j += 5) {
    //         if (container[j] == container[j + 5] &&
    //             container[j] == container[j + 10] &&
    //             (container[j] == 'X' || container[j] == 'O')) {
    //             char = container[j];
    //             return true;
    //         }
    //     }

    // }


    // for (i = 0; i <= 10; i += 5) {
    //     for (let j = i; j <= i + 2; j++) {
    //         if (container[j] == container[j + 6] &&
    //             container[j] == container[j + 12] &&
    //             (container[j] == 'X' || container[j] == 'O')) {
    //             char = container[j];
    //             return true;
    //         }
    //     }

    // }

    // for(i = 4;i<=14;i+=5)
    //     {
    //         for(let j=i;j>i-3;j--)
    //         {
    //             if(container[j]==container[j+4]&&
    //                 container[j]==container[j+8]&&
    //                 (container[j]=='X' || container[j]=='O'))
    //                 {
    //                     char = container[j];
    //                     return true;
    //                 }
    //         }
            
    //     }




    return false;
}

console.log(boxes.length);



for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {

        if (xTurn) {

            if (container[i] == false) {
                boxes[i].innerHTML = x;
                container[i] = 'X';
                count++;
                xTurn = !xTurn;


            }
            if (isWin() == true) {

                document.querySelector('.result').innerHTML = `<h1 class=" text-white">${char} Win</h1>`;

            }
            else if (count == 25 && !isWin()) {
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

                document.querySelector('.result').innerHTML = `<h1 class=" text-white">${char} Win</h1>`;
            }
            else if (count == 25 && !isWin()) {
                document.querySelector('.result').innerHTML = `<h1 class=" text-white">Draw</h1>`;

            }

        }

    })
}


