$('#slider1').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items:3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#slider2').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    items:3,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$(document).ready(function(){
    $(window).scroll(function(){
         x = $(window).scrollTop()
         // console.log(x)

         if(x>200){
              $('.menu').addClass('sticky')
              $('#scroll').css('opacity','1')
         }
         else{
              $('.menu').removeClass('sticky')
              $('#scroll').css('opacity','0')
         }
    })

    $('#scroll').click(function(){
         $(window).scrollTop(0)
    })
})