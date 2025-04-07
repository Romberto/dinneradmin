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
export type CategoryFormModalProps = {

  onClose: () => void;
  children?: React.ReactNode
}
export type InputT = {
  category: string
}

