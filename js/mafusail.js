

$(document).ready(function(){

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 100){
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








// счетчик
timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(2016, 7-1, 1);
// Для задания даты с точностью до времени укажите дату в формате:
timeend= new Date(2016, 7-1, 1, 11-1, 0);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +"&#160;&#160;&#160;&#160;&#160;&#160;"+ thour+"&#160;&#160;&#160;&#160;&#160;"+tmin+"&#160;&#160;&#160;&#160;&#160;&#160;"+tsec+"";
    document.getElementById('t').innerHTML=timestr;
    window.setTimeout("time()",1000);
}



// всплывающие блоки трениров

$('#img_inf_1').click(function () {
    $("#block_inf_1").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_1").hide();
    $("#hover_a").hide();
});


$('#img_inf_2').click(function () {
    $("#block_inf_2").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_2").hide();
    $("#hover_a").hide();
});



$('#img_inf_3').click(function () {
    $("#block_inf_3").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_3").hide();
    $("#hover_a").hide();
});



$('#img_inf_4').click(function () {
    $("#block_inf_4").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_4").hide();
    $("#hover_a").hide();
});

$('#img_inf_5').click(function () {
    $("#block_inf_5").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_5").hide();
    $("#hover_a").hide();
});



$('#img_inf_6').click(function () {
    $("#block_inf_6").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_6").hide();
    $("#hover_a").hide();
});


$('#img_inf_7').click(function () {
    $("#block_inf_7").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_7").hide();
    $("#hover_a").hide();
});


$('#img_inf_8').click(function () {
    $("#block_inf_8").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_8").hide();
    $("#hover_a").hide();
});


$('#img_inf_9').click(function () {
    $("#block_inf_9").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_9").hide();
    $("#hover_a").hide();
});

$('#img_inf_10').click(function () {
    $("#block_inf_10").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_10").hide();
    $("#hover_a").hide();
});

$('#img_inf_11').click(function () {
    $("#block_inf_11").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_11").hide();
    $("#hover_a").hide();
});

$('#img_inf_12').click(function () {
    $("#block_inf_12").show(500);
    $("#hover_a").show();
});
$('#hover_a').click(function () {
    $("#block_inf_12").hide();
    $("#hover_a").hide();
});