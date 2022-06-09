// console.log('Ура! Заработало!!!');

let item1Img = document.querySelector('.item1');
let item2Img = document.querySelector('.item2');
let item3Img = document.querySelector('.item3');
let item4Img = document.querySelector('.item4');

item1Img.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/Autumn.mp4';
});

item2Img.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/Win.mp4';
});

item3Img.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/Sprin.mp4';
});

item4Img.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/Sum.mp4';
});

// title focus tabs

let timer;
let titleOld = document.querySelector('head title').innerHTML;

// console.log(titleOld);

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href',icon);
}

window.onblur = () =>{
    timer = setTimeout(() =>{
        changeTitle('../favicon2.ico', 'Вернитесь, пожалуйста');
    }, 3000)
}

window.onfocus = () =>{
    // clearTimeout(timer);
    changeTitle('../favicon.ico', titleOld);
}