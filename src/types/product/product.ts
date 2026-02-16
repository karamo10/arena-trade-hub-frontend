export type Product = {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  price: number;
  categories: string;
  description?: string;
  instock?: boolean;
};

