import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorComponent: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-40 container'>
        <p>Not fond 404</p>
        <Link to="/">home</Link>
    </div>
  );
};
