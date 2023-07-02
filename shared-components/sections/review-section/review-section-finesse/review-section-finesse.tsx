import React from 'react';
import { Box, SxProps, useMediaQuery, useTheme } from '@mui/material';
import {
  Text,
  TextProps,
} from '@remedoclinitech/staging.atoms.text-component.text';
import { findComponent } from '@remedoclinitech/staging.common.find-component';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import {
  ReviewCardWrapper,
  ReviewCardWrapperProps,
} from '@remedoclinitech/staging.molecules.cards.review-card-wrapper';

type reviewCardSectionFinesseProps = {
  styles?: SxProps;
};
type children = {
  '@remedoclinitech/staging.atoms.text-component.text': TextProps[];
  '@remedoclinitech/staging.molecules.cards.review-card': ReviewCardWrapperProps[];
};

export type ReviewCardSectionFinesseProps = ComponentProps<
  reviewCardSectionFinesseProps,
  children,
  never
>;

export function ReviewCardSectionFinesse({
  data,
}: ReviewCardSectionFinesseProps) {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return data?.cMap ? (
    <Box sx={data?.p?.styles}>
      <Box sx={{ maxWidth: '1280px', padding: isDesktop ? "3rem": '1rem', margin: "auto" }}>
        <Box
          sx={{
            padding: isDesktop ? '1rem' : '0',
            marginBottom: '1rem',
            textAlign: 'center',
            // width: '50vw', // Set the width to 100% of the viewport width
            maxWidth: isDesktop ? "50%" : "90%",
            margin: 'auto'
          }}
        >
          <Box>
            {findComponent(
              Text,
              data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
              'review-card-wrapper.text.header'
            )}
          </Box>
          <Box>
            {findComponent(
              Text,
              data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
              'review-card-wrapper.text.description'
            )}
          </Box>
        </Box>
        <Box>
          <ReviewCardWrapper
            {...data.cMap[
              '@remedoclinitech/staging.molecules.cards.review-card'
            ]?.[0]}
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <></>
  );
}
