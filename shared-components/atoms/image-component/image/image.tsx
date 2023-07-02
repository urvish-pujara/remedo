import { Fab, Typography } from '@mui/material';
import { Skeleton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';

export enum ComponentState {
  Normal = 'Normal',
  Edit = 'Edit',
  Loading = 'Loading',
  Error = 'Error',
}

type imageProps = {
  /**
   * the image url to be rendered in the component.
   */
  src: string;
  /**
   * Nomral | Edit | Loading | Error
   */
  state: ComponentState;
  alt: string;
  style?: React.CSSProperties | undefined;
  /**
   * Show this image in case the primary src url is invalid or unresponsive
   */
  fallbackImageSrc?: string;
  type?: string;
  className?: string;
};

const ImageWithFallback = ({
  src,
  style,
  fallbackImageSrc,
  alt,
  type
}: {
  src: string;
  style?: React.CSSProperties;
  fallbackImageSrc?: string;
  alt: string;
  type?: string;
}) => {
  return (
    <object data={src} style={style} type={type}>
      <img
        src={
          fallbackImageSrc ||
          'https://st4.depositphotos.com/14953852/24651/v/600/depositphotos_246517344-stock-illustration-image-available-icon-vector-flat.jpg'
        }
        alt={alt}
      />
    </object>
  );
};

export type ImageProps = ComponentProps<imageProps, never, never>;

export function Image({
  data: {
    fieldName,
    p: { src, alt, state, fallbackImageSrc, style, type, className },
  },
}: ImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [allowSaveImage, setAllowSaveImage] = useState(false);
  const [imageSaveRes, setImageSaveRes] = useState<any>();
  const inputRef = useRef(null);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    // if (imageSaveRes?.state === ActionResponseState.Success)
    //   setAllowSaveImage(false);
  }, [imageSaveRes]);

  return (
    <div className={className}>
      {state === ComponentState.Loading ? (
        <Skeleton variant="rectangular" height="100%" width="100%" />
      ) : state === ComponentState.Edit ? (
        <>
          <input
            id="file"
            ref={inputRef}
            style={{ display: 'none' }}
            type="file"
            onChange={event => {
              setImageSrc(
                URL.createObjectURL(event.target.files?.[0] || new File([], ''))
              );
              setAllowSaveImage(true);
            }}
          />
          <div
            ref={containerRef}
            style={{ position: 'relative' }}
            onClick={() => {
              setImageSaveRes(undefined);
              (inputRef.current as any)?.click();
            }}
          >
            <div
              // TODO: update style to be configurable from props
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'black',
                borderRadius: '15px',
                padding: '10px',
                opacity: '80%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="subtitle1" sx={{ color: 'white' }}>
                Tap to update image
              </Typography>
              {allowSaveImage && (
                <Fab
                  style={{ margin: '5px 5px 5px 15px' }}
                  onClick={e => {
                    e.stopPropagation();
                    setAllowSaveImage(false);
                  }}
                  size="small"
                >
                  <CheckIcon />
                </Fab>
              )}
            </div>
            <ImageWithFallback
              src={imageSrc}
              alt={alt}
              fallbackImageSrc={fallbackImageSrc}
              type={type}
              style={{
                width: '100%',
                height: '100%',
                minHeight: containerRef.current?.parentElement?.clientHeight,
                minWidth: containerRef.current?.parentElement?.clientWidth,
                ...style,
              }}
            />
          </div>
        </>
      ) : state === ComponentState.Error ? (
        <ImageWithFallback
          src={''}
          alt={alt}
          type={type}
          fallbackImageSrc={fallbackImageSrc}
          style={{ width: '100%', height: '100%', ...style }}
        />
      ) : (
        <ImageWithFallback
          src={imageSrc}
          alt={alt}
          fallbackImageSrc={fallbackImageSrc}
          type={type}
          style={{ width: '100%', height: '100%', ...style }}
        />
      )}
    </div>
  );
}
