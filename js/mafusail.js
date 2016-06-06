$(document).ready(function(){

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200){
            if(!flag){
                $("#logo").css({
                    "margin-top": "5px",
                    "width": "110px",
                });

                $("header").css({
                    "background-color": "#ffffff",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.5)"
                });


                flag = true;
            }
        }else{
            if(flag){
                $("#logo").css({
                    "margin-top": "0px",
                    "width": "193px",
                });

                $("header").css({
                    "background-color": "transparent",
                    "box-shadow": "none"
                });
               
                flag = false;
            }
        }
    });


    // выплывающие меню


    $('#logo2').click(function () {
        $('#menu ul').slideToggle(500);
    });



});



/*Якорь*/

$("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});
