import { Link } from 'react-router-dom';
import { Path } from '../../const';

function NotFound404(): JSX.Element {
  return (
    <main className="page__main page__main--login" data-testid={'404'}>
      <div className="page__login-container container">
        <section className="login">
          <h1> 404<br/>Page Not Found</h1>
          <h3 style={{color: '#4481C3'}}><Link to={Path.Main}>Go to the Main Page</Link></h3>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
          </div>
        </section>
      </div>
    </main>

  );
}

export default NotFound404;
