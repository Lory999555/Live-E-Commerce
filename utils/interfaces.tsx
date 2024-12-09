export enum ProductCategory {
  Vintage = "Vintage",
  Premium = "Premium",
  Standard = "Standard",
  Special = "Special",
}
export enum Modal {
  Product = "Product",
  Cart = "Cart",
}

//export type modalStatus = "open" | "close";

export function mapApiTagToEnum(tag: string): ProductCategory {
  const tagMapping: { [key: string]: ProductCategory } = {
    Vintage: ProductCategory.Vintage,
    Premium: ProductCategory.Premium,
    Standard: ProductCategory.Standard,
    Special: ProductCategory.Special,
  };
  return tagMapping[tag];
}

export interface Product {
  id: number;
  name: String;
  price: number;
  image: String;
  tag: ProductCategory;
}

export const defaultProduct: Product = {
  id: 999999,
  name: "placeholder",
  price: 999999,
  image: "placeholder",
  tag: ProductCategory.Premium,
};
