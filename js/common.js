//首次载入页面加载项
$(function(){
    $('.hamburger').mouseover(function(){
        $('.line-son').addClass('slide');
    }).mouseleave(function(){
        $('.line-son').removeClass('slide');
    });


    selectAnima();

    $('.menuOpenShade').click(function () {
        pageReadyDel();
    });

    //登录完成界面切换
    $('#login-button').click(function(){
        loginOk();
    });


    //登录界面成功
    /*$('#login-button').click(function (event) {
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });*/

});


function loginOk() {
    $('#login').addClass('loginOk');
    $('.index-main-text-anima').addClass('loginOk');
    $('.index-main-button-t-anima').addClass('loginOk');
}

//改变屏幕大小时小于1000关闭左侧菜单，否则显示。
function updateScreenWidth() {
    $(window).resize(function() {
        if($(document).width() <= 1000){
            closeMenu();
        }else{
            showMenu();
        }
    });

    //载入页面时判断如果窗口大于1000显示左侧菜单
    if($(document).width() > 1000){
        if ($('#showMenu').hasClass('showMenu')) {
            showMenu();
        }
    }else{
        closeMenu();
    }
}



//下拉菜单过渡动画
function selectAnima() {
    $(".page-black-nav>li").bind("mouseover mouseout", function(){
        $(this).children('.page-nav-select').stop(true).slideToggle(200);
    });
}


//封装函数
function menuCtrl(a){
    if($(a).hasClass('menu-ctrl-true')){
        pageReadyDel();

        menuAnimaDel();
    }else{
        pageReadyAdd();

        menuAnimaAdd();
        setTimeout(function(){menuAnimaDel();},1500);
    }
}


//打开左侧菜单
function showMenu(){
    $('.menu-wrap').addClass('menu-animation');
    $('.menu-ctrl').addClass('menu-ctrl-true');
}

//关闭左侧菜单
function closeMenu(){
    if($('.menu-ctrl').hasClass('menu-ctrl-true')){
        menuCtrl('.menu-ctrl');
    }
}

//授信页面去掉左侧大菜单焦点和主页面内容右挪动
function creditReady(){
    $('.big-catalog-focus').removeClass('big-catalog-focus');//去除大菜单所有焦点
    $('.wrap').removeClass('menu-animation');//去除内容区域挪动
}


//左侧小列表焦点颜色         --待改进!
function updateColor(e){
    $('.menu-item>a').removeClass('font-color-bleck');

    switch (e){
        case 1:
            $('.menu-item:nth-child(1)>a').addClass('font-color-bleck');
            break;
        case 2:
            $('.menu-item:nth-child(2)>a').addClass('font-color-bleck');
            break;
        case 3:
            $('.menu-item:nth-child(3)>a').addClass('font-color-bleck');
            break;
        case 4:
            $('.menu-item:nth-child(4)>a').addClass('font-color-bleck');
            break;
        case 5:
            $('.menu-item:nth-child(5)>a').addClass('font-color-bleck');
            break;
        case 6:
            $('.menu-item:nth-child(6)>a').addClass('font-color-bleck');
            break;
        case 7:
            $('.menu-item:nth-child(7)>a').addClass('font-color-bleck');
            break;
    }
}


//左侧菜单栏载入动画
function menuAnimaAdd(){
    $('.big-catalog>li').addClass('big-catalog-anima');

    $('.menu-item').addClass('menu-item-anima');

}

function menuAnimaDel(){
    $('.big-catalog>li').removeClass('big-catalog-anima');

    $('.menu-item').removeClass('menu-item-anima');

}


//列表页面需要点击加载动画
function listReady(){

    menuAnimaAdd();
    pageReadyDel();
    setTimeout(function(){menuAnimaDel();},1500);
}


//页面加载动画
function pageReadyAdd(){
    $('.wrap').addClass('menu-animation');
    $('.menu-wrap').addClass('menu-animation');
    $('.menu-ctrl').addClass('menu-ctrl-true');
    $('.line1').addClass('anima');
    $('.line2').addClass('anima');
    $('.line3').addClass('anima');
    $('.menuOpenShade').addClass('menu');
    setTimeout(function(){$('.menu-text').addClass('menu-close-animation')},300);
    setTimeout(function(){$('.menu-text').html("CLOSE")},700);
    setTimeout(function(){$('.menu-text').removeClass('menu-close-animation')},1300);
}
//页面删除动画
function pageReadyDel(){
    $('.wrap').removeClass('menu-animation');
    $('.menu-wrap').removeClass('menu-animation');
    $('.menu-ctrl').removeClass('menu-ctrl-true');
    $('.line1').removeClass('anima');
    $('.line3').removeClass('anima');
    $('.menuOpenShade').removeClass('menu');
    setTimeout(function(){$('.line2').removeClass('anima')},500);
    setTimeout(function(){$('.menu-text').addClass('menu-close-animation')},300);
    setTimeout(function(){$('.menu-text').html("MENU")},700);
    setTimeout(function(){$('.menu-text').removeClass('menu-close-animation')},1300);
}


function pageHrefMenuDel() {
    $('.line1').removeClass('anima');
    $('.line3').removeClass('anima');
    setTimeout(function(){$('.line2').removeClass('anima')},500);
    setTimeout(function(){$('.menu-text').html("MENU")},700);
}


//取随机数的函数
function getRandom(n){
    return Math.floor(Math.random()*n+1)
}






