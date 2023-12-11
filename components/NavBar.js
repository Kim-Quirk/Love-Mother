import React from 'react';
import '../css/Nav.css';

function NavBar() {
    const pages = ['Home', 'Donna\'s Diary', 'Subscribe'];
    const navLinks = pages.map(page => {
      return (
        <li><a href={'/' + page}>
           &nbsp;{page}
        </a></li>
      )
    });

    return <nav><ul>{navLinks}</ul></nav>;
}

export default NavBar;