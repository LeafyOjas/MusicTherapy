import React from 'react'
export const Navbar = () => {
  return (
    <div className='nav d-flex flex-row justify-content-around align-items-center'>
        <a className='navLink' href='#role'>Home</a>
        <a className='navLink' href='#description'>Description</a>
        <a className='navLink' href='#history'>History</a>
        <a className='navLink' href='#blog'>Blog</a>
    </div>
  )
}
