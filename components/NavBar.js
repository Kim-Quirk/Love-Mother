import React from 'react';
// import '../css/Nav.css';

function NavBar() {
    const pages = ['Home', 'Donna\'s Diary', 'Subscribe'];
    const navLinks = pages.map(page => {
      return (
        <li class="nav-item"><a class="nav-link" href={'/' + page}>
           &nbsp;{page}
        </a></li>
      )
    });

    return <nav><ul class="nav">{navLinks}</ul></nav>;
}

export default NavBar;