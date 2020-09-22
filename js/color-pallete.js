const mPart = document.querySelector('#countColors');
const shSelect = document.querySelector('#numShades');
const colSelect = document.querySelector('#numColors');
console.log(mPart);


function generate() {
    mPart.innerHTML = '';
    console.log(mPart);
    console.log(shSelect.value);
    console.log(colSelect.value);
    for (let i = 0; i < shSelect.value; i++) {
        mPart.innerHTML += '<div class="row justify-content-center">';
        // mPart.innerHTML = mPart.innerHTML.slice(0, -7);
        // console.log(mPart.innerHTML);
        for (let k = 1; k <= colSelect.value; k++) {
            mPart.innerHTML += `<div class="col"><input type="color" name="colorMain" class="round" value="#00ff00" id="${i}shadeOf${k}Color" /><input type="text" readonly value="#444444" id="${i}label${k}"></div>`; 
            //  ${i}shadeOf${k}Color
            // document.querySelector(`#${i}shadeOf${k}Color`).addEventListener('click', console.log('sdga'));
        };
        // mPart.innerHTML +='</div>';       

    }
    let inputArr = document.querySelectorAll('input');
    
    
}

function colorize(){
    let inputArr = document.querySelectorAll('input');
}
// inputArr[1].attributes.value - current color
// inputArr[1].style.backgroundColor = '#ff0000';
// numCol, numShad
$(function(){
    $('#test').click()
});

document.querySelector('#generate').addEventListener('click', generate);