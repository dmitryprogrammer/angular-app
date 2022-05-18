import {Photos} from "./photos.models";

export interface Album {
  userId: number;
  id: number;
  title: string;
  photos?: Photos;
}

export type Albums = Album[];
