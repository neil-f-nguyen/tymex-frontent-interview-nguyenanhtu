export type IProductCategory =
  | "Upper Body"
  | "Lower Body"
  | "Hat"
  | "Shoes"
  | "Accessory"
  | "Legendary"
  | "Mythic"
  | "Epic"
  | "Rare";
export type IProductTheme = "Dark" | "Light" | "Colorful" | "Halloween";
export type IProductTier = "Basic" | "Premium" | "Deluxe";

export interface IProduct {
  id: number;
  title: string;
  category: IProductCategory;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: IProductTheme;
  tier: IProductTier;
  imageId: number; // 1 -> 20 (integer)
  author: IAuthor;
}

export type IOnlineStatus = "online" | "offline" | "idle" | "busy";
export interface IAuthor {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: IOnlineStatus;
}

export interface PaginationParams {
  _page?: number;
  _limit?: number;
}

export interface SortParams {
  _sort?: string;
  _order?: "asc" | "desc";
}

export interface SearchParams {
  q?: string;
  title_like?: string;
}

export type GetProductsParams = PaginationParams & SortParams & SearchParams;
