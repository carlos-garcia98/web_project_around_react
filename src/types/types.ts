export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
}

export type CardData = {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}