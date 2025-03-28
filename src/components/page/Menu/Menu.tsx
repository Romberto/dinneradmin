import React, { useEffect } from 'react';
import { CategoryT, FetchResultT, ProductT } from '../../../utils/types';
import { BASE_URL } from '../../../utils/const';

export const Menu: React.FC = () => {
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const resCategory = await fetch(BASE_URL.concat("category"));
        const resProduct = await fetch(BASE_URL.concat("product"));
        const categoryData = await resCategory.json()
        const productData = await resProduct.json()
        const res:FetchResultT = {}
        categoryData.forEach((cat:CategoryT) => {
          res[cat.name] = []
          productData.forEach((product:ProductT) => {
            if(cat.id === product.category){
              res[cat.name].push(product)
            }
          });
        });
        return res
      } catch (error) {
        return Promise.reject(error);
      }
    };
    console.log(fetchMenu());
  }, []);
  return (
    <div className='container'>
        {}
    </div>
  );
};
