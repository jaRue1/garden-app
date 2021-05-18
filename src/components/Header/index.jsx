import React from 'react'

function Header() {
  return(
    <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}
export default Header