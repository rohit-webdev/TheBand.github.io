let preLoader = document.getElementById('loading');
let bar = document.querySelector('.menu');
let links = document.querySelectorAll('.link');
let close = document.querySelector('.close');
let logo = document.querySelector('.logo');
let nav_item = document.querySelector('.nav-item');
let hero_img = document.getElementById('hero_img');
let img_title = document.getElementById('img_title');
let img_subtitle = document.getElementById('img_subtitle');
let hero_container = document.getElementsByClassName('hero_container');

const myFunction = ()=>{
    preLoader.style.display = 'none';
}

bar.addEventListener('click',()=>{
    nav_item.classList.add('open-nav');
})

close.addEventListener('click',()=>{
    nav_item.classList.remove('open-nav');
})

links.forEach(link =>{
    link.addEventListener('click',()=>{
        nav_item.classList.remove('open-nav');    
    })
})

let content = [
{image : './images/chicago.jpg',title : 'Chicago',subtitle : "Thank You Chicago - The night we won't forget"},
{image : './images/ny.jpg' , title : 'New York' , subtitle : 'The atmosphere at New York was awesome'},
{image : './images/la.jpg', title : 'Los Angeles', subtitle : 'We had the best time playing at Venice Beach'}
];

var i = 0;
setInterval(() => {
    hero_img.src = content[i].image;
    img_title.innerText = content[i].title;
    img_subtitle.innerText = content[i].subtitle;
    i++;
    if(i == 3){
        i = 0;
    }
    hero_container[0].animate([{opacity : 0.3},{opacity : 1}],{duration : 1000, iterations : 1})
    img_title.animate([{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'},{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}],{duration : 1000, iterations : 1})
}, 5000);





