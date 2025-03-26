import React, { useEffect, useState } from "react";
import { ItemT } from "../../../utils/types";
import { ItemList } from "../ItemList/ItemList";

const fetchCategory = () => {
  return fetch("http://localhost:3000/category").then((res) => res.json());
};

// компонент для списка всех элементов в категории

export const ElementsList: React.FC<{ queryType: string }> = ({
  queryType,
}) => {
  const [elements, setElements] = useState<ItemT[]>([]);
  switch (queryType) {
    case "category":
      useEffect(() => {
        const fetchData = async () => {
          const data = await fetchCategory();
          setElements(data);
        };
        fetchData();
      }, []);
      break;
  }

  return (
    <div className="container">
      <ul>
        {elements.map((item) => (
          <ItemList key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
};
