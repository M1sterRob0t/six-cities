import { Link } from 'react-router-dom';
import { Path } from '../../const';
import HeaderNavigation from './header-navigation/header-navigation';
import { memo } from 'react';

interface IHeaderProps {
  isLoginPage?: boolean;
}

function Header({ isLoginPage = false }: IHeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={Path.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isLoginPage ? '' : <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default memo(Header, (prevProps, nextProps) => prevProps.isLoginPage === nextProps.isLoginPage);
