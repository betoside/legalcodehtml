$(document).ready(function(){

    $('.nav-main a[href^="#"]').on('click', function(e) {
        console.log($(this).attr('href'));
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });
    
});


window.onload = ()=>{
    document.querySelector('.menu-mobile').addEventListener('click',()=>{
    // console.log('hey');
    if (document.querySelector('.nav-main').style.display == 'flex') {
            document.querySelector('.nav-main').style.display = 'none';
        } else {
            document.querySelector('.nav-main').style.display = 'flex';
        }
    })
};

