import React, { useState } from 'react';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';


export enum ComponentState {
  Normal = 'Normal',
  Edit = 'Edit',
}

export type ratingProps = {
  rating?: number;
  state: ComponentState;
};
export type RatingProps = ComponentProps<ratingProps, never, never>;

export function Rating({ data }: RatingProps) {
  const [selectedStars, setSelectedStars] = useState(data.p.rating? data.p.rating : 0);

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex);
  };

  return (
    <div style={{ display: 'flex' }}>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <svg
          key={starIndex}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill={starIndex <= selectedStars ? '#FFAB00' : 'none'}
          stroke={starIndex <= selectedStars ? '#FFAB00' : '#ccc'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            marginRight: '2px',
            cursor: 'pointer',
          }}
          {...(data.p.state==ComponentState.Edit && {
            onClick: () => handleStarClick(starIndex),
          })
          }
        >
          <path d="M12 2 L15.09 8.09 L22 9 L17 14 L18.09 21 L12 17 L5.91 21 L7 14 L2 9 L8.91 8.09 Z" />
        </svg>
      ))}
    </div>
  );
}
