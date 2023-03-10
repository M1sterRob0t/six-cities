import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PageNotFound from '../../pages/not-found/page-not-found';
import Layout from '../layout/layout';
import RequireAuth from '../requireAuth/requireAuth';
import { mockOffers } from '../../mock/offers';
import { bindActionCreators, Dispatch} from'@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TActions } from '../../types/action';
import { TState } from '../../types/state';
import { setOffers } from '../../store/action';

interface IAppProps {
  authorizationToken: string;
}

const mapStateToProps = ({offers}: TState) => ({offers});
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({setOffers}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IAppProps;

function App(props: ConnectedComponentProps): JSX.Element {
  const offers = props.offers;
  props.setOffers(mockOffers);

  return (
    <Routes>
      <Route path="/" element={<Layout authorizationToken={props.authorizationToken} />} >
        <Route index element={<PageMain offers={offers} />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="favorites" element={
          <RequireAuth authorizationToken={props.authorizationToken}>
            <PageFavorites offers={offers}></PageFavorites>
          </RequireAuth>
        }
        />
        <Route path="offer/:id" element={<PageRoom />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default connector(App);
