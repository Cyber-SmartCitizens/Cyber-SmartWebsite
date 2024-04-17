const title = document.querySelector('.title')
const leaf = document.querySelector('.leaf3')
const leaf2 = document.querySelector('.leaf4')
const tree = document.querySelector('.treeNight')
const hill4 = document.querySelector('.hill4Night')
const hill5 = document.querySelector('.hill5Night')
const hill1 = document.querySelector('.hill1Night')
const hill2 = document.querySelector('.hill2Night')
const hill3 = document.querySelector('.hill3Night')
const city2 = document.querySelector('.city2')
const city3 = document.querySelector('.city3')
const city4 = document.querySelector('.city4')
const city5 = document.querySelector('.city5')
const city6 = document.querySelector('.city6')
const arrow = document.querySelector('.downArrow')
const logo = document.querySelector('.logoBox')

document.addEventListener('scroll', function() {
  let value = window.scrollY
  
  title.style.marginTop = value * 1.5 + 'px'
  leaf.style.left = value * 0.8 + 'px'
  leaf2.style.left = -value * 0.8 + 'px'
  leaf.style.top = -value * 0.25 + 'px'
  leaf2.style.top = value * 0.25 + 'px'
  hill4.style.left = value * 0.4 + 'px'
  hill4.style.bottom = -value * 0.3 + 'px'
  hill5.style.left = -value * 1.1 + 'px'
  hill5.style.bottom = -value * 0.3 + 'px'
  hill1.style.bottom = value * 0.0125 + 'px'
  hill3.style.bottom = -value * 0.055 + 'px'
  arrow.style.marginTop = value * 3.5 + 'px'
  tree.style.marginBottom = -value * 0.25 + 'px'
  city2.style.marginBottom = value * 0.125 + 'px'
  city3.style.marginBottom = value * 0.015 + 'px'
  city4.style.marginBottom  = value * -0.175 + 'px'
  city5.style.marginBottom  = value * -0.125 + 'px'
  city6.style.marginBottom  = value * -0.075 + 'px'
  logo.style.marginBottom = value - 25 + 'px'
})