import React from "react";
import { Link } from "react-router-dom";
import plus from '../../../assets/plus_icon.svg'
import { ToolbarT } from "../../../utils/types";


// отображает раздел с названием и возможностью добавления нового элемента в этот раздел
export const Toolbar: React.FC<ToolbarT> = ({path, name}) => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-1">
        <Link to={path} className="btn-orange col-span-4">
          {name}
        </Link>
        <button className="btn-orange col-span-2">
          <img src={plus} alt="plus" className="w-4" />
        </button>
      </div>
    </div>
  );
};
