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
        item.style.display = "none";
        
    })
    tabs.forEach(item=>{
        item.classList.remove('tab_active');
        
    
        
        
    })

}

function showBox(i=0){
        
        tabs[i].classList.add("tab_active");
        boxs[i].style.display = "flex";
       
    



}
hideBox();
showBox();

tabs_parent.addEventListener('click', (e)  =>{

    if(e.target && e.target.classList.contains('material_tab'))
    {
        tabs.forEach((item,i)=>{
            if(e.target==item){
                hideBox();
                showBox(i);
            }
        })
    }

})
});

