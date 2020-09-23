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
    labelHexArr = [];
    labelRgbArr = [];
    // array = [];
    console.log(mPart);
    console.log(shSelect.value);
    console.log(colSelect.value);
    let htmlP = '';
    for (let i = 0; i < colSelect.value; i++) {
        htmlP += '<div class="row justify-content-center">';
        // mPart.innerHTML = mPart.innerHTML.slice(0, -7);
        // console.log(mPart.innerHTML);
        for (let k = 0; k < shSelect.value; k++) {
            htmlP += `<div class="col mx-2 p-2">                
            <div class="round1 input-group mx-auto"><input type="color" class="round invis form-control color${i}" value="#00ff00" data-colorn="${i}" data-indexn="${k}"></div>
            <label for="" class="mt-1 col-form-label data-colorn="${i} hex" data-indexn="${k}">#0000ff</label>
            <label for="" class="mt-1 col-form-label data-colorn="${i} rgb" data-indexn="${k}">rgb(0, 0, 255)</label>
        </div>`; 
        
            //  ${i}shadeOf${k}Color
            // document.querySelector(`#${i}shadeOf${k}Color`).addEventListener('click', console.log('sdga'));
        };
        htmlP +='</div>';       

    }
    mPart.innerHTML = htmlP;    
    inputArr = document.querySelectorAll('input[type=color]');
    labelHexArr = document.querySelectorAll('label[class=hex]');
    labelRgbArr = document.querySelectorAll('label[class=rgb]'); 
    array = Array.from(inputArr);   
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
            input.addEventListener('change', colorizeAll);
            input.addEventListener('input', colorizeAll);
        });
    } else {
        console.log('not checked');
        inputArr.forEach(input => { 
            input.addEventListener('change', colorizeSingle);
            input.addEventListener('input', colorizeSingle);
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
    
    target.parentNode.style.backgroundColor = color;
    target.parentNode.nextElementSibling.innerHTML = color;
    target.parentNode.nextElementSibling.nextElementSibling.innerHTML = target.parentNode.style.backgroundColor;
    // console.log(target.parentNode.style.backgroundColor);
    // console.log(target.parentNode.nextElementSibling.innerHTML);
    // console.log(target.parentNode.nextElementSibling.nextElementSibling.innerHTML);
}

function colorizeAll(e){
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
$(function(){
   
});
document.querySelector('#sameColor').addEventListener('change', colorizeInit);
document.querySelector('#generate').addEventListener('click', generate);