import React from "react";
import { ItemT } from "../../../utils/types";
import pen from "../../../assets/pen_icon.svg";
import basket from "../../../assets/basket.svg";

// список элементов с кнопкой редактировать и удалить
export const ItemList: React.FC<ItemT> = ({ name }) => {
  return (
    <li className="grid grid-cols-6 gap-1 items-center w-full">
      <p className="col-span-4">{name}</p>
      <button className="btn-orange col-span-1">
        <img className="w-6" src={pen} alt="карандаш - иконка изменения" />
      </button>
      <button className="btn-orange col-span-1"><img src={basket} alt="корзина - символ удаления" className="w-6"/></button>
    </li>
  );
};
