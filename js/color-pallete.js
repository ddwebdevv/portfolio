const mPart = document.querySelector('#countColors');
const shSelect = document.querySelector('#numShades');
const colSelect = document.querySelector('#numColors');
let inputArr = [];
// let labelHexArr = [];
// let labelRgbArr = [];
let array = [];


function generate() {
    mPart.innerHTML = '';
    inputArr = [];
    // labelHexArr = [];
    // labelRgbArr = [];
    // array = [];
    // console.log(mPart);
    // console.log(shSelect.value);
    // console.log(colSelect.value);
    let htmlP = '';
    for (let i = 0; i < colSelect.value; i++) {
        htmlP += '<div class="row justify-content-center">';
        // mPart.innerHTML = mPart.innerHTML.slice(0, -7);
        // console.log(mPart.innerHTML);
        for (let k = 0; k < shSelect.value; k++) {
            htmlP += `<div class="col col-sm-2 mx-xs-2 p-2">                
            <div class="round1 input-group mx-auto"><input type="color" class="round invis form-control color${i}" value="#0000ff" data-colorn="${i}" data-indexn="${k}"></div>
            <label  class="mt-1 col-form-label clab">#0000ff</label>
            <label  class="mt-1 col-form-label clab">rgb(0, 0, 255)</label>
        </div>`; 
        
            //  ${i}shadeOf${k}Color
            // document.querySelector(`#${i}shadeOf${k}Color`).addEventListener('click', console.log('sdga'));
        };
        htmlP +='</div>';       

    }
    mPart.innerHTML = htmlP;    
    inputArr = document.querySelectorAll('input[type=color]');
    array = Array.from(inputArr); 
    // labelHexArr = document.querySelectorAll('label[class=hex]');
    // labelRgbArr = document.querySelectorAll('label[class=rgb]'); 
      
    // inputArr.forEach(input => { 
    //     input.addEventListener('click', colorizeInit);
    // });
    colorizeInit();
    
}

function colorizeInit(){
    console.log('init');
    if (document.querySelector('#sameColor').checked) {
        console.log("checked");
        inputArr.forEach(input => { 
            input.removeEventListener('change', colorizeSingle);
            input.removeEventListener('input', colorizeSingle);
            input.addEventListener('change', colorizeAllchild);
            input.addEventListener('input', colorizeAllchild);
            // input.value = input.parentNode.style.backgroundColor;
        });
    } else {
        console.log('not checked');
        inputArr.forEach(input => { 
            input.removeEventListener('change', colorizeAllchild);
            input.removeEventListener('input', colorizeAllchild);
            input.addEventListener('change', colorizeSingle);
            input.addEventListener('input', colorizeSingle);
            // input.value = input.parentNode.style.backgroundColor;
        });
    }
}

function colorizeSingle(e){
    console.log(e);
    colorize(e.target, e.target.value);
  
//  let i = () => {for (let i = 0; i < colSelect.value; i++) {
//     if (e.target.hasClass(`color${i}`))  return i;     
//     }
// }
}

function colorize(target, color) {
    // console.log(target.parentNode);
    // console.log(target.parentNode.nextElementSibling);
    // console.log(target.value);
    // console.log(target.dataset);
    // console.log(target.parentNode.style.backgroundColor);
    // console.log(target.parentNode.nextElementSibling.nextElementSibling);
    target.value = color;
    target.parentNode.style.backgroundColor = color;
    target.parentNode.nextElementSibling.innerHTML = color;
    target.parentNode.nextElementSibling.nextElementSibling.innerHTML = target.parentNode.style.backgroundColor;
    // console.log(target.parentNode.style.backgroundColor);
    // console.log(target.parentNode.nextElementSibling.innerHTML);
    // console.log(target.parentNode.nextElementSibling.nextElementSibling.innerHTML);
}

function colorizeAllchild(e){
    console.log(e.target.dataset.colorn);
    console.log(e.target.dataset.indexn);
    console.log(inputArr[3].dataset.colorn);
    // const index = inputArr.findIndex(e);
    // console.log(index);
    
    const current = array.filter( function(input) {
        if (input.dataset.colorn === e.target.dataset.colorn && input.dataset.indexn >= e.target.dataset.indexn) {
            return true;
        }
    });
    
    console.log('look here' + current);
    console.log(current);
    current.forEach(item => {
        console.log(e.target.style.color);
        console.log(e.target.value);

        colorize(item, e.target.value);
    });
}
// inputArr[1].attributes.value - current color
// inputArr[1].style.backgroundColor = '#ff0000';
// numCol, numShad


document.querySelector('#sameColor').addEventListener('change', colorizeInit);
document.querySelector('#generate').addEventListener('click', generate);