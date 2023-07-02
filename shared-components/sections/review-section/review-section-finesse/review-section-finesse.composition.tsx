import { ComponentState } from '@remedoclinitech/staging.atoms.text-component.text';
import React from 'react';
import {
  ReviewCardSectionFinesse,
  ReviewCardSectionFinesseProps,
} from './review-section-finesse';
import { ComponentState as RatingComponentState } from '@remedoclinitech/staging.atoms.rating';
export const BasicReviewCardWrapper = () => (
  <ReviewCardSectionFinesse
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
      p: {},
      cMap: {
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
              fieldName: 'review-card-wrapper.text.header',
              p: {
                text: 'What do our patients say?',
                state: ComponentState.Edit,
                variant: 'h3',
                sx: {
                  marginTop: 'auto',
                  marginBottom: '10px',
                  marginLeft: '10px',
                  fontSize: '42px',
                  fontFamily: 'Lora',
                  color: '#454545',
                  lineHeight: '50px',
                },
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
              fieldName: 'review-card-wrapper.text.description',
              p: {
                text:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
                state: ComponentState.Edit,
                sx: {
                  marginTop: 'auto',
                  marginBottom: '10px',
                  marginLeft: '10px',
                  fontSize: '18px',
                  fontFamily: 'Lexend',
                  color: '#757677',
                  lineHeight: '27px',
                  fontStyle: 'light',
                  textAlign: 'center',
                },
              },
              category: 'static',
              type: 'normal',
            },
          },
        ],
        '@remedoclinitech/staging.molecules.cards.review-card': [
          {
            component: {
              id: '7984ba4c-1340-4062-86e6-072dc81c334f',
              orgId: '57478c51-9968-498d-8659-699b5e6ce432',
              component: '@remedoclinitech/staging.molecules.cards.review-card',
              version: '0.1',
              variant: 'basic',
            },
            data: {
              fieldName: 'Review Card',
              type: 'normal',
              category: 'static',
              p: {
                styles: {},
                pageSize: 2,
              },
              cArray: {
                components: [
                  {
                    component: {
                      id: 'test',
                      orgId: 'test',
                      component:
                        '@remedoclinitech/staging.molecules.cards.review-card',
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
                              component:
                                '@remedoclinitech/staging.atoms.image-component.image',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.image',
                              p: {
                                src:
                                  'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.description',
                              p: {
                                text:
                                  'one ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
                                state: ComponentState.Edit,
                                textAlign: "left"
                              },
                              category: 'static',
                              type: 'normal',
                            },
                          },
                          {
                            component: {
                              id: 'test',
                              orgId: 'test',
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.author',
                              p: {
                                text: 'John Doe',
                                textAlign: 'left',
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
                              component:
                                '@remedoclinitech/staging.atoms.rating',
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
                      component:
                        '@remedoclinitech/staging.molecules.cards.review-card',
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
                              component:
                                '@remedoclinitech/staging.atoms.image-component.image',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.image',
                              p: {
                                src:
                                  'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.description',
                              p: {
                                text:
                                  'two ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
                                state: ComponentState.Edit,
                                textAlign: "left"
                              },
                              category: 'static',
                              type: 'normal',
                            },
                          },
                          {
                            component: {
                              id: 'test',
                              orgId: 'test',
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.author',
                              p: {
                                text: 'John Doe',
                                textAlign: 'left',
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
                              component:
                                '@remedoclinitech/staging.atoms.rating',
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
                      component:
                        '@remedoclinitech/staging.molecules.cards.review-card',
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
                              component:
                                '@remedoclinitech/staging.atoms.image-component.image',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.image',
                              p: {
                                src:
                                  'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.description',
                              p: {
                                text:
                                  'third ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
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
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.author',
                              p: {
                                text: 'John Doe',
                                textAlign: 'left',
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
                              component:
                                '@remedoclinitech/staging.atoms.rating',
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
                      component:
                        '@remedoclinitech/staging.molecules.cards.review-card',
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
                              component:
                                '@remedoclinitech/staging.atoms.image-component.image',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.image',
                              p: {
                                src:
                                  'https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png',
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
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.description',
                              p: {
                                text:
                                  'four ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id rhoncus aliquet, nisl libero ultricies nun c, consectetur adipiscing elit. Sed euismod, diam id rhoncus.',
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
                              component:
                                '@remedoclinitech/staging.atoms.text-component.text',
                              version: '0.1',
                              variant: 'Basic',
                            },
                            data: {
                              fieldName: 'review-card.text.author',
                              p: {
                                text: 'John Doe',
                                state: ComponentState.Edit,
                                textAlign: 'left',
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
                              component:
                                '@remedoclinitech/staging.atoms.rating',
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
                ],
              },
            },
          },
        ],
      },
    }}
  />
);
