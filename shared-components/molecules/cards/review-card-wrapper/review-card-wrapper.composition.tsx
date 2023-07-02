import { ComponentState } from '@remedoclinitech/staging.atoms.text-component.text';
import React from 'react';
import { ReviewCardWrapper, ReviewCardWrapperProps } from './review-card-wrapper';
import {ComponentState as RatingComponentState} from '@remedoclinitech/staging.atoms.rating';
export const BasicReviewCardWrapper = () => (
  <ReviewCardWrapper
    component={{
      id: '7984ba4c-1340-4062-86e6-072dc81c334f',
      orgId: '57478c51-9968-498d-8659-699b5e6ce432',
      component: '@remedoclinitech/staging.molecules.cards.review-card',
      version: '0.1',
      variant: 'basic',
    }}
    data={{
      fieldName: 'Review Card',
      type: 'normal',
      category: 'static',
      p: {
        styles: {},
      },
      cArray: {
        components: [
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.molecules.cards.review-card',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card-wrapper.review-card',
              type: 'normal',
              category: 'static',

              p: {
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
                        src: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                        text: 'one ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
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
                        textAlign: "left",
                        state: ComponentState.Edit,
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
                      component: '@remedoclinitech/staging.atoms.rating',
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
            },
          },
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.molecules.cards.review-card',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card-wrapper.review-card',
              type: 'normal',
              category: 'static',
              p: {
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
                        src: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                        text: 'two ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
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
                        textAlign: "left",
                        state: ComponentState.Edit,
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
                      component: '@remedoclinitech/staging.atoms.rating',
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
            },
          },
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.molecules.cards.review-card',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card-wrapper.review-card',
              type: 'normal',
              category: 'static',
              p: {
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
                        src: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                        text: 'third ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
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
                        textAlign: "left",
                        state: ComponentState.Edit,
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
                      component: '@remedoclinitech/staging.atoms.rating',
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
            },
          },
          {
            component: {
              id: 'test',
              orgId: 'test',
              component: '@remedoclinitech/staging.molecules.cards.review-card',
              version: '0.1',
              variant: 'Basic',
            },
            data: {
              fieldName: 'review-card-wrapper.review-card',
              type: 'normal',
              category: 'static',
              p: {
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
                        src: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                        text: 'four ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
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
                        textAlign: "left",
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
                      component: '@remedoclinitech/staging.atoms.rating',
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
            },
          }
        ],
      },
    }}
  />
);
