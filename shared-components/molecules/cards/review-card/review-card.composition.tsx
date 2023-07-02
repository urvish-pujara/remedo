import { ComponentState } from '@remedoclinitech/staging.atoms.text-component.text';
import { ComponentState as RatingComponentState } from '@remedoclinitech/staging.atoms.rating';
import React from 'react';
import { ReviewCard, ReviewCardProps } from './review-card';

export const BasicReviewCard = () => (
  <ReviewCard
    component={{
      id: '7984ba4c-1340-4062-86e6-072dc81c334f',
      orgId: '57478c51-9968-498d-8659-699b5e6ce432',
      component: '@remedoclinitech/staging.molecules.cards.review-card',
      version: '0.1',
      variant: 'basic',
    }}
    data={{
      // home.review-section.review-card
      fieldName: 'Review Card',
      type: 'normal',
      category: 'static',
      p: {
        sx: {
          textAlign: "center"
        },
        variant: 'normal',
      },
      cMap: {
        '@remedoclinitech/staging.atoms.image-component.image': [
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.atoms.image-component.image',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card.image',
              p: {
                src:'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
                alt: 'Logo',
                state: ComponentState.Normal,
              },
              category: 'static',
              type: 'normal',
            },
          },
        ],
        '@remedoclinitech/staging.atoms.text-component.text': [
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.atoms.text-component.text',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card.text.description',
              p: {
                text: 'Lorem ipsum dolor sit amet, .',
                state: ComponentState.Edit,
              },
              category: 'static',
              type: 'normal',
            },
          },
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.atoms.text-component.text',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card.text.author',
              p: {
                text: 'John Doe',
                state: ComponentState.Edit,
                sx: {
                  position: 'absolute', bottom: '10px', left: '10px', fontFamily: 'Lexend', color: '#888', fontWeight: 'bold',
                }
              },
              category: 'static',
              type: 'normal',
            },
          },
        ],
        '@remedoclinitech/staging.atoms.rating': [
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.atoms.rating-component.rating',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card.rating',
              p: {
                rating: 4,
                state: RatingComponentState.Edit,
              },
              category: 'static',
              type: 'normal',
            },
          },
        ],
      },
    }}
  />
);
