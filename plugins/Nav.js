import Vue from 'vue'
import Nav from "../components/Nav/Nav";
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const myNav = document.querySelector('body')
const navLink = document.querySelectorAll('.nav-link')

const mobileMenu = () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  myNav.classList.toggle("nav-open-noscroll")
}

const closeMenu = () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
  myNav.classList.remove("nav-open-noscroll")
}

hamburger.addEventListener('click', mobileMenu)
navLink.forEach((l) => l.addEventListener('click', closeMenu))

Vue.component('Nav',Nav)
