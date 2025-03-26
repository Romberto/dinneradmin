import React, { useEffect, useState } from "react";
import { ItemT } from "../../../utils/types";
import { ItemList } from "../ItemList/ItemList";
import { useGetCategoriesQuery } from "../../../servises/category";
import { useGetProductsQuery } from "../../../servises/product";

// компонент для списка всех элементов в категории

export const ElementsList: React.FC<{ queryType: "category" | "product"}> = ({
  queryType,
}) => {
  let data;
  let isLoading;
  let isError;
  if (queryType === "category") {
    const result = useGetCategoriesQuery(undefined);
    data = result.data;
    isLoading = result.isLoading;
    isError = result.isError;
  } else if (queryType === "product") {
    console.log('product')
    const result = useGetProductsQuery(undefined);
    data = result.data;
    isLoading = result.isLoading;
    isError = result.isError;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }
  return (
    <div className="container">
      
      <ul>
        {data?.map((item:ItemT) => (
          <ItemList key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
};
