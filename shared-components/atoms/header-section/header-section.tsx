import React from 'react';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import { Typography } from '@mui/material';

export type HeaderProps = {
  heading?: string;
  description?: string;
};

export type HeaderSectionProps = ComponentProps<HeaderProps, never, never>;

export function HeaderSection({ data }: HeaderSectionProps) {
  return (
    <>
      {data.p.heading && <Typography variant="h1">{data.p.heading}</Typography>}
      {data.p.description && <Typography variant="body1">{data.p.description}</Typography>}
    </>
  );
}
