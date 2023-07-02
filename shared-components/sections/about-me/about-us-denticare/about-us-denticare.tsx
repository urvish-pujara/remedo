import React, { ReactNode } from 'react';
import {
  Text,
  TextProps,
} from '@remedoclinitech/staging.atoms.text-component.text';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import { Image, ImageProps } from '@remedoclinitech/staging.atoms.image-component.image';
import { Box, Grid } from '@mui/material';
import { findComponent } from '@remedoclinitech/staging.common.find-component';
export type AboutUsDenticareProps = ComponentProps<
  {
    styles?: React.CSSProperties;
  },
  {
    '@remedoclinitech/staging.atoms.text-component.text': TextProps[];
    '@remedoclinitech/staging.atoms.image-component.image': ImageProps[];
  },
  never
>;
export function AboutUsDenticare({ data }: AboutUsDenticareProps) {
  return (
    <>
      {
        data.cMap ? (
          <Box sx={{ maxWidth: '1280px', margin: 'auto', ...data.p.styles, pb: 4, pt: 4, }}>
            <Grid container sx={{}}>
              {/* <Grid item lg={6} md={12} sm={12} sx={{ position: 'relative', padding: { lg: '0 10% 0 5%', md: '0 20%' } }}>
                <Box sx={{
                  left: '172px', top: '94px', position: { lg: 'absolute', md: 'unset', sm: 'unset', xs: 'unset' },
                  zIndex: '1', height: { lg: '437px', md: '100%', sm: '100%', xs: '400.82px' },
                  width: { lg: '368px', md: '100%', sm: '100%', xs: '337.5px' },
                  padding: { lg: '0 0', md: '0 0', sm: '0 10%', xs: '0 10%' }
                }}>
                  <Image {...data.cMap['@remedoclinitech/staging.atoms.image-component.image'][
                    data.cMap['@remedoclinitech/staging.atoms.image-component.image'].findIndex(
                      i => i.data.fieldName === 'about-us-denticare.image'
                    )
                  ]} />
                </Box>
                <Box sx={{ display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }, left: '126px', top: '112px', height: '460px', width: '460px', position: 'absolute', borderRadius: '460px', background: 'rgba(17, 103, 177, 0.05)' }}></Box>
              </Grid> */}
              <Grid item lg={6} md={12} sm={12}>
                <Box sx={{ padding: '0 5%', mt: '45px' }}>
                  {findComponent(Image, data.cMap['@remedoclinitech/staging.atoms.image-component.image'], 'about-us-denticare.image')}
                </Box>
              </Grid>
              <Grid item lg={6} md={12} sm={12} sx={{ padding: { lg: '0 10% 0 5%', md: '0 22%', sm: '0 10%', xs: '0 10%' } }}>
                <Box>
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.heading')}
                </Box>
                <Box sx={{ display: 'flex' }}>
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.sub.heading1')}
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.sub.heading2')}
                </Box>
                <Box>
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.description1')}
                </Box>
                <Box sx={{ mt: 2 }}>
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.description2')}
                </Box>
                <Box>
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.autho')}
                </Box>
                <Box>
                  {findComponent(Text, data.cMap['@remedoclinitech/staging.atoms.text-component.text'], 'about-us-denticare.text.speclty')}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <></>
        )
      }
    </>
  );
}