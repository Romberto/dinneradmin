import React from 'react';
import plus from '../../../assets/plus_icon.svg'
import { Link } from "react-router-dom";

export const Admin: React.FC = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-6 gap-1'>
          <Link to="/category" className='btn-orange col-span-4'>категории</Link>
          <button className='btn-orange col-span-2'><img src={plus} alt="plus" className='w-4'/></button>
        </div>
    </div>
  );
};
