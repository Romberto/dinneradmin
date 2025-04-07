import React, { useCallback, useState } from "react";
import { CategoryT, FetchResultT, ProductT } from "../../../utils/types";
import { useGetCategoryQuery } from "../../../servises/category";
import { useGetProductsQuery } from "../../../servises/product";
import { createMenuList } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { Modal } from "../../UI/Modal/Modal";
import { useGetMenu } from "../../../utils/hooks";
import { CategoryForm } from "../../UI/Forms/CategoryForm";

export const Menu: React.FC = () => {
  const { data, isLoading, isError, isCategory } = useGetMenu();
  const [categoryFromIsShow, setCategoryFromIsShow] = useState(false);
  const [productFormIsShow, setProductIsShow] = useState(false)
  const handleAddCategory = () => {
    console.log("category");
    setCategoryFromIsShow(!categoryFromIsShow);
  };
  const handleAddProduct = () => {
    console.log("product");
    setProductIsShow(!productFormIsShow)
  };

  console.log("render menu component");
  return (
    <div className="container">
      {categoryFromIsShow && (
        <Modal onClose={() => setCategoryFromIsShow(!categoryFromIsShow)} >
          <CategoryForm/>
        </Modal>
      )}
      {productFormIsShow && 
      <Modal onClose={()=> setProductIsShow(!productFormIsShow)}/>}
      <div className="w-full grid grid-cols-2  gap-0.5 mb-1.5">
        <button
          onClick={handleAddCategory}
          className={`btn ${isCategory ? "col-span-1" : "col-span-2"}`}
        >
          добавить категорию
        </button>
        {isCategory && (
          <button onClick={handleAddProduct} className="btn col-span-1">
            добавить продукт
          </button>
        )}
      </div>
      {data &&
        Object.entries(data).map(([categoryName, products]) => (
          <div key={categoryName}>
            <h2 className="bg-orange-600 text-white font-bold text-xl py-1.5 mb-2">
              {categoryName}
            </h2>
            <ul className="products-list">
              {products.map((product: ProductT, index: number) =>
                index % 2 === 0 ? (
                  <li key={product.id} className="bg-blue-500 mb-0.5">
                    <Link to={`http://localhost:3000/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={product.id}
                    className="bg-gray-500 text-white mb-0.5"
                  >
                    <Link to="#">{product.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
    </div>
  );
};
