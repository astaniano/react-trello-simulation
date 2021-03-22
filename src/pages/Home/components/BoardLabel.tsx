import React from 'react';
import { NavLink } from 'react-router-dom';
import './boardLabel.scss';

interface BoardLabelProps {
  title: string;
  id: number;
}

export default function BoardLabel({ title, id }: BoardLabelProps): JSX.Element {
  return (
    <NavLink to={`/board/${id}`}>
      <div className="boardLable">{title}</div>
    </NavLink>
  );
}
