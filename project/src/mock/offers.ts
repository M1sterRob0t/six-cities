import { TOffer } from '../types/offer';
export const mockOffers: TOffer[] = [
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      avatarURL: 'img/2.png',
      id: 2,
      isPro: false,
      name: 'Alexandra'
    },
    id: 1,
    images: ['img/room.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496355,
      longitude: 4.673877537499934,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 150,
    rating: 3,
    title: 'Wood and stone place',
    type: 'apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarURL: 'img/1.png',
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    id: 2,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 180,
    rating: 3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370217,
        longitude: 4.895163,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher', 'Towels'],
    host: {
      avatarURL: 'img/3.png',
      id: 3,
      isPro: true,
      name: 'Krista'
    },
    id: 3,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'private room',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.',
    goods: ['Heating', 'Cable TV', 'Kitchen', 'Coffee machine', 'Dishwasher', 'Towels'],
    host: {
      avatarURL: 'img/4.png',
      id: 4,
      isPro: false,
      name: 'Dominiq'
    },
    id: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg','img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496355,
      longitude: 4.673877537499934,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 65,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'private room',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 13
      },
      name: 'Cologne'
    },
    description: 'The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.',
    goods: ['Heating', 'Cable TV', 'Kitchen', 'Coffee machine', 'Dishwasher', 'Towels'],
    host: {
      avatarURL: 'img/4.png',
      id: 4,
      isPro: false,
      name: 'Dominiq'
    },
    id: 5,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.935170,
      longitude: 6.953100,
      zoom: 13
    },
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    price: 75,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'private room',
  }
];

