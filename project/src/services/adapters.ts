import { TComment } from '../types/comment';
import { TOffer } from '../types/offer';
import { TServerOffer } from '../types/server-offer';
import { TServerComment } from '../types/server-comment';
import { TServerAuthInfo } from '../types/server-auth-info';
import { TAuthInfo } from '../types/auth-info';

export function commentsAdapter(serverComments: TServerComment[]): TComment[] {
  return serverComments.map((serverComment) => ({
    comment: serverComment.comment,
    date: serverComment.date,
    id: serverComment.id,
    rating: serverComment.rating,
    user: {
      avatarUrl: serverComment.user.avatar_url,
      id: serverComment.user.id,
      isPro: serverComment.user.is_pro,
      name: serverComment.user.name,
    }
  }));
}

export function offerAdapter(serverOffer: TServerOffer): TOffer {
  return {
    bedrooms: serverOffer.bedrooms,
    city: {
      location: {
        latitude: serverOffer.city.location.latitude,
        longitude: serverOffer.city.location.longitude,
        zoom: serverOffer.city.location.zoom,
      },
      name: serverOffer.city.name,
    },
    description: serverOffer.description,
    goods: serverOffer.goods,
    host: {
      avatarURL: serverOffer.host.avatar_url,
      id: serverOffer.host.id,
      isPro: serverOffer.host.is_pro,
      name: serverOffer.host.name,
    },
    id: serverOffer.id,
    images: serverOffer.images,
    isFavorite: serverOffer.is_favorite,
    isPremium: serverOffer.is_premium,
    location: {
      latitude: serverOffer.location.latitude,
      longitude: serverOffer.location.longitude,
      zoom: serverOffer.location.zoom,
    },
    maxAdults: serverOffer.max_adults,
    previewImage: serverOffer.preview_image,
    price: serverOffer.price,
    rating: serverOffer.rating,
    title: serverOffer.title,
    type: serverOffer.type,
  };
}

export function authInfoAdapter(serverAuthInfo: TServerAuthInfo): TAuthInfo {
  return {
    'avatarUrl': serverAuthInfo.avatar_url,
    'email': serverAuthInfo.email,
    'id': serverAuthInfo.id,
    'isPro': serverAuthInfo.is_pro,
    'name': serverAuthInfo.name,
    'token': serverAuthInfo.token,
  };
}
