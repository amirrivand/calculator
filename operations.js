const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".btn__operation")
const screen = document.getElementById("screen");
const result = document.getElementById("result");
const operation = document.getElementById("operation");


let prev = 0;
let operate = undefined;

numBtns.forEach(el => {
    el.addEventListener("click", e => {

        e.preventDefault();

        if( screen.innerHTML === 0 || +screen.innerHTML === 0 ) {
            return screen.innerHTML = +e.target.innerHTML
        }
        
        if( screen.innerHTML !== 0 || 
            +screen.innerHTML !== 0 ||
            screen.innerHTML.lenght > 0
        ) {
            return  screen.innerHTML = screen.innerHTML.toString() + e.target.innerHTML.toString()
        }

    })
});

opBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();

        if(operate) {

            operateIt(operate);
            operate = e.target.innerHTML;
            operation.innerHTML = operate;

        } else {

            operate = e.target.innerHTML;
            operation.innerHTML = operate;

            if(prev) {
                operateIt(operate)
            } else {
                prev = +screen.innerHTML;
                result.innerHTML = +prev;
                screen.innerHTML = 0;
            }

        }

    });
});

function operateIt(o) {
    switch (o) {
        case "+":
            prev = prev + +screen.innerHTML;
            break;
        case "-":
            prev = prev - +screen.innerHTML;
            break;
        case "/":
            prev = prev / +screen.innerHTML;
            break;
        case "X":
            prev = prev * +screen.innerHTML;
            break;
        default:
            break;
    }
    screen.innerHTML = 0;
    result.innerHTML = prev;
}

const acBtn = document.getElementsByClassName('btn__ac')[0];
acBtn.addEventListener("click", () => {
    prev = 0;
    operate = undefined;
    operation.innerHTML = '';
    screen.innerHTML = 0;
    result.innerHTML = '';
});