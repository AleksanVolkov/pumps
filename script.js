document.addEventListener("DOMContentLoaded", ()=>{

const header= document.querySelector('header');
window.addEventListener('scroll', ()=>{

    const scroll = window.scrollY;
    if(scroll > 0){
        header.classList.add('bacHeader')

    }else{
        header.classList.remove('bacHeader')
    }
})
























});