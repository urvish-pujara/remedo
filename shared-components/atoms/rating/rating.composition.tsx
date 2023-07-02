import React from 'react';
import { ComponentState, Rating } from './rating';

export const BasicRating = () => (
  <Rating
    component={{
      id: '7984ba4c-1340-4062-86e6-072dc81c334f',
      orgId: '57478c51-9968-498d-8659-699b5e6ce432',
      component: '@remedoclinitech/staging.molecules.cards.review-card',
      version: '0.1',
      variant: 'basic',
    }}
    data={{
      fieldName: 'Rating',
      type: 'normal',
      category: 'static',
      p: {
        rating: 4,
        state: ComponentState.Edit,
      },
    }}
  />
);
