import { ExternalUrls, Image } from './spotify';

export interface Followers {
  href: null | string;
  total: number;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
