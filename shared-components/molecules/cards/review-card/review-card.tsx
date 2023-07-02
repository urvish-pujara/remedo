import React from 'react';
import { Box, Grid, SxProps } from '@mui/material';
import { Rating, RatingProps } from '@remedoclinitech/staging.atoms.rating';
import { Image, ImageProps } from '@remedoclinitech/staging.atoms.image-component.image';
import { Text, TextProps } from '@remedoclinitech/staging.atoms.text-component.text';
import { findComponent } from '@remedoclinitech/staging.common.find-component';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';

type reviewCardProps = {
  sx?: SxProps;
  variant?: 'normal' | 'variant1' | 'variant2';
};
type children = {
  '@remedoclinitech/staging.atoms.image-component.image': ImageProps[];
  '@remedoclinitech/staging.atoms.text-component.text': TextProps[];
  '@remedoclinitech/staging.atoms.rating': RatingProps[];
};

export type ReviewCardProps = ComponentProps<reviewCardProps, children, never>;

export function ReviewCard({ data }: ReviewCardProps) {
  {
    return data?.cMap?  (
    data.p.variant === 'normal' ? (
        <Box sx={{ borderRadius: 2, border: '1px solid #D8D8D8', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', padding: '1rem', position: 'relative', width: '300px', height: '200px', backgroundColor: 'white' }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Box sx={{ width: '80px', height: '50px', borderRadius: '50%' }}>
                {findComponent(
                  Image,
                  data.cMap['@remedoclinitech/staging.atoms.image-component.image'],
                  'review-card.image'
                )}
              </Box>
            </Grid>
            <Grid item>
              {findComponent(Rating,
                data.cMap['@remedoclinitech/staging.atoms.rating'],
                'review-card.rating'
              )}
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 'auto', marginBottom: '10px', marginLeft: '10px', fontSize: '14px', fontFamily: 'Lexend', color: '#aaa' }}>
            {
              findComponent(
                Text,
                data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
                'review-card.text.description'
              )
            }
          </Box>
          <Box >
            {findComponent(
              Text,
              data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
              'review-card.text.author'
            )}
          </Box>
        </Box>
      ) : data.p.variant === 'variant1' ? (
        <Box sx={{ borderRadius: 2, border: '1px solid #D8D8D8', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', padding: '1rem', position: 'relative', width: '300px', height: '200px', backgroundColor: 'white' }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              {findComponent(Rating,
                data.cMap['@remedoclinitech/staging.atoms.rating'],
                'review-card.rating'
              )}
            </Grid>
            <Grid item>
              <Box sx={{ width: '80px', height: '50px', borderRadius: '50%' }}>
                {findComponent(
                  Image,
                  data.cMap['@remedoclinitech/staging.atoms.image-component.image'],
                  'review-card.image'
                )}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 'auto', marginBottom: '10px', marginLeft: '10px', fontSize: '14px', fontFamily: 'Lexend', color: '#aaa' }}>
            {
              findComponent(
                Text,
                data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
                'review-card.text.description'
              )
            }
          </Box>
          <Box sx={{ position: 'absolute', bottom: '10px', left: '10px', fontFamily: 'Lexend', color: '#888', fontWeight: 'bold' }}>
            {findComponent(
              Text,
              data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
              'review-card.text.author'
            )}
          </Box>
        </Box>
      ) : data.p.variant === 'variant2' ? (
        <Box sx={{ borderRadius: 2, border: '1px solid #D8D8D8', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', padding: '1rem', position: 'relative', width: '300px', height: '200px', backgroundColor: 'white' }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Box sx={{ width: '80px', height: '50px', borderRadius: '50%' }}>
                {findComponent(
                  Image,
                  data.cMap['@remedoclinitech/staging.atoms.image-component.image'],
                  'review-card.image'
                )}
              </Box>
            </Grid>
            <Grid item>
              {findComponent(Rating,
                data.cMap['@remedoclinitech/staging.atoms.rating'],
                'review-card.rating'
              )}
            </Grid>
          </Grid>
          <Box sx={{ position: 'absolute', bottom: '10px', left: '10px', fontFamily: 'Lexend', color: '#888', fontWeight: 'bold' }}>
            {findComponent(
              Text,
              data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
              'review-card.text.author'
            )}
          </Box>
          <Box sx={{ marginTop: 'auto', marginBottom: '10px', marginLeft: '10px', fontSize: '14px', fontFamily: 'Lexend', color: '#aaa' }}>
            {
              findComponent(
                Text,
                data.cMap['@remedoclinitech/staging.atoms.text-component.text'],
                'review-card.text.description'
              )
            }
          </Box>
          
        </Box>
      ) : (
        <>
        </>
      )
    ) : (
      <>
      </>
    )
  }
}