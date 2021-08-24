'use strict';

const searchForm = document.querySelector('#searchForm')
const searchBtn = document.querySelector('.searchBtn')
const searchBar = document.querySelector('.searchbar')
const searchTxt = searchBar.querySelector('#searchTxt')
const searchOkBtn = searchBar.querySelector('#searchOkBtn')
const searchcancel = searchBar.querySelector('span.cancel')

searchBtn.addEventListener('click', () => {
    event.stopPropagation()
    searchBar.style.opacity = '1';
    searchBar.style.top = '30px';
});
searchcancel.addEventListener('click', () => {
    event.stopPropagation()
    searchBar.style.opacity = '0';
    searchBar.style.top = '-50px';
});

searchOkBtn.addEventListener('click', searchOkFunc);

function searchOkFunc(event) {
    if (searchTxt.value == "") {
        alert('Please enter what you want to search for.');
        searchTxt.focus();
        return false;
    }

    searchForm.submit();
}

const sub_searchbar = document.querySelector('#sub_searchbar')
const subSearchForm = document.querySelector('.sub_searchForm')
const subSearchTxt = sub_searchbar.querySelector('.sub_searchTxt')
const subSearchOkBtn = sub_searchbar.querySelector('.sub_searchOkBtn')

subSearchOkBtn.addEventListener('click', sub_searchOkFunc);

function sub_searchOkFunc(event) {
    if (subSearchTxt.value == "") {
        alert('Please enter what you want to search for.');
        subSearchTxt.focus();
        return false;
    }

    subSearchForm.submit();
}


const lnb = document.querySelector('.nav>.lnb')
const lnbBtn = lnb.querySelector('span.button')
const lnbMenu = lnb.querySelector('.menubar')
const lnbCancel = lnb.querySelector('span.lnbCancel')

lnbBtn.addEventListener('click', () => {
    lnbMenu.style.transition = 'all 0.2s';
    lnbMenu.style.opacity = '1';
    lnbMenu.style.left = '0';
    lnbMenu.style.width = '30vw';
    lnbMenu.style.height = '100vh';

    lnbCancel.style.opacity = '0.3';
    lnbCancel.style.left = '30vw';
    lnbCancel.style.width = '40px';
    lnbCancel.style.height = '40px';
})
lnbCancel.addEventListener('click', () => {
    event.stopPropagation()
    lnbMenu.style.transition = 'all 0.2s';
    lnbMenu.style.opacity = '0';
    lnbMenu.style.left = '-200px';
    lnbMenu.style.width = '0';
    lnbMenu.style.height = '0';

    lnbCancel.style.opacity = '0';
    lnbCancel.style.left = '-200px';
    lnbCancel.style.width = '0';
    lnbCancel.style.height = '0';
})
lnbCancel.addEventListener('mouseover', () => {
    lnbCancel.style.opacity = '0.9'
})
lnbCancel.addEventListener('mouseout', () => {
    lnbCancel.style.opacity = '0.3'
})

//스크롤 일정높이만큼 내리면 헤더 사라짐
let docuBody = document.querySelector('body')
let bHeight1_4 = docuBody.offsetHeight / 4;
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > bHeight1_4) {
        header.style.top = '-156px'
        header.style.opacity = '0'
        header.style.transition = 'all 0.5s'
    } else {
        header.style.top = '0'
        header.style.opacity = '1'
        header.style.transition = 'all 0.5s'
    }
})

const gnbUl = $('.header>.inner-header>.nav>.gnb>ul')
const gnbLi = $('.header>.inner-header>.nav>.gnb>ul>li')
const gnbnone = $('.header>.inner-header>.nav>.gnb>ul>li>.none')
const gnbSubUl = $('.header>.inner-header>.nav>.gnb>ul>li>.none>ul')


gnbLi.on('mouseover',()=>{
    let _this_index = $(event.currentTarget).index();
    let _this = $(event.currentTarget);

    gnbnone.eq(_this_index).css('display','block');
})
gnbLi.on('mouseout',()=>{
    let _this_index = $(event.currentTarget).index();
    let _this = $(event.currentTarget);

    gnbnone.eq(_this_index).css('display','none');
})