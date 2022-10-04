document.addEventListener("DOMContentLoaded", ()=>{

const header= document.querySelector('header');




window.addEventListener('scroll', ()=>{

    const scroll = window.scrollY;
    if(scroll > 0){
        header.classList.add('bacHeader')

    }else{
        header.classList.remove('bacHeader')
    }
});
    

const tabs = document.querySelectorAll(".material_tab"),
      tabs_parent= document.querySelector('.pumps_materials_tabs'),
      boxs =  document.querySelectorAll(".box_item");



function hideBox (){
    boxs.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
        
    })
    tabs.forEach(item=>{
        item.classList.remove('tab_active');
        
    
        
        
    })

}

function showBox(i=0){
        boxs[i].classList.remove('hide');
        tabs[i].classList.add("tab_active");
        boxs[i].classList.add('show', "fade");
       
    



}
hideBox();
showBox();

tabs.forEach(item =>{
    item.addEventListener('click', (e)=>{
        if(e.currentTarget && e.currentTarget.classList.contains('material_tab'))
    {
        tabs.forEach((item,i)=>{
            if(e.currentTarget==item){
                hideBox();
                showBox(i);
            }
        })
    }

})
    })

/*-------------картинка  big*/


    




$('.single-item').slick();




    $('.multiple-items').slick({
        infinite: true,
        slidesToShow:4,
        slidesToScroll:1,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow:1 ,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                variableWidth: true,
                arrows:true
              }
            }
        ]
    });



    

})




