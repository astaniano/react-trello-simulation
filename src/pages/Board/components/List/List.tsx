import React from 'react';
import ICard from '../../../../common/interfaces/ICard';
import Card from '../Card/Card';

interface ListProps {
  title: string;
  cards: ICard[];
}

export default function List({ title, cards }: ListProps): JSX.Element {
  return (
    <div style={{ background: '#d3d3db', overflow: 'auto' }}>
      <h2>{title}</h2>
      <div>
        {cards.map((card: ICard) => (
          <Card key={card.id} title={card.title} />
        ))}
      </div>
    </div>
  );
}
