import React from 'react';
import './boardLabel.scss';

interface BoardLabelProps {
  title: string;
}

export default function BoardLabel({ title }: BoardLabelProps): JSX.Element {
  return <div className="boardLable">{title}</div>;
}
