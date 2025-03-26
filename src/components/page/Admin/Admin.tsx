import React from "react";
import { Toolbar } from "../../UI/Toolbar/Toolbar";

export const Admin: React.FC = () => {
  return (
    <div className="container">
      <ul className="flex flex-col w-full">
        <Toolbar path={'/category'} name={'категории'}/>
        <Toolbar path={'/product'} name={'блюда'}/>
      </ul>
    </div>
  );
};
