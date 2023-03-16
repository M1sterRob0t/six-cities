export type TServerComment= {
  'comment': string;
  'date': string;
  'id': number;
  'rating': number;
  'user': {
    'avatar_url': string;
    'id': number;
    'is_pro': boolean;
    'name': string;
  };
};
