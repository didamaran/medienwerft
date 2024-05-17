export type NavigationItem = {
  label: string;
  link: string;
};

export type Book = {
  id: number;
  title: string;
  subtitle: string;
  isbn: number;
  abstract: string;
  author: string;
  publisher: string;
  price: string;
  numPages: number;
  cover: string;
  userId: number;
};
