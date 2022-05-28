import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h1>LaBuena Cafe</h1>
        <ul>
          <li><a>Twitter</a></li>
          <li><a>Instagram</a></li>
          <li><a>Github</a></li>
        </ul>
      </div>
      <div>
        <h1>Developer</h1>
        <ul>
          <li><a>Agnes</a></li>
          <li><a>Sakura</a></li>
          <li><a>Kazuha</a></li>
        </ul>
      </div>
      <div>
        <h1>Made with</h1>
        <ul>
          <li><a>React</a></li>
          <li><a>HTML</a></li>
          <li><a>CSS</a></li>
          <li><a>FireBase</a></li>
          <li><a>Github</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Footer;
