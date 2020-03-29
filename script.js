const BUTTON = document.getElementById('buttons');
const BLACK__DISPLAY = document.getElementById('display');
const BLACK__HORIZONTAL__DISPLAY = document.getElementById('horizont__phone__display');
const NAV__LI = document.getElementById('nav');
const PIC = document.getElementById('picture__container');
const FORMA = document.getElementById('forms');
const ITEMS = document.getElementById('slider');
const LEFT = document.getElementsByClassName('b-carousel__prev')[0];
const RIGHT = document.getElementsByClassName('b-carousel__next')[0];
const BG = document.getElementById('sliderbg');
const BURGER = document.getElementById('burger__button');
const BURGER__MENU = document.querySelector('.burger')
const BURGER2 = document.getElementById('burger__button2');
const SEC = document.querySelectorAll('section')

let state = false;
BURGER.addEventListener("click",event => {
    BURGER__MENU.classList.remove('burger');
    BURGER__MENU.classList.add('navigation__burger');
    BURGER2.classList.add('rotate')
    BURGER__MENU.style.top = `${window.scrollY + 20}px`
    document.body.classList.toggle('block')

});
BURGER2.addEventListener("click",event => {
    BURGER__MENU.classList.remove('navigation__burger');
    BURGER__MENU.classList.add('burger');
    document.body.classList.toggle('block')

});

document.addEventListener('scroll',scroling);

function scroling() {
      const POSITION = window.scrollY;
      SEC.forEach( (e,i) => {
          if(e.offsetTop - 100 <= POSITION   && (e.offsetHeight + e.offsetTop - 100)> POSITION){
              NAV__LI.querySelectorAll('a').forEach(elem => elem.style.color = '#ffffff');
              NAV__LI.querySelectorAll('a')[i].style.color = '#bf5d59';
          }
      })
}






(function() {
    "use strict";

    function Carousel(setting) {
        /* Scope privates methods and properties */
        let privates = {},
            xDown,
            yDown,
            xUp,
            yUp,
            xDiff,
            yDiff;

        /* Public methods */
        // Prev slide
        this.prev_slide = () => {
            if (!privates.isAnimationEnd) {
                return;
            }

            privates.isAnimationEnd = false;

            --privates.opt.position;

            if (privates.opt.position < 0) {
                privates.sel.wrap.classList.add("s-notransition");
                privates.sel.wrap.style[
                    "transform"
                    ] = `translateX(-${privates.opt.max_position}00%)`;
                privates.opt.position = privates.opt.max_position - 1;
            }

            setTimeout(() => {
                privates.sel.wrap.classList.remove("s-notransition");
                privates.sel.wrap.style[
                    "transform"
                    ] = `translateX(-${privates.opt.position}00%)`;
            }, 10);

            privates.sel.wrap.addEventListener("transitionend", () => {
                privates.isAnimationEnd = true;
            });

            if (privates.setting.autoplay === true) {
                privates.timer.become();
            }
        };

        // Next slide
        this.next_slide = () => {
            if (!privates.isAnimationEnd) {
                return;
            }

            privates.isAnimationEnd = false;

            if (privates.opt.position < privates.opt.max_position) {
                ++privates.opt.position;
            }

            privates.sel.wrap.classList.remove("s-notransition");
            privates.sel.wrap.style[
                "transform"
                ] = `translateX(-${privates.opt.position}00%)`;

            privates.sel.wrap.addEventListener("transitionend", () => {
                if (privates.opt.position >= privates.opt.max_position) {
                    privates.sel.wrap.style["transform"] = "translateX(0)";
                    privates.sel.wrap.classList.add("s-notransition");
                    privates.opt.position = 0;
                }

                privates.isAnimationEnd = true;
            });


        };


        this.goto = index => {
            privates.opt.position = index - 1;
            this.next_slide();
        };

        // Item
        this.index = () => {
            return privates.opt.position;
        };

        privates.hts = e => {
            xDown = e.touches[0].clientX;
            yDown = e.touches[0].clientY;
        };

        privates.htm = e => {
            if (!xDown || !yDown) {
                return;
            }

            xUp = e.touches[0].clientX;
            yUp = e.touches[0].clientY;

            xDiff = xDown - xUp;
            yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    this.next_slide();
                } else {
                    this.prev_slide();
                }
            }

            xDown = 0;
            yDown = 0;
        };

        /* privates properties */
        privates.default = {
            touch: true,
            autoplay: false,
            autoplayDelay: 3000,
            pauseOnFocus: true,
            pauseOnHover: true
        };

        privates.setting = Object.assign(privates.default, setting);

        privates.isAnimationEnd = true;

        privates.sel = {
            wrap: document.querySelector(privates.setting.wrap),
            children: document.querySelector(privates.setting.wrap).children,
            prev: document.querySelector(privates.setting.prev),
            next: document.querySelector(privates.setting.next)
        };

        privates.opt = {
            position: 0,
            max_position: document.querySelector(privates.setting.wrap).children
                .length
        };

        privates.sel.wrap.appendChild(privates.sel.children[0].cloneNode(true));
        if (privates.sel.prev !== null) {
            privates.sel.prev.addEventListener("click", () => {
                this.prev_slide();
            });
        }

        if (privates.sel.next !== null) {
            privates.sel.next.addEventListener("click", () => {
                this.next_slide();
            });
        }
    }

    let a = new Carousel({
        wrap: ".js-carousel__wrap",
        prev: ".js-carousel__prev",
        next: ".js-carousel__next",
    });
})();



function vert__phone__display() {
    if(BLACK__DISPLAY.classList.contains("black__display__hidden")){
        BLACK__DISPLAY.classList.remove("black__display__hidden");
        BLACK__DISPLAY.classList.add("black__display__visible");
    }else{
        BLACK__DISPLAY.classList.remove("black__display__visible");
        BLACK__DISPLAY.classList.add("black__display__hidden");
    }

}
function horizontal__phone__display() {
    if(BLACK__HORIZONTAL__DISPLAY.classList.contains("horizont__phone__display")){
        BLACK__HORIZONTAL__DISPLAY.classList.remove("horizont__phone__display");
        BLACK__HORIZONTAL__DISPLAY.classList.add("horizont__phone__display__hidden")
    }else{
        BLACK__HORIZONTAL__DISPLAY.classList.remove("horizont__phone__display__hidden");
        BLACK__HORIZONTAL__DISPLAY.classList.add("horizont__phone__display")
    }
}

  let  count = 0;
  LEFT.addEventListener('click', event => {
      ++count;
      BLACK__DISPLAY.classList.remove("black__display__visible");
      BLACK__DISPLAY.classList.add("black__display__hidden");
      BLACK__HORIZONTAL__DISPLAY.classList.remove("horizont__phone__display");
      BLACK__HORIZONTAL__DISPLAY.classList.add("horizont__phone__display__hidden")
       if(count === 1){BG.style.backgroundColor = '#648BF0'}
       if(count === 0 || count === 2){
           BG.style.backgroundColor = '#f06c64';
       }
       if(count === 2){ count = 0}
  });

  RIGHT.addEventListener('click', event => {
      ++count;
      BLACK__DISPLAY.classList.remove("black__display__visible");
      BLACK__DISPLAY.classList.add("black__display__hidden");
      BLACK__HORIZONTAL__DISPLAY.classList.remove("horizont__phone__display");
      BLACK__HORIZONTAL__DISPLAY.classList.add("horizont__phone__display__hidden")
      if(count === 1){BG.style.backgroundColor = '#648BF0'}
      if(count === 0 || count === 2){
          BG.style.backgroundColor = '#f06c64';
      }
      if(count === 2){ count = 0}
  });


function closeMenu(){
    document.body.classList.remove('block');
    BURGER__MENU.classList.remove('navigation__burger');
    BURGER__MENU.classList.add('burger');
}



function switches() {

 let arr = [];
 PIC.querySelectorAll('li').forEach(elem => {
     elem.id = Math.ceil(Math.random()*100);
     arr.push(elem.id);
     arr.sort();
 });
  for(let i of arr){
    let element = document.getElementById(i);
    PIC.insertBefore(element,PIC.firstChild)
  }

}
function change__color() {
    BUTTON.addEventListener("click",(event)=>{

        BUTTON.querySelectorAll('button').forEach(elem => {

            elem.style.color = '#666d89';
            elem.style.border = ' 1px solid #666d89'});
        event.target.style.border = '1px solid #c5c5c5';
        event.target.style.color = '#c5c5c5';
        BUTTON.style.color = '#666d89';
        BUTTON.style.border = '0px solid #2d303a';
    });
    console.log(BUTTON.querySelectorAll('button'));
    console.log(PIC.querySelectorAll('div'));

    switches();
}


PIC.addEventListener('click', event=>{
  let ra = PIC.querySelectorAll('img')
    for(let i = 0;i < ra.length;i++){
      ra[i].classList.remove('outline');
      event.target.classList.add('outline')}
      PIC.classList.remove('outline');
});



document.querySelector('.form__button').addEventListener('click',event =>{
    event.preventDefault();
    if(document.forms[0].reportValidity()){
    let subject  = `${FORMA.subject.value.length === 0 ? 'Без темы':'Тема:'.concat(FORMA.subject.value)}`;
    let dicribe  =  `${FORMA.description.value.length === 0 ? 'Без описания':'Описание:'.concat(FORMA.description.value)}`;
    document.getElementsByClassName('modal__subject')[0].innerText = '12asdasd4';
    document.getElementById('modal').style.display='block';
    document.getElementsByClassName('modal__subject')[0].innerText = subject;
    document.getElementsByClassName('modal__description')[0].innerText = dicribe;
    for(let i of document.getElementsByTagName('input')){
        i.value = '';
    }
    document.getElementsByTagName('input')[3].value = 'submit'
    document.getElementsByTagName('textarea')[0].value = ''}

});
document.getElementById('close-too').addEventListener('click',event => {
    document.getElementById('modal').style.display='none'
});
document.getElementById('close').addEventListener('click',event => {
    document.getElementById('modal').style.display='none'
});


