import React from "react";
import { CategoryT, FetchResultT, ProductT } from "../../../utils/types";
import { useGetCategoryQuery } from "../../../servises/category";
import { useGetProductsQuery } from "../../../servises/product";

export const Menu: React.FC = () => {
  const { data: dataCategory, isLoading: isLoadingCategory } =
    useGetCategoryQuery(undefined);
  const { data: dataProduct, isLoading: isLoadingProduct } =
    useGetProductsQuery(undefined);

  if (isLoadingCategory || isLoadingProduct) return <p>Loading...</p>;

  const createMenuList = (dataC: CategoryT[], dataP: ProductT[]) => {
    const res: FetchResultT = {};
    dataC.forEach((cat: CategoryT) => {
      res[cat.name] = [];
      dataP.forEach((product: ProductT) => {
        if (cat.id === product.category) {
          res[cat.name].push(product);
        }
      });
    });
    return res;
  };

  if (!dataCategory || !dataProduct) return <p>No data available</p>;

  const data = createMenuList(dataCategory, dataProduct);

  return (
    <div className="container">
      {Object.entries(data).map(([categoryName, products]) => (
        <div key={categoryName}>
          <h2 className="bg-orange-600 text-white font-bold text-xl py-1.5">{categoryName}</h2>
          <ul>
            {products.map((product: ProductT) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

