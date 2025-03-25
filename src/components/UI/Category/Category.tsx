import React, { useEffect, useState } from "react";
import { ItemT } from "../../../utils/types";
import { ItemList } from "../ItemList/ItemList";

const fetchCategory = () => {
  return fetch("http://localhost:3000/category").then((res) => res.json());
};

export const Category: React.FC = () => {
  const [category, setCategory] = useState<ItemT[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategory();
      setCategory(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <ul>
        {category.map((item) => (
          <ItemList key={item.id} name={item.name}/>
        ))}
      </ul>
    </div>
  );
};
