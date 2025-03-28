export type ItemT = {
  id?: string;
  name: string;
};

export type ToolbarT = {
  path: 'menu'| 'staff';
  name: string;
};

export type CategoryT ={
  id: string,
  name: string
}
export type ProductT = {
  id: string,
  name: string,
  category: string
}
export type FetchResultT = {
  [key: string]: ProductT[];
}
