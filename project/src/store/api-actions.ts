import { TThunkActionResult } from '../types/action';
import { setOffers } from './action';
import { requireAuth } from './action';
// import { TAuthData } from '../types/auth-data';
// import { saveToken, dropToken, Token } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';
import { offersAdapter } from '../services/adapters';
import { TServerOffer } from '../types/serverOffer';
// import { TServerComment } from '../types/server-comment';

export const fetchOffersAction = (): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data: serverOffers} = await api.get<TServerOffer[]>(APIRoute.Hotels);
    const offers = offersAdapter(serverOffers);
    dispatch(setOffers(offers));
  };

export const checkAuthAction = (): TThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuth(AuthorizationStatus.Auth));
      })
      .catch();
  };