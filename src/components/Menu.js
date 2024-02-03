import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    <div className='menu'>
      <div className='menu-wrapper'>
        <div className='menu-link'>About</div>
        <div className='menu-link'>Blog</div>
        <div className='menu-link'>Contact</div>
        <div className='menu-link'>Deals</div>
        <div className='menu-link'>FAQ</div>
      </div>
    </div>
  )
}

export default Menu
