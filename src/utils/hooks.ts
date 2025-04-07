import { useGetCategoryQuery } from "../servises/category";
import { useGetProductsQuery } from "../servises/product";
import { createMenuList } from "./utils";

export const useGetMenu = () => {
  const {
    data: dataCategory,
    isLoading: isLoadingCategory,
    isError: isCategoryError,
  } = useGetCategoryQuery(undefined);
  const {
    data: dataProduct,
    isLoading: isLoadingProduct,
    isError: isProductError,
  } = useGetProductsQuery(undefined);

  const isLoading = isLoadingCategory || isLoadingProduct;
  const isError = isCategoryError || isProductError;
  const isCategory = !!dataCategory;

  const data = createMenuList(dataCategory, dataProduct);
  return {
    data,
    isLoading,
    isError,
    isCategory,
  };
};
