export interface Menu {
  path: string;
  name: string;
}

export const MENU: Menu[] = [
  {
    path: "dashboard",
    name: "Dashboard"
  },
  {
    path: "posts",
    name: "Posts"
  },
  {
    path: "albums",
    name: "Albums"
  },
  {
    path: "photos",
    name: "Photos"
  }
];
