export interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: 'artist';
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIDS {
  isrc: string;
}

export interface Album {
  album_type: 'album' | 'compilation' | 'single';
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: 'day' | 'year';
  total_tracks: number;
  type: 'album' | 'compilation' | 'single';
  uri: string;
}
export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  uri: string;
}

export interface Context {
  external_urls: ExternalUrls;
  href: string;
  type: 'playlist';
  uri: string;
}

export interface ResultItem {
  track: Track;
  played_at: Date;
  context: Context;
}

export interface Result {
  items: ResultItem[];
  next: string;
  limit: number;
  href: string;
}

export interface Playlist {
  collaborative: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: any[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTrack;
  type: string;
  uri: string;
}

export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

type PlaylistTrack = any;
