import React from 'react';
import rssLogo from '../assets/rs_school_js.svg';
import githubLogo from '../assets/GitHub-Mark.png';

function Footer (): JSX.Element {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="https://github.com/viktorykings"><img src={githubLogo} alt="RSS" /></a></li>
          <li><a href="https://github.com/Andkhiz"><img src={githubLogo} alt="RSS" /></a></li>
          <li><a href="https://rs.school/js/"><img src={rssLogo} alt="RSS" /></a></li>
          <li>2022</li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
