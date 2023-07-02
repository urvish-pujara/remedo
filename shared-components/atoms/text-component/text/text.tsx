import {
  TextField,
  Typography,
  Skeleton,
  // Fab,
  // InputAdornment,
  TypographyProps,
  useTheme,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
// import CheckIcon from '@mui/icons-material/Check';
import { ComponentProps } from '@remedoclinitech/staging.common.utils';
import { EditContext } from '@remedoclinitech/staging.common.edit-context';
import { useRef } from 'react';

export enum ComponentState {
  Normal = 'Normal',
  Edit = 'Edit',
  Loading = 'Loading',
  Error = 'Error',
}

export type textProps = {
  text: string;
  state: ComponentState;
  style?: React.CSSProperties;
  helperText?: string;
  html?: boolean;
} & TypographyProps;

export type TextProps = ComponentProps<textProps, never, never>;

export function Text({ data, component }: TextProps) {
  const {
    p: {
      html,
      text,
      state = ComponentState.Normal,
      style,
      helperText,
      ...props
    },
  } = data;
  const [allowEdit, setAllowEdit] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const [alignInput, setAlignInput] = useState('left');
  const [textWidth, setTextWidth] = useState('0px');
  const setEditData = useContext(EditContext);
  const textRef = useRef<any>(null);
  const theme = useTheme();
  const [isSmall, setIsSmall] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.screen.width < 500) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    }
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const computedStyle = getComputedStyle(textRef.current);
      setAlignInput(computedStyle.textAlign);
    }
  }, [textRef.current]);

  useEffect(() => {
    setTextWidth(
      (textRef.current.parentElement.clientWidth + (isSmall ? 20 : 60) || 0) >
        (currentText.length + 1) *
          Number(
            (theme as any)?.typography[
              props.variant || 'body1'
            ]?.fontSize?.replace('px', '')
          )
        ? `${(currentText.length + 1) *
            Number(
              (theme as any)?.typography[
                props.variant || 'body1'
              ]?.fontSize?.replace('px', '')
            )}px`
        : `${textRef.current.parentElement.clientWidth + (isSmall ? 20 : 60) ||
            0}px`
    );
  }, [isSmall]);

  const onClick = () => {
    setAllowEdit(false);

    if (setEditData) {
      setEditData({
        component,
        data: {
          ...data,
          p: {
            ...data.p,
            text: currentText,
          },
        },
      });
    }
  };

  return (
    <div
      onClick={() => {
        if (!html) setAllowEdit(true);
      }}
      style={style}
    >
      {state === ComponentState.Loading ? (
        <Skeleton variant="rectangular" height={20} />
      ) : state === ComponentState.Edit && allowEdit ? (
        <TextField
          multiline
          helperText={helperText}
          autoFocus={true}
          value={currentText}
          onChange={e => {
            setCurrentText(e.target.value);
          }}
          onFocus={e =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
          onBlur={e => {
            setAllowEdit(false);
            onClick();
            e.preventDefault();
          }}
          variant="outlined"
          sx={{
            width: '100%',
            height: '100%',
            alignItems: alignInput,
          }}
          InputProps={{
            inputProps: {
              style: {
                textAlign: alignInput as any,
              },
            },
            sx: {
              ...(theme as any).typography?.[props.variant || 'body1'],
              ...props.sx,
              ...style,
              width: textWidth,
            },
            // endAdornment: (
            //   <InputAdornment position="end">
            //     <Fab
            //       size="small"
            //       onMouseDown={e => {
            //         onClick();
            //         e.preventDefault();
            //       }}
            //     >
            //       <CheckIcon />
            //     </Fab>
            //   </InputAdornment>
            // ),
          }}
        />
      ) : state === ComponentState.Error ? (
        <Typography {...props} sx={{ color: 'red' }}>
          Something went wrong
        </Typography>
      ) : (
        <Typography
          ref={textRef}
          {...props}
          sx={{ whiteSpace: 'pre-wrap', ...props.sx }}
        >
          {!html ? (
            currentText
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: currentText,
              }}
            ></div>
          )}
        </Typography>
      )}
    </div>
  );
}
