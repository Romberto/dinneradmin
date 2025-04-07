import { BASE_URL } from "./const";
import { CategoryT, FetchResultT, ProductT } from "./types";

export const fetchMenu = async (): Promise<FetchResultT> => {
  try {
    const resCategory = await fetch(BASE_URL.concat("category"));
    const resProduct = await fetch(BASE_URL.concat("product"));
    const categoryData = await resCategory.json();
    const productData = await resProduct.json();
    const res: FetchResultT = {};
    categoryData.forEach((cat: CategoryT) => {
      res[cat.name] = [];
      productData.forEach((product: ProductT) => {
        if (cat.id === product.category) {
          res[cat.name].push(product);
        }
      });
    });
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

// создаёт список объектов с ключом Имя категории и значением список продутов которые состоят в этой категории
export const createMenuList = (
  dataC: CategoryT[] | undefined,
  dataP: ProductT[] | undefined
) => {
  if (dataC) {
    const res: FetchResultT = {};
    dataC.forEach((cat: CategoryT) => {
      res[cat.name] = [];
      if (dataP) {
        dataP.forEach((product: ProductT) => {
          if (cat.id === product.category) {
            res[cat.name].push(product);
          }
        });
      }
    });
    return res;
  } else {
    return null;
  }
};
