import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../../utils/helpers';



  function Nav(props) {


  return (
    <header className="flex-row px-1">
      <h2 class="mx-2">
        <a href="/">
           Connor Allen
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href='#About'>
              About me
            </a>
          </li>
          <li class="mx-2">
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li class="mx-2">
            <a href="#Contact">
              Contact
            </a>
          </li>
          <li class="mx-2">
            <a href="#Resume">
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Nav;
