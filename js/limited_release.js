'use-strict';

const productUl = document.querySelector('.collection>.bottom-con>ul')
const productLi = document.querySelectorAll('.collection>.bottom-con>ul>li')
const productLiImg = document.querySelectorAll('.collection>.bottom-con>ul>li>.product-img>img')
const optionBar = document.querySelectorAll('span.optionBar')
const pTxtPrice = document.querySelectorAll('.bottom-con>ul>li>.bTxt>p.price')

// productUl.on('mouseover', () => {
//     let _tIdx = $(this).index();

//     optionBar[_tIdx].style.bottom = '1rem';
//     optionBar[_tIdx].style.opacity = '1';
//     optionBar[_tIdx].style.transition = 'all 0.5s';

// })
// productUl.addEventListener('mouseout', () => {
//     let _tIdx = $(this).index();
//     optionBar[_tIdx].css.bottom = '-1rem';
//     optionBar[_tIdx].css.opacity = '0';
//     optionBar[_tIdx].css.transition = 'all 0.5s';
// })

for (let i = 0; i < productLi.length; i++) {
    productLi[i].addEventListener('mouseover', () => {
        optionBar[i].style.bottom = '0'
        optionBar[i].style.opacity = '1';
        optionBar[i].style.transition = 'all 0.5s';

        pTxtPrice[i].style.opacity = '1';
        pTxtPrice[i].style.transition = 'all 0.5s';
    })
    productLi[i].addEventListener('mouseout', () => {
        optionBar[i].style.bottom = '-1rem'
        optionBar[i].style.opacity = '0';
        optionBar[i].style.transition = 'all 0.5s';

        pTxtPrice[i].style.opacity = '0';
        pTxtPrice[i].style.transition = 'all 0.5s';
    })
}

productLi[0].addEventListener('mouseover',()=>{
    productLiImg[1].classList.add('onhover')
    productLiImg[0].classList.remove('onhover')
    productLiImg[1].style.transition='all 0.5s'
    productLiImg[0].style.transition='all 0.5s'
})
productLi[1].addEventListener('mouseover',()=>{
    productLiImg[3].classList.add('onhover')
    productLiImg[2].classList.remove('onhover')
    productLiImg[3].style.transition='all 0.5s'
    productLiImg[2].style.transition='all 0.5s'
})
productLi[0].addEventListener('mouseout',()=>{
    productLiImg[0].classList.add('onhover')
    productLiImg[1].classList.remove('onhover')
    productLiImg[1].style.transition='all 0.5s'
    productLiImg[0].style.transition='all 0.5s'
})
productLi[1].addEventListener('mouseout',()=>{
    productLiImg[2].classList.add('onhover')
    productLiImg[3].classList.remove('onhover')
    productLiImg[2].style.transition='all 0.5s'
    productLiImg[3].style.transition='all 0.5s'
})