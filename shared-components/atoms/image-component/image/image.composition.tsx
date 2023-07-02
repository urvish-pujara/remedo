import React from 'react';
import { Box } from '@mui/material';
import { ComponentState, Image, ImageProps } from './image';

const basicImageProps: ImageProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.image',
    p: {
      src:
        'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      state: ComponentState.Normal,
      alt: 'Sunflower',
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

const editImageProps: ImageProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.image',
    p: {
      src:
        'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      state: ComponentState.Edit,
      alt: 'Sunflower',
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

const incorrectImageProps: ImageProps = {
  component: {
    id: 'test',
    orgId: 'test',
    component: '',
    version: '0.1',
    variant: 'Basic',
  },
  data: {
    fieldName: 'test.about.image',
    p: {
      src:
        'https://images.pexs.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      state: ComponentState.Edit,
      alt: 'Sunflower',
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    },
    type: 'normal',
    category: 'static',
  },
};

export const BasicImage = () => {
  return (
    <Image data={basicImageProps.data} component={basicImageProps.component} />
  );
};

export const ImageInContainer = () => {
  return (
    <Box sx={{ width: '500px' }}>
      <Image
        data={basicImageProps.data}
        component={basicImageProps.component}
      />
    </Box>
  );
};

export const EditImage = () => {
  return (
    <Box sx={{ width: '500px' }}>
      <Image data={editImageProps.data} component={editImageProps.component} />
    </Box>
  );
};

export const ImageWithIncorrectUrl = () => {
  return (
    <Box sx={{ width: '500px' }}>
      <Image data={incorrectImageProps.data} component={incorrectImageProps.component} />
    </Box>
  );
};
