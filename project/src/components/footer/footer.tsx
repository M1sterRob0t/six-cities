import { Link } from 'react-router-dom';
import { Path } from '../../const';
import { memo } from 'react';

function Footer(): JSX.Element {

  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={Path.Main}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}

export default memo(Footer);
