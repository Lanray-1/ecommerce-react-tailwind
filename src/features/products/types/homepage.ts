export type HomepageCategory = {
  id: string;
  name: string;
  description: string;
  imageSrc?: string;
};

export type HomepageProduct = {
  id: string;
  name: string;
  imageAlt: string;
  imageSrc?: string;
  details: string;
  price?: number; // dollars
};
