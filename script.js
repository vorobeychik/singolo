const BUTTON = document.getElementById('buttons');
const BLACK__DISPLAY = document.getElementById('display');
const BLACK__HORIZONTAL__DISPLAY = document.getElementById('horizont__phone__display');
const NAV__LI = document.getElementById('nav');
const PIC = document.getElementById('picture__container');
const FORMA = document.getElementById('forms');
const ITEMS = document.getElementById('slider');
const IMAGES = ITEMS.querySelectorAll('div');
const RIGHT = ITEMS.querySelector('.right__chev');
const LEFT = ITEMS.querySelector('.left__chev');
const sliderbg = document.getElementById('sliderbg');


let sliderIndex = 0;

function slider(index) {

    if (index > IMAGES.length - 1) {
        sliderIndex = 0;
    }
    if (index < 0) {
        sliderIndex = IMAGES.length - 1;
    }
    for (let i = 0; i < IMAGES.length; i++) {
        IMAGES[i].style.display = 'none';
    }

    if(sliderIndex === 1 )
    {sliderbg.style.backgroundColor = '#648BF0';
     ITEMS.style.backgroundColor = '#648BF0'
        BLACK__HORIZONTAL__DISPLAY.classList.toggle("horizont__phone__display__hidden")
        BLACK__DISPLAY.classList.toggle("black__display__hidden")
    }else{sliderbg.style.backgroundColor = '#f06c64'
        ITEMS.style.backgroundColor = '#f06c64'
    }
    IMAGES[sliderIndex].style.display = 'block';
}
LEFT.addEventListener('click', () => {
    slider(--sliderIndex)
});
RIGHT.addEventListener('click', () => {
    slider(++sliderIndex)
});


function vert__phone__display() {
    if(BLACK__DISPLAY.classList.contains("black__display__hidden")){ BLACK__DISPLAY.classList
        .toggle("black__display__visible")}
    if(BLACK__DISPLAY.classList.contains("black__display__visible")){ BLACK__DISPLAY.classList
        .toggle("black__display__hidden")}

}
function horizontal__phone__display() {
    if(BLACK__HORIZONTAL__DISPLAY.classList.contains("horizont__phone__display")){ BLACK__HORIZONTAL__DISPLAY.classList
        .toggle("horizont__phone__display__hidden")}
    if(BLACK__HORIZONTAL__DISPLAY.classList.contains("horizont__phone__display__hidden")){ BLACK__HORIZONTAL__DISPLAY.classList
        .toggle("horizont__phone__display")}
}
function navigation() {
    NAV__LI.addEventListener("click",(event)=>{


        NAV__LI.querySelectorAll('a').forEach(elem => elem.style.color = '#ffffff');
        event.target.style.color = '#bf5d59';

    })
}
function switches() {
 let arr = [];
 PIC.querySelectorAll('div').forEach(elem => {
     elem.id = Math.ceil(Math.random()*100)
     arr.push(elem.id)

     arr.sort();
 });
  for(let i of arr){
    let element = document.getElementById(i);
    PIC.insertBefore(element,PIC.firstChild)
  }

    console.log(arr)
}
function change__color() {
    BUTTON.addEventListener("click",(event)=>{

        BUTTON.querySelectorAll('button').forEach(elem => {
            elem.style.color = '#666d89';
            elem.style.border = ' 1px solid #666d89'});
        event.target.style.border = '1px solid #c5c5c5';
        event.target.style.color = '#c5c5c5';
    });
    console.log(BUTTON.querySelectorAll('button'));
    console.log(PIC.querySelectorAll('div'));

    switches();
}

PIC.addEventListener('click', event=>{
  PIC.querySelectorAll('div').forEach(elem => {
      elem.style.outline = ' 0px solid #666d89';
      event.target.style.outline = '5px solid #F06C64'
  })
})



document.querySelector('.form__button').addEventListener('click',event =>{
    event.preventDefault();
    let subject  = `${FORMA.subject.value.length === 0 ? 'Без темы':'Тема:'.concat(FORMA.subject.value)}`;
    let dicribe  =  `${FORMA.description.value.length === 0 ? 'Без описания':'Описание:'.concat(FORMA.description.value)}`;
    document.getElementsByClassName('modal__subject')[0].innerText = '12asdasd4';
    document.getElementById('modal').style.display='block';
    document.getElementsByClassName('modal__subject')[0].innerText = subject;
    document.getElementsByClassName('modal__description')[0].innerText = dicribe;

});
document.getElementById('close-too').addEventListener('click',event => {
    document.getElementById('modal').style.display='none'
});
document.getElementById('close').addEventListener('click',event => {
    document.getElementById('modal').style.display='none'
});


