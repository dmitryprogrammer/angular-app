export interface Photo {
  albumId: number;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type Photos = Photo[];
