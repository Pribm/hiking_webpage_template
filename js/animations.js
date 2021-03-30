const splitText = Splitting();
const videoTopo = document.querySelector('.hero video');
const tm = TweenMax;
const heroText = document.querySelector('.hero h1');
const heroSubTitle = document.querySelector('.hero h5');
const nav = document.getElementsByTagName('nav');
const logo = document.querySelector('nav img');
const heroBtn = document.querySelector('.hero button');
const heroP = document.querySelector('.hero p');
const navLinks = document.querySelectorAll('nav a');

const heroTextSplit = Splitting({ target: heroText, by: 'words' });
const heroSubTitleSplit = Splitting({ target: heroSubTitle, by: 'chars', whitespace: true });

function shake(element){
    let t = tm.fromTo(element, .2,{y:0}, {y:15, repeat:-1, yoyo:true});
    return t
}


tm.to(videoTopo, 10 , {
    filter: 'blur(15px)',
    delay: 8.3,
    ease: Power4.EaseOut
})

tm.set(heroTextSplit[0].words, {y:'-100vh'});
tm.set(heroSubTitle, {backgroundColor: '#0000'});
tm.set(heroSubTitleSplit[0].chars, {x:'-100vw'});
tm.set(nav, {y:'-100vh'});
tm.set(logo, {rotate:'180deg'});
tm.set(heroBtn, {scale:'0'});
tm.set(heroP, {autoAlpha:'0'});



tm.to(nav, 1.5, {y:0, delay: 6}, 'nav')
tm.to(logo, 3, {rotate:'0'}, 'nav')
tm.staggerTo(heroTextSplit[0].words, 1, {y:0, delay:6, ease:"back.out(1)"}, .5, 'nav')
tm.staggerTo(heroSubTitleSplit[0].chars, .2, {x:0, delay:8, ease:"back.out(1)"}, .1, 'nav')
tm.to(heroP, 3, {autoAlpha:'1',ease:"back.out(2)", delay:10})
tm.to(heroBtn, .8, {scale:'1',ease:"back.out(2)", delay:10})



//console.log(heroSubTitleSplit[0].chars)

