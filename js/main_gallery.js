'use strict';

const secCon = document.querySelector('.section.sec1');
const gallery = secCon.querySelector('.gallery');
const galleryLi = secCon.querySelectorAll('.gallery>ul>li');
const centerBtn = secCon.querySelector('.centerBtn');
const bcon = secCon.querySelector('.bcon');
const itemsUl = bcon.querySelector('ul');
const itemsLi = bcon.querySelectorAll('.items>ul>li');
const spanArrow = secCon.querySelectorAll('.centerBtn>span')
const overOut = secCon.querySelectorAll('.overOut')
const sideTxtLi = secCon.querySelectorAll('.sidetext>ul>li')

//배경이미지 삽입
const bgArr = [];
for (let i = 0; i < galleryLi.length; i++) {
    bgArr.push('url(img/gallery_bg_' + i + '.jpg) no-repeat 50% /cover');
    galleryLi[i].style.background = bgArr[i];
}

//갤러리 이동 함수
const galleryGotoFunc = key => {
    let distance = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    let move = (-distance * key) + 'px';
    gallery.style.left = move;
    gallery.style.transition = 'all 0.7s';
};

//하단 itemsLi On 함수
const itemsLiOn = key => {
    itemsLi.forEach((el, idx) => {
        if (idx == key) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
};

//사이드텍스트 페이드
const sideTxtOn = key => {
    sideTxtLi.forEach((el, idx) => {
        if (idx == key) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

{
    //자동갤러리
    let i = -1;

    function autoGallery() {
        if (i >= galleryLi.length - 1) i = -1;
        i++;
        galleryGotoFunc(i);
        itemsLiOn(i);
        sideTxtOn(i);
        if (i >= galleryLi.length - 1) i = -1;
    }
    //인터벌 설정
    let galInt = setInterval(autoGallery, 5000);

    //수동갤러리
    itemsUl.addEventListener('click', () => {
        let _target = event.target;
        itemsLi.forEach((el, idx) => {
            if (el == _target) {
                el.classList.add('on');
                galleryGotoFunc(idx);
                sideTxtOn(idx);
                i = idx;
            } else {
                el.classList.remove('on');
            }
        })
    })

    //좌우 버튼 클릭시 갤러리 한칸씩 이동
    const arrowLeft = centerBtn.querySelector('span.arrowLeft')
    const arrowRight = centerBtn.querySelector('span.arrowRight')
    spanArrow.forEach((el) => {
        el.addEventListener('mouseover', () => el.style.opacity='0.7')
        el.addEventListener('mouseout', () => el.style.opacity='0')
        el.style.transition='all 0.5s'
    });
    arrowLeft.addEventListener('click', () => {
        i--;
        if (i < 0) i = itemsLi.length - 1;
        galleryGotoFunc(i);
        itemsLiOn(i);
        sideTxtOn(i);
    })
    arrowRight.addEventListener('click', () => {
        i++;
        if (i > 4) i = 0;
        galleryGotoFunc(i);
        itemsLiOn(i);
        sideTxtOn(i);
    })


    //마우스오버시 자동갤러리 멈춤
    overOut.forEach((el, idx) => {
        el.addEventListener('mouseover', () => clearInterval(galInt))
        el.addEventListener('mouseout', () => galInt = setInterval(autoGallery, 5000))
    });

    //로드되자마자 실행
    (() => autoGallery())();

    //브라우저 사이즈 조절시 새로고침
    // window.addEventListener('resize',(e)=>{
    //     console.log('Resizing...')
    //     if(window.innerWidth<=767){
    //         return false;
    //     }
    //     else{
    //         window.location.reload();
    //     }
    // })

    
}
const lightUl=document.querySelector('.sns>ul')
const lightLi=document.querySelectorAll('.sns>ul>li')
const popup=$('.popup')
const lightSub=document.querySelector('.lightBox-sub')
const subCon=document.querySelector('.sub-con')
const closeBtn=document.querySelector('span.close')
const subConImg=$('.sub-con>img')
const instaTxt=document.querySelector('p.instaTxt')
const instaLinkA=document.querySelector('span.instaLink>a')

const lightLibgArr = [];

for(let i=0; i<lightLi.length; i++){
    lightLibgArr.push('url(img/sns' + i + '.jpg) no-repeat 50% /cover');
    lightLi[i].style.background = lightLibgArr[i];

    lightLi[i].addEventListener('click',()=>{
        subConImg.attr({'src':'img/sns'+i+'.jpg','alt':'sns img'+i});
        popup.fadeIn(300);
});
}

closeBtn.addEventListener('click',()=>{
    popup.fadeOut(300);
})

lightLi[0].addEventListener('click',()=>{
    let txt1='Tell us how are you excited about the new 220w ! Last minutes to enter the giveaway ! We will announce winners on a story this afternoon ! Good luck !<br>📸@bokehiq<br>www.dotmod.com<br><br>#vape #vapeporn #vaper #dotmod #squonk #vapelife #vapefam #vapoteur #vapote #vapegirls #clouds #ejuice #vapers #vapefriends #vapegame #cloudchasing #vapenation  #vaping #vapetricks #vapes #dampfen #vapecommunity #vapefamily'
    instaTxt.innerHTML=txt1;
    let link1='https://www.instagram.com/p/CI5OZF7FGRX/?utm_source=ig_web_copy_link';
    instaLinkA.href=link1;
})
lightLi[1].addEventListener('click',()=>{
    let txt1='What do you think about the red frost DotAiO? 🤔<br>📸@dotmod<br>www.dotmod.com<br><br>#vape #vapeporn #vaper #dotmod #squonk #vapelife #vapefam #vapoteur #vapote #vapegirls #clouds #ejuice #vapers #vapefriends #vapegame #cloudchasing #vapenation  #vaping #vapetricks #vapes #dampfen #vapecommunity #vapefamily'
    instaTxt.innerHTML=txt1;
    let link1='https://www.instagram.com/p/CJ0dc2HFwus/?utm_source=ig_web_copy_link';
    instaLinkA.href=link1;
})
lightLi[2].addEventListener('click',()=>{
    let txt1='Black or red frosted ?<br>📸@pg.banez<br>www.dotmod.com<br><br><br>#vape #vapeporn #vaper #dotmod #squonk #vapelife #vapefam #vapoteur #vapote #vapegirls #clouds #ejuice #vapers #vapefriends #vapegame #cloudchasing #vapenation  #vaping #vapetricks #vapes #vapecommunity #vapefamily'
    instaTxt.innerHTML=txt1;
    let link1='https://www.instagram.com/p/CKlShaZFYFs/?utm_source=ig_web_copy_link';
    instaLinkA.href=link1;
})
lightLi[3].addEventListener('click',()=>{
    let txt1="Does size matter ? 🤔<br>Don't forget to enter the giveaway to have the chance to win one of the 3 Dotmission blackout edition by @mission.xv !<br>📸@dotmod<br>www.dotmod.com<br><br>#vape #vapeporn #vaper #dotmod #squonk #vapelife #vapefam #vapoteur #vapote #vapegirls #clouds #ejuice #vapers #vapefriends #vapegame #cloudchasing #vapenation #vaping #vapetricks #vapes #vapecommunity #vapefamily"
    instaTxt.innerHTML=txt1;
    let link1='https://www.instagram.com/p/CMMZp6wF8vk/?utm_source=ig_web_copy_link';
    instaLinkA.href=link1;
})
lightLi[4].addEventListener('click',()=>{
    let txt1="How do you like the new tiffany dotstick?<br>📸@josamilla<br>www.dotmod.com<br><br>#vape #vapeporn #vaper #dotmod #squonk #vapelife #vapefam #vapoteur #vapote #vapegirls #clouds #ejuice #vapers #vapefriends #vapegame #cloudchasing #vapenation  #vaping #vapetricks #vapes #dampfen #vapecommunity #vapefamily"
    instaTxt.innerHTML=txt1;
    let link1='https://www.instagram.com/p/CONBUcMLWPE/?utm_source=ig_web_copy_link';
    instaLinkA.href=link1;
})
lightLi[5].addEventListener('click',()=>{
    let txt1="Coming soon ! Which one is your favorite ?<br>📸@the.dude.uk<br>www.dotmod.com<br><br>#vape #vapeporn #vaper #dotmod #squonk #vapelife #vapefam #vapoteur #vapote #vapegirls #clouds #ejuice #vapers #vapefriends #vapegame #cloudchasing #vapenation  #vaping #vapetricks #vapes #dampfen #vapecommunity #vapefamily"
    instaTxt.innerHTML=txt1;
    let link1='https://www.instagram.com/p/COPgXtgrVJ9/?utm_source=ig_web_copy_link';
    instaLinkA.href=link1;
})


//사이트 접속 시 팝업
const $layerPopup = $('.layerPopup');
const $spanBtnYes = $('.layerBox>.btncon>span.yes');
const $spanBtnNo = $('.layerBox>.btncon>span.no');

//최초 레이어팝업 노출
window.onload = function(){
    layerPopupShow();
};

//YES 클릭시 레이어팝업 닫기
$spanBtnYes.on('click',()=>{
    layerPopupHide();
});
//NO 클릭시 포트폴리오UIUX페이지로 이동
$spanBtnNo.on('click',()=>{
    location.href="../Portfolio_main/UIUX.html"
});

function layerPopupShow() {
    $layerPopup.show(500);
}

function layerPopupHide() {
    $layerPopup.hide(500);
}