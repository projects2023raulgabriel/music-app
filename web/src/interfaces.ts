export interface TrackObjectSimplified {
  artists: ArtistObjectSimplified[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  is_playable?: boolean;
  linked_from?: TrackLinkObject;
  name: string;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
}
export interface ArtistObjectSimplified {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}
export interface ExternalUrlObject {
  spotify: string;
}
export interface TrackLinkObject {
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  type: "track";
  uri: string;
}
export interface IToken {
  token: null | string;
}
