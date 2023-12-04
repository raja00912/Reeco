import React from 'react'
import './navbarstyle.css'

function Navbar() {
    return (
        <div id='navbarDiv'>
            <span>Reeco</span>
            <span>Store</span>
            <span>Orders</span>
            <span>Analytics</span>
            <span className='cart'>Cart</span>
        </div>
    )
}

export default Navbar