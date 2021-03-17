import React from 'react';

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps): JSX.Element {
  return <h3> {title} </h3>;
}
