import React from 'react';
import { Link } from 'react-router-dom';
import { ToolbarT } from '../../../utils/types';

export const ToolBar: React.FC<ToolbarT> = ({path, name}) => {
  return (
    <div>
        <Link to={path}></Link>
    </div>
  );
};
