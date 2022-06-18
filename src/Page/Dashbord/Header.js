import React from 'react'

function Header({setisAdding}) {
  return (
    <header>
       <h1>Employee Management Software</h1>
       <div>
        <button onClick={()=>setisAdding(true)} className='round-button'>Add Button</button>
       </div>
    </header>
  )
}

export default Header