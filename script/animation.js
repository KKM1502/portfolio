


$('.btnLeft').hide();
$('.btnRight').hide();
$('#name').hide();
$(document).ready(function(){
    $('.nav').hide();
});
$('.nav').hide();
$('#fullname').hide();
$(window).scroll(function () {
    contact=1;
   // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 10) {
        $('#checkcursor').css('transform', 'translate(1500px,0px)');
        $('#checkcursor').css('opacity', '0');
        $('#bgimg').css('opacity', '0.7');
        $('.header2').css('transform', 'translate(100px,90px) rotate(90deg)');
        $('.header1').css('transform', 'translate(0px,-40px)');
        $('.mainheader > div').css('margin-top', '10px');
        $('#navigation li').css('margin-top','10px')
        $('.header1').css('color', 'white')
        $('.mainheader').css('top', '0');
        $('.mainheader').css('font-size', '15px');
        $('.header2').css('font-size','13px');
        
        $('.mainheader > div').text('K_Min\'s Portfolio Java & Oracle');
        $('.subheader').css('transform', 'translate(0px,-600px)');
        $('.subheader').css('color', 'white');
        $('.subheader').hide();
        
        $('.mainheader > div').css('color', 'white');
        $('.mainheader > div').css('border', '3px solid white');
        $('.nav').show(400);


    } else {
        $('#bgimg').css('opacity', '0.2');
        $('.header2').css('transform', 'rotate(0deg)');
        $('.header1').css('transform', 'translate(0px)');
        $('.header1').css('color', '#232327')
        $('.subheader').css('transform', 'translate(-50%,0px)');
        $('.subheader').css('color', 'black');
        $('.nav').hide(500);
        $('.mainheader > div').text('K_Min\'s Portfolio');
        $('.mainheader > div').css('color', '#232327');
        $('.mainheader > div').css('border', '10px solid #232327');
        
        setTimeout(() => {
            $('.subheader').show();
        }, 1500);
        $('#checkcursor').show();
        $('#checkcursor').css('transform', 'translate(0px,0px)');
        $('#checkcursor').css('opacity', '1');
        
        $('.mainheader').css('top', '42%');
        $('.mainheader').css('font-size', '55px');

    }
    if ($(window).scrollTop() > 370) {
        $('#name').show(500);
        $('#fullname').show(500);
    } else {
        $('#name').hide(500);
        $('#fullname').hide(500);
    }

})



    var contact = 1;
function light(){
    if(contact == 1 ){  
    $('.header2').css('transform', 'translate(0,90px) rotate(0deg)');
    $('.header2').css('font-size','30px');
    $('.header2').css('background-color','white');
    $('.header2').css('border','3px solid black');
    $('.header2').css('padding','10px 10px');
    contact=0;
    }
    else{
        $('.header2').css('transform', 'translate(100px,90px) rotate(90deg)');
        $('.header2').css('font-size','13px');
        $('.header2').css('background-color','transparent');
        $('.header2').css('border','none');
        $('.header2').css('padding','none');
        contact=1;
    }
}

function forabout(){
    $(window).scrollTop(1015);

}
function forskills(){
    $(window).scrollTop(1649);

}

function forprojects(){
    $(window).scrollTop(2399);

}


