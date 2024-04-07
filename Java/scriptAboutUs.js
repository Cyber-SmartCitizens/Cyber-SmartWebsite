const title = document.querySelector('.title')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')
const bush1 = document.querySelector('.bush1')
const bush2 = document.querySelector('.bush2')
const bush3 = document.querySelector('.bush3')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const arrow = document.querySelector('.downArrow')
const citySun2 = document.querySelector('.citySun2')
const citySun3 = document.querySelector('.citySun3')
const citySun4 = document.querySelector('.citySun4')
const citySun5 = document.querySelector('.citySun5')
const citySun6 = document.querySelector('.citySun6')
const logo = document.querySelector('.logoBox')

document.addEventListener('scroll', function() {
  let value = window.scrollY
  
  title.style.marginTop = value * 1.5 + 'px'
  leaf1.style.left = -value * 0.8 + 'px'
  leaf1.style.bottom = value * 0.25 + 'px'
  leaf2.style.left = value * 0.8 + 'px'
  leaf2.style.bottom = value * 0.25 + 'px'
  bush3.style.left = -value * 0.9 + 'px'
  bush2.style.bottom = -value * 0.3 + 'px'
  mount1.style.bottom = -value * 0.3 + 'px'
  mount2.style.bottom = value * 0.025 + 'px'
  arrow.style.marginTop = value * 3.5 + 'px'
  citySun2.style.marginBottom = value * 0.125 + 'px'
  citySun3.style.marginBottom = value * 0.015 + 'px'
  citySun4.style.marginBottom  = value * -0.175 + 'px'
  citySun5.style.marginBottom  = value * -0.125 + 'px'
  citySun6.style.marginBottom  = value * -0.075 + 'px'
  logo.style.marginBottom = value - 25 + 'px'
})