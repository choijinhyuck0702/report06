let menuState = document.querySelectorAll('.main-menu');
let submenuState = document.querySelectorAll('.sub-menu');

$(document).on('mouseover', '.menu', function(){
    $('.sub-menu').slideDown(200);
});
$(document).on('mouseleave', '.menu', function(){
    $('.sub-menu').slideUp(200);
    for(let idx0=0;idx0<menuState.length;idx0++){
        menuState[idx0].classList.remove('active');
    }
});

for(let idx1=0;idx1<menuState.length;idx1++){
    menuState[idx1].addEventListener('mouseover', function(){
        menuState[idx1].classList.add('active');
    });
    menuState[idx1].addEventListener('mouseleave', function(){
        menuState[idx1].classList.remove('active');
        for(let idx2=0;idx2<submenuState.length;idx2++){
            submenuState[idx2].onmouseover = function(){
                menuState[idx2].classList.add('active');
            }
            submenuState[idx2].onmouseleave = function(){
                for(let idx3=0;idx3<submenuState.length;idx3++){
                    submenuState[idx3].onmouseover = function(){
                        for(let idx4=0;idx4<menuState.length;idx4++){
                            menuState[idx4].classList.remove('active');
                        }
                        menuState[idx3].classList.add('active');
                    }
                }
                menuState[idx1].classList.remove('active');
            }
        }
    });
}

let now = 1;
setInterval(function(){
    if(now<3){
        $('.img-group').animate({
            top: '-=' + 300 + 'px'
        });
        now++;
    } else{
        $('.img-group').animate({
            top: 0 + 'px'
        });
        now = 1;
    }
}, 3000);

let notice = document.querySelector('.tab .tab-btn .tab01 h2 a');
let noticeContent = document.querySelector('.notice');
let gallery = document.querySelector('.tab .tab-btn .tab02 h2 a');
let galleryContent = document.querySelector('.gallery');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');

notice.classList.add('active');
$('.notice').attr('style', 'display:block');

gallery.addEventListener('click', function(){
    notice.classList.remove('active');
    gallery.classList.add('active');
    $('.notice').attr('style', 'display:none');
    $('.gallery').attr('style', 'display:block');
});
notice.addEventListener('click', function(){
    gallery.classList.remove('active');
    notice.classList.add('active');
    $('.gallery').attr('style', 'display:none');
    $('.notice').attr('style', 'display:block');
});
popup.addEventListener('click', function(){
    $('.popup-window').attr('style','display:block');
});
close.addEventListener('click', function(){
    $('.popup-window').attr('style','display:none');
});