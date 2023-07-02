import { Box, SxProps } from '@mui/material';
import {
  Image,
  ImageProps,
} from '@remedoclinitech/staging.atoms.image-component.image';
import {
  Text,
  TextProps,
} from '@remedoclinitech/staging.atoms.text-component.text';
import { findComponent } from '@remedoclinitech/staging.common.find-component';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import React from 'react';

type aboutUsBlogZenvityProps = {
  style?: SxProps;
};

type children = {
  '@remedoclinitech/staging.atoms.text-component.text': TextProps[];
  '@remedoclinitech/staging.atoms.image-component.image': ImageProps[];
};

export type AboutUsBlogZenvityProps = ComponentProps<
  aboutUsBlogZenvityProps,
  children,
  never
>;

export function AboutUsBlogZenvity({ data }: AboutUsBlogZenvityProps) {
  return data?.cMap ? (
    <Box sx={data.p.style}>
      {findComponent(
        Text,
        data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
        'about-us.text.heading'
      )}
      <Box sx={{ mx: { xs: 0, lg: "20%" } }}>
        {findComponent(
          Text,
          data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
          'about-us.text.sub-heading'
        )}
      </Box>
      {findComponent(
        Image,
        data.cMap['@remedoclinitech/staging.atoms.image-component.image'],
        'about-us.image.main'
      )}
      <Box sx={{ width: { md: "70%", xs: "95%" }, margin: "auto" }}>
        {findComponent(
          Text,
          data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
          'about-us.text.content'
        )}
      </Box>
      {/* {findComponent(
        Image,
        data.cMap['@remedoclinitech/staging.atoms.image-component.image'],
        'about-us.image.footer'
      )} */}
    </Box>
  ) : (
    <></>
  );
}
