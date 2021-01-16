export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: null | string;
  total: number;
}

export interface Image {
  height: null | string;
  url: string;
  width: null | string;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}
