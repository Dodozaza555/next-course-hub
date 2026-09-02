export type Member = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  members: Member[];
  imageUrl: string;
};