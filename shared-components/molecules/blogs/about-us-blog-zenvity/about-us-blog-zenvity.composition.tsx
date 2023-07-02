import { ThemeProvider } from '@mui/material';
import { ComponentState } from '@remedoclinitech/staging.atoms.image-component.image';
import { theme } from '@remedoclinitech/staging.common.theme';
import React from 'react';
import {
  AboutUsBlogZenvity,
  AboutUsBlogZenvityProps,
} from './about-us-blog-zenvity';

const props: AboutUsBlogZenvityProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '@remedoclinitech/staging.molecules.blogs.about-us-blog-zenvity',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'about-us.blog.zenvity',
    category: 'static',
    type: 'normal',
    p: {
      style: {
        textAlign: "center"
      }
    },
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
            fieldName: 'about-us.text.heading',
            p: {
              text: 'About Us',
              state: ComponentState.Edit,
              variant: 'h2',
              mb: 2,
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
            fieldName: 'about-us.text.sub-heading',
            p: {
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat arcu.',
              state: ComponentState.Edit,
              variant: 'subtitle2',
              color: '#757677',
              mb: 4,
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
            fieldName: 'about-us.text.content',
            p: {
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat arcu. In vehicula sem augue. Vivamus sollicitudin neque ut nunc scelerisque, quis posuere urna varius. Cras eget vestibulum purus. Duis sit amet arcu quis nisi laoreet elementum. Sed nulla magna, imperdiet varius imperdiet ut, eleifend eu nunc. Aliquam nec tristique lectus. Curabitur faucibus posuere dolor vel hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat arcu. In vehicula sem augue. Vivamus sollicitudin neque ut nunc scelerisque, quis posuere urna varius. Cras eget vestibulum purus. Duis sit amet arcu quis nisi laoreet elementum. Sed nulla magna, imperdiet varius imperdiet ut, eleifend eu nunc. Aliquam nec tristique lectus. Curabitur faucibus posuere dolor vel hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat arcu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nMorbi id erat arcu. In vehicula sem augue. Vivamus sollicitudin neque ut nunc scelerisque, quis posuere urna varius. Cras eget vestibulum purus. Duis sit amet arcu quis nisi laoreet elementum. Sed nulla magna, imperdiet varius imperdiet ut, eleifend eu nunc. Aliquam nec tristique lectus. Curabitur faucibus posuere dolor vel hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat arcu. In vehicula sem augue. Vivamus sollicitudin neque ut nunc scelerisque, quis posuere urna varius. Cras eget vestibulum purus. Duis sit amet arcu quis nisi laoreet elementum. Sed nulla magna, imperdiet varius imperdiet ut, eleifend eu nunc. Aliquam nec tristique lectus. Curabitur faucibus posuere dolor vel hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id erat arcu.',
              state: ComponentState.Edit,
              variant: 'subtitle2',
              color: '#757677',
              mb: 2,
              textAlign: "left"
            },
            category: 'static',
            type: 'normal',
          },
        },
      ],
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
            fieldName: 'about-us.image.main',
            p: {
              src:
                'https://assets.website-files.com/62a79bec0d6bca3a3689f435/62c41443f8ff422621a34d9b_about-hero-p-1600.jpeg',
              alt: 'Sunflower',
              state: ComponentState.Normal,
              style: {
                maxWidth: '100%',
                maxHeight: '100%',
                marginBottom: "35px",
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
            component: '@remedoclinitech/staging.atoms.image-component.image',
            version: '0.1',
            variant: 'Basic',
          },
          data: {
            fieldName: 'about-us.image.footer',
            p: {
              src:
                'https://assets.website-files.com/62a79bec0d6bca3a3689f435/62c414e143620e3ddc96e1a5_signature-p-500.png',
              alt: 'Sunflower',
              state: ComponentState.Normal,
              style: {
                maxWidth: '280px',
              },
            },
            category: 'static',
            type: 'normal',
          },
        },
      ],
    },
  },
};

export const BasicAboutUsBlogZenvity = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href={`https://fonts.googleapis.com/css2?${[
        { name: 'Lexend', weight: 300 },
        { name: 'Lora', weight: 500 },
      ]
        .map((f: any) => `family=${f.name}:wght@${f.weight}`)
        .join('&')}&display=swap`}
      rel="stylesheet"
    />
    <ThemeProvider theme={theme}>
      <AboutUsBlogZenvity {...props} />
    </ThemeProvider>
  </>
);
