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

/*-------------modal*/
const modalOpen = document.querySelectorAll('[data-modal]'),
      modalClose = document.querySelector('[data-close]'), 
      modalWrapper = document.querySelector('.modal_wrapper'),
      btn = document.querySelectorAll('.btn');
      

      modalOpen.forEach(item=>{
            item.addEventListener('click', (e)=>{

                if(e.currentTarget && e.currentTarget.classList.contains('btn')){
                    btn.forEach(item=>{
                        if(e.currentTarget == item){
                            modalWrapper.classList.add('open');
                            modalWrapper.classList.remove('close')
                        }
                    })
                    
                }

                

                
            })
      });


     function modalCloses(){
            modalWrapper.classList.remove('open');
            modalWrapper.classList.add('close');
     }

        modalClose.addEventListener('click',()=>{
            
            modalCloses();
        }       )   
                 
        document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWrapper.classList.contains('open')) { 
            modalWrapper.classList.remove('open');
            modalWrapper.classList.add('close');
        }
    });
      
     
      






/*-------------modal end */

    
/*---------------------------- form  ----------------------------*/
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			modalCloses()
            showModal();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
            setTimeout(function() {
				// Done Functions
				modalOk.style.display= "none";
			}, 12000);
		});
		return false;
	});

});


/*---------------------------- form end  ----------------------------*/



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





// маска на инпут//////////////////////////////////////////////////////////////////////





$(document).ready(function(){
    $("#phone").mask("+(375) 99-9999999");
});
  $(document).ready(function(){
    $("#phoneM").mask("+(375) 99-9999999");
});


//////////////////////////////////////////////////

///////////////////////////////////modal end

const modalOk = document.querySelector('.blur');

function showModal(){
    modalOk.style.display= "block";
   

}
function hideModal(){
    modalOk.style.display= "none";

}
/////////////////////////////////////////////
/*mob NAW*/

(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header-mob'),
        menuIitem=document.querySelectorAll('.menu-item');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }

    menuIitem.forEach(item=>{
        item.addEventListener('click',()=>{
            header.classList.toggle('menu-opened');
        })
        
    }

    )
}());
/*mob NAW END*/










    





});
