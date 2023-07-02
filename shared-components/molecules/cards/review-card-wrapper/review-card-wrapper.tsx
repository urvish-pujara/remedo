import React from 'react';
import { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  Box,
  Grid,
  SxProps,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ReviewCard,
  ReviewCardProps,
} from '@remedoclinitech/staging.molecules.cards.review-card';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';

type reviewCardWrapperProps = {
  styles?: SxProps;
  pageSize?: number;
};

export type ReviewCardWrapperProps = ComponentProps<
  reviewCardWrapperProps,
  never,
  ReviewCardProps
>;

const RenderCards = ({ cards, currentPage, setCurrentPage, ITEMS_PER_PAGE }: { cards: ReviewCardProps[], currentPage: number, setCurrentPage: any, ITEMS_PER_PAGE: number }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  console.log('ITEMS_PER_PAGE', ITEMS_PER_PAGE);
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log('swipe', isLeftSwipe ? 'left' : 'right');
  };
  const handleSwipeChange = (index: number) => {
    setCurrentPage(index);
  };

  // Autoscroll functionality
  const autoscrollInterval = 5000; // Interval in milliseconds

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      const nextPage = (currentPage + 1) % Math.ceil(cards.length / ITEMS_PER_PAGE);
      setCurrentPage(nextPage);
    }, autoscrollInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentPage, Math.ceil(cards.length / ITEMS_PER_PAGE)]);

  // const slideGroups = array of type reviewcardprops
  const slideGroups: ReviewCardProps[][] = [];
  for (let i = 0; i < cards.length; i += ITEMS_PER_PAGE) {
    slideGroups.push(cards.slice(i, i + ITEMS_PER_PAGE));
  }
  return (
    <Grid
      container
      // spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        // gap: '1rem',
      }}
    >
      <SwipeableViews index={currentPage} onChangeIndex={handleSwipeChange}>
        {
          slideGroups.map((slideGroup, index) => (
            <Grid
              container
              spacing={2}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                textAlign: 'center',
                // gap: '1rem',
              }}
            >
              {slideGroup.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    // gap: '1rem',
                  }}
                >
                  <ReviewCard component={card.component} data={card.data} />
                </Grid>
              ))}
            </Grid>
          ))
        }
      </SwipeableViews>
    </Grid>

  );
};

const getNextPage = (currentPage: number, totalPages: number) => {
  return currentPage < totalPages - 1 ? currentPage + 1 : 0;
};

export function ReviewCardWrapper({ data }: ReviewCardWrapperProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const ITEMS_PER_PAGE = isDesktop ? data.p.pageSize || 2 : 1;
  const reviewCards = data?.cArray?.components || [];
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState(
    reviewCards?.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    )
  );

  useEffect(() => {
    setCards(
      reviewCards?.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
      )
    );
  }, [currentPage]);

  return data?.cArray?.components ? (
    <Box
      sx={{
        marginBottom: '1rem',
        textAlign: 'center',
        width: '100vw', // Set the width to 100% of the viewport width
        maxWidth: '100%', // Ensure the width doesn't exceed the viewport width
        ...data.p.styles,
      }}
    >
      <RenderCards cards={reviewCards} currentPage={currentPage} setCurrentPage={setCurrentPage} ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: 5,
        }}
      >
        {Math.ceil(reviewCards.length / ITEMS_PER_PAGE) > 1 ? (
          Array(Math.ceil(reviewCards.length / ITEMS_PER_PAGE))
            .fill(0)
            .map((_, i) => (
              <Button
                key={i}
                variant={i === currentPage ? 'contained' : 'outlined'}
                onClick={() => setCurrentPage(i)}
                sx={{
                  mx: '2px',
                  minWidth: '18px',
                  minHeight: '18px',
                  borderRadius: '50%',
                  padding: 0,
                }}
              />
            ))
        ) : (
          <></>
        )}
      </Box>
    </Box>
  ) : (
    <></>
  );
}
