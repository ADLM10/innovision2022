import '../tailwind.css'
import './events.css'

import 'flowbite'

import { render } from 'https://unpkg.com/lit-html?module'

import { navbar } from '../lib/navbar.js'

import logo from '../images/logo_rcciit.png'
import bg from './images/bg.webp'

render(navbar(logo, 'bg-background', '/'), document.body)

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelector('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

document
  .querySelectorAll('[data-wip]')
  .forEach(el => el.classList.add('hidden'))
